import background from '../public/assets/background.svg'
import wheel from '../public/assets/wheeel.png'
import { useHash } from '../context/useSpinValue'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

type Props = {}

const Home = (props: Props):JSX.Element => {
  const router = useRouter()
  const {value} = useHash()

  useEffect(()=>{
    if(!value){
      router.push('/')
    }
  },[])

  const copyToClipBoardHandler = (type:boolean):void =>{
    navigator.clipboard.writeText(value.split(' ')[1].toUpperCase())
    if(type){
      router.push('/')
    }
  }

  if(!value){
    return <div></div>
  }

  return (
    <div className="w-[100vw] flex-wrap flex justify-center md:gap-[12rem] items-center min-h-[100vh]" style={{backgroundImage:`url(${background.src})`, backgroundSize:'cover'}}>
      <img src={wheel.src} className='w-[15rem] md:w-[25rem]'/>
      <div className='w-[25rem] md:h-[26rem] gap-[1rem] items-center flex flex-col'>
        <p className='text-[24px] text-center w-[21rem] font-[700]' style={{lineHeight:'45px'}}>Congrats! You Won:</p>
        <p className='text-[28px] text-center w-[21rem] font-[700]' style={{lineHeight:'45px'}}>{value}</p>
        <div className='w-[20rem] h-[5rem] flex '>
          <div className='w-[15rem] flex items-center justify-center rounded-l-[15px] h-[5rem] bg-[#a2c3a4]'>
            <p className='font-[600] text-white text-[30px]'>{value.split(' ')[1].toUpperCase()}</p>
          </div>
          <div onClick={()=>copyToClipBoardHandler(false)} className='w-[5rem] cursor-pointer flex items-center justify-center rounded-r-[15px] h-[5rem] bg-[#146531]'>
            <p className='font-[600] text-white text-[20px]'>COPY</p>
          </div>
        </div>
        <button onClick={()=>copyToClipBoardHandler(true)} className={`w-[20rem] rounded-[30px] text-[24px] font-[600] h-[3.5rem] bg-[#146531] text-white`}>Close Panel & Copy</button>
        <p className='text-[7px] italic'>*You can spin the wheel only once! *If you win, you can claim your coupon for 10 minutes only!</p>
      </div>
    </div>
  )
}

export default Home