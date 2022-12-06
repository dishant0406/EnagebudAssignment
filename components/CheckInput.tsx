type Props = {
  checked:boolean,
  onChange:React.ChangeEventHandler<HTMLInputElement>
}

const CheckInput = ({checked, onChange}: Props):JSX.Element => {
  return (
    <div className='h-[4rem] rounded border items-center justify-start flex gap-[1rem] border-black w-[20rem]'>
      <div className='h-[2.8rem] ml-[1rem] gap-[1rem] flex items-start'>
        <input checked={checked} onChange={onChange} type={'checkbox'} className='h-[1.2rem] mt-[2px] accent-[#605c65] w-[1.2rem]'/>
        <p className='text-[11px] font-[500] w-[17rem]' style={{lineHeight:'15px'}}>
          I agree to receiving recurring automated messages at the number I have provided.<br/>
          Consent is not a condition to purchase.
        </p>
      </div>
    </div>
  )
}

export default CheckInput