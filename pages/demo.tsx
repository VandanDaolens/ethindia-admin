import React from 'react'
import Widget from '../components/widget'
import { DUMMY_QUEST_DATA } from '../lib/constants'

const Demo = () => {
  return (
    <div>
      <Widget quest={DUMMY_QUEST_DATA} />
    </div>
  )
}

export default Demo