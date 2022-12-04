import { createAlchemyWeb3 } from '@alch/alchemy-web3'
import { nanoid } from 'nanoid'
import { DEFAULT_QUESTION_DATA } from './constants'
import { IPFSResType, QuestResponseType, QuestType } from './types'
import contractABI from '../data/save-data-structure.json'
import { Web3Provider } from '@ethersproject/providers'
import { ethers } from 'ethers'

import { ChainId } from '@biconomy/core-types'
import dynamic from 'next/dynamic'
import SmartAccount from '@biconomy/smart-account'
const Web3 = require('web3')

export const getScorePercent = (response: QuestResponseType) => {
  const totalQuestions = response.quest?.questions?.length
  const totalCorrectAnswers = response?.quest?.questions?.filter((question) => {
    const answeredOptions = response?.responses?.find(
      (res) => res.questionId === question.id
    )?.options
    let isCorrect = true
    question.options?.forEach((option) => {
      const isMarked = answeredOptions?.includes(option.id)
      if (isMarked && !option?.isCorrect) isCorrect = false
      if (!isMarked && option?.isCorrect) isCorrect = false
    })
    return isCorrect
  })?.length
  if (!totalCorrectAnswers) return 0
  return (totalCorrectAnswers * 100) / totalQuestions
}

export const getDefaultQuestionData = () => {
  const data = DEFAULT_QUESTION_DATA
  data.id = nanoid()
  data.options = []
  return data
}

export const uploadNftMetadataToIpfs = async (image?: File) => {
  if (!image) return
  try {
    const formData = new FormData()
    formData.append('files', image)

    const apiEndpoint = 'http://localhost:8080'

    const response = await fetch(apiEndpoint + '/uploadToIpfsnft', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) throw new Error(response.statusText)

    const data = await response.json()
    console.log(data)
    return data.url
  } catch (error) {
    console.error(error)
  }
}

export const uploadToIpfs = async (data: QuestType) => {
  try {
    const apiEndpoint = 'http://localhost:8080'

    const response = await fetch(apiEndpoint + '/uploadToIpfs', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) throw new Error(response.statusText)

    const dataIpfs = await response.json()
    return dataIpfs
  } catch (error) {
    console.error(error)
  }
}

export const saveToQuestSmartContract = async (
  mcqUrl: string,
  imageUrl: string,
  questId: string,
  smartAccount: SmartAccount,
  onSuccess: () => void,
  onError: () => void
) => {
  try {
    const SMART_CONTRACT_ADDR = '0xb20458C5c5306EB1013e15a955c69F938903859a'

    const erc20Interface = new ethers.utils.Interface(contractABI.abi)
    const data1 = erc20Interface.encodeFunctionData('addQuest', [
      mcqUrl,
      questId,
      imageUrl,
    ])

    let tx: any = {
      to: SMART_CONTRACT_ADDR,
      data: data1,
    }

    smartAccount.on('txHashGenerated', (response: any) => {
      console.log('txHashGenerated event received via emitter', response)
      onSuccess()
    })

    smartAccount.on('txMined', (response: any) => {
      console.log('txMined event received via emitter', response)
    })

    smartAccount.on('error', (response: any) => {
      console.log('error event received via emitter', response)
      onError()
    })

    const res = await smartAccount.sendGasLessTransaction({
      transaction: tx,
    })
    console.log(res)
  } catch (err) {
    console.log(err)
    console.error(err)
  }
}

export const getHttpUrlFromIpfsUrl = (ipfsUrl = '') => {
  if (!ipfsUrl) return ''
  const urlWithoutProtocal = ipfsUrl.split('ipfs://')[1]

  if (!urlWithoutProtocal) return ''

  return 'https://ipfs.io/ipfs/' + urlWithoutProtocal
}

export const fetchImageUrl = async (ipfsMetadataUrl = '') => {
  try {
    if (!ipfsMetadataUrl) {
      return
    }
    const url = getHttpUrlFromIpfsUrl(ipfsMetadataUrl)
    const response = await fetch(url)
    if (!response.ok) throw new Error(response.statusText)
    const data = await response.json()
    const imageFromJson = data?.image

    const httpImageUrl = getHttpUrlFromIpfsUrl(imageFromJson)

    return httpImageUrl
  } catch (error) {
    console.error(error)
  }
  return ''
}

export const getQuestsFromIPFSUrls = async (ipfsUrls: IPFSResType[]) => {
  const quests = []

  try {
    for (let index = 0; index < ipfsUrls.length; index++) {
      const ipfsObj = ipfsUrls[index]
      const imageData = await fetchImageUrl(ipfsObj.nftMetadata)
      const ipfsQuestDataUrl =
        'ipfs://QmU57PesWyA17rozP5pvC67x6Zic2oCEymX7V99MvRx1D4'
      const url = getHttpUrlFromIpfsUrl(ipfsQuestDataUrl)
      const response = await fetch(url)
      if (!response.ok) throw new Error(response.statusText)
      const data: QuestType = await response.json()
      data.imageUrl = imageData as any
      quests.push(data)
    }
  } catch (error) {
    console.error(error)
  }
  return quests
}

export const getQuests = async (smartAccount: SmartAccount) => {
  try {
    const provider =
      'https://polygon-mumbai.g.alchemy.com/v2/hZmK5Wz1sbAPE8orT34emmU3rO2K61sA'
    const web3 = createAlchemyWeb3(provider)
    var deployedContract = new web3.eth.Contract(
      contractABI.abi as any,
      '0xb20458C5c5306EB1013e15a955c69F938903859a',
      {
        from: '0x7D04A724BCd6c0DBAf976BE9e9b89758c300E45A',
      }
    )
    //now you should be able to access contract methods
    console.log('asd', smartAccount.address)
    const res: IPFSResType[] = await deployedContract.methods
      .getQuests()
      .call({ from: smartAccount.address })
    return await getQuestsFromIPFSUrls(res)
  } catch (err) {
    console.log(err)
    console.error(err)
  }
}
