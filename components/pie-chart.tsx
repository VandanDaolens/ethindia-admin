
import { Doughnut } from 'react-chartjs-2'

export const PieGraphs = ({
  ele,
  sumOFDatas,
  options,
  plugins,
  mcqOptions,
  mcqTitles,
  index,
  sumOfPieDatas,
}) => {
  return (
    <div
      style={{
        boxShadow: '0px 4px 16px rgb(132 148 160 / 12%)',
      }}
      className="flex flex-col border-[1px] border-[#DDDDDD] rounded-[22px] p-12"
      key={index}
    >
      <div className="flex gap-8">
        <div className="w-[27%] relative flex items-center">
          <div className="z-10 h-full w-full flex items-center">
            <Doughnut
              data={ele}
              options={options}
              plugins={plugins}
              width="230px"
              height="230px"
            />
          </div>
          <div className="absolute h-full w-full top-0 left-0 flex flex-col items-center justify-center">
            <div
              className="flex flex-col items-center justify-center p-8 rounded-[50%] border-[1px] border-dashed"
              style={{ boxShadow: '0px 4px 16px rgba(132, 148, 160, 0.12)' }}
            >
              <p className="text-lg font-semibold">{sumOfPieDatas[index]}</p>
              <p className="text-[#94A3B8] text-xs ">
                {sumOfPieDatas[index] > 1 ? 'Members' : 'Member'}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[73%] flex flex-col justify-center">
          <p className="font-medium text-[18px] mb-[52px]">
            {mcqTitles[index]}
          </p>
          <div className=" text-[#64748B] font-medium text-[15px] grid grid-cols-2 gap-6">
            {ele?.datasets?.[0].data.map((val, idx) => {
              const percentage = (val / sumOFDatas) * 100
              const color = ele.datasets?.[0].backgroundColor[idx]
              return (
                <div
                  className="flex gap-5 text-[#64748B] font-medium text-[15px]"
                  key={idx}
                >
                  <span key={idx} className="w-[15%] text-right">
                    {percentage.toFixed(2)}%
                  </span>
                  <span
                    style={{
                      backgroundColor: `${color}`,
                      height: '28px',
                      width: '5px',
                    }}
                  ></span>
                  <span>{mcqOptions[index][idx]}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
