import React from 'react'
import logoBig from '../../assets/logo_big.png'
import navprofile from '../../assets/user.png'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center py-4 px-15 shadow-xl max-md:px-8'>
        <div className='flex items-center gap-2'>
            <img src={logoBig} alt="Nav Logo" className='nav-logo w-[60px] h-[60px] max-md:w-10 max-md:h-10' />
            <h1 className='text-3xl font-bold max-md:text-2xl'>FASHION VISTA</h1>
        </div>
        <img src={navprofile} alt="Nav Profile" className='nav-profile w-12 h-12 max-md:w-10 max-md:h-10' />
    </div>
  )
}

export default Navbar