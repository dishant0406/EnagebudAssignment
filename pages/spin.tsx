import background from '../public/assets/background.svg'
import wheel from '../public/assets/spinner.png'
import pointer from '../public/assets/pointer.png'
import { useState } from 'react'
import { useHash } from '../context/useSpinValue'
import { useRouter } from 'next/router'

type Props = {}

const Spin = (props: Props) => {
  const [rotation, setRotation] = useState(0);
  const {setValue} = useHash()
  const router = useRouter()


  function handleClick() {
    let x = 1024
    let y = 9999
    const spins = Math.floor(Math.random() * (x - y)) + y;
    setRotation(spins);
    const finalDegree = ((spins)%360)


    if(finalDegree>=0 && finalDegree<=30){
      setValue('30% SITEWIDE OFF')


    }else if(finalDegree>=31 && finalDegree<=90){
      setValue('HOT CHOCLATE FREE WITH TEA')


    }else if(finalDegree>=91 && finalDegree<=150){
      setValue('Free 50g tea on purchase of Rs. 500')


    }else if(finalDegree>=151 && finalDegree<=210){

      setValue('Buy 2 Effervescent tablets & get 1 free')


    }else if(finalDegree>=211 && finalDegree<=270){

      setValue('FREE COFFEE MUG ON PURCHASE WORTH 1000+')


    }else if(finalDegree>=271 && finalDegree<=330){

      setValue('BUY 1 GET 1 FREE')

    }
    else if(finalDegree>=331 && finalDegree<=360){
        
      setValue('30% SITEWIDE OFF')
  
    }

    setTimeout(()=>{
      router.push('/result')
    },5000)

  }

  return (
    <div className="w-[100vw] flex-wrap flex justify-center flex-col gap-[2rem] items-center min-h-[100vh]" style={{backgroundImage:`url(${background.src})`, backgroundSize:'cover'}}>
      <div className='relative'>
        <img src={wheel.src} style={{ transform: `rotate(${rotation}deg)` }} className='w-[20rem] duration-[3s] transition md:w-[25rem]'/>
        <img src={pointer.src} className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[3rem]'/>
      </div>
      <button onClick={handleClick} className={`w-[10rem] rounded-[30px] text-[24px] font-[600] h-[4rem] bg-[#146531] text-white`}>spin</button>
    </div>
  )
}

export default Spin