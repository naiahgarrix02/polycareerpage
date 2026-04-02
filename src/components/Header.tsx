const Header = () => {
  return (
    <div className='flex flex-row w-full py-6 lg:px-40 md:px-12 px-6 gap-70 items-center'>
        <img src='/logo.svg' alt='Logo' />
        <div className='gap-16 w-2/3 flex flex-row items-center lg:block hidden'>
            <a className='font-manrope-regular text-[16px] text-gray-800 hover:text-blue-500' href='#'>Home</a>
            <a className='font-manrope-regular text-[16px] text-gray-800 hover:text-blue-500' href='#'>About Us</a>
            <a className='font-manrope-regular text-[16px] text-gray-800 hover:text-blue-500' href='#'>Services</a>
            <a className='font-manrope-regular text-[16px] text-gray-800 hover:text-blue-500' href='#'>Careers</a>
            <a className='font-manrope-regular text-[16px] text-gray-800 hover:text-blue-500' href='#'>Contact Us</a>
        </div>
    </div>
  )
}

export default Header