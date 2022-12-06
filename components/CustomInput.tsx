type Props = {
  image:string,
  title:string,
  placeholder:string,
  type:string,
  value:string,
  onChange:React.ChangeEventHandler<HTMLInputElement>
}

const CustomInput = ({image, title, placeholder, type, value, onChange}: Props):JSX.Element => {
  return (
  <div className='relative'>
    <input value={value} onChange={onChange} type={type} placeholder={placeholder} className='w-[20rem] placeholder-[#605c65] pt-[0.7rem] pl-[4rem] border-b border-[#49454F] rounded-t h-[3.5rem]'/>
    <p className='text-[12px] absolute top-[2px] left-[4rem] font-[#49454F]'>{title}</p>
    <img src={image} className='absolute bottom-[18px] left-[10px] w-[1.7rem]'/>
  </div>
  )
}

export default CustomInput