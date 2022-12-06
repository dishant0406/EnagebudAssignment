import background from '../public/assets/background.svg'
import wheel from '../public/assets/wheeel.png'
import mail from '../public/assets/mail.svg'
import phoneimg from '../public/assets/phone.svg'
import CustomInput from '../components/CustomInput'
import CheckInput from '../components/CheckInput'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

type Props = {}

const Home = (props: Props):JSX.Element => {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [checked, setChecked] = useState(false)
  const router = useRouter()

  const validateEmail = (email:String) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const clickHandler = ():void =>{

    validateEmail(email) && phone!=='' && (
      async () => {
        // try{
        //   const {data} = await axios.post('https://reqres.in/api/register', {
        //   email,
        //   password:phone
        // })
        // console.log(data)

        // }catch(err){
        //   console.log(err)
        // }

        router.push('/spin')
      }
    )()

  }

  return (
    <div className="w-[100vw] flex-wrap flex justify-center md:gap-[12rem] items-center min-h-[100vh]" style={{backgroundImage:`url(${background.src})`, backgroundSize:'cover'}}>
      <img src={wheel.src} className='w-[15rem] md:w-[25rem]'/>
      <div className='w-[25rem] md:h-[26rem] gap-[1rem] items-center flex flex-col'>
        <p className='text-[28px] w-[21rem] font-[700]' style={{lineHeight:'45px'}}>This is how EngageBud looks like in action!</p>
        <CustomInput image={mail.src} value={email} onChange={e=>setEmail(e.target.value)} title='Email' placeholder='joe@gmail.com' type='email'/>
        <CustomInput image={phoneimg.src} value={phone} onChange={e=>setPhone(e.target.value)} title='Phone number' placeholder='+91 98256 XXXX' type='text'/>
        <CheckInput checked={checked} onChange={(e)=>setChecked(e.target.checked)}/>
        <button onClick={clickHandler} disabled={!checked} className={`w-[20rem] ${!checked ? "opacity-[0.7]":""} rounded-[30px] text-[24px] font-[600] h-[3.5rem] bg-[#146531] text-white`}>Try your luck</button>
        <p className='text-[7px] italic'>*You can spin the wheel only once! *If you win, you can claim your coupon for 10 minutes only!</p>
      </div>
    </div>
  )
}

export default Home