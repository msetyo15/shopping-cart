import React from 'react';
import {FaShoppingBag} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
const Navbar = () => {
  const counter = useSelector(state => state.movements.itemsCounter)
  return (
    <div className='fixed w-screen'>
      <div className='font-sans shadow-lg bg-blue-600 '>
        <div className='xl:max-w-[1600px] lg:max-w-[1440px] md:max-w-[976px] sm:max-w-[768px] xs:max-w-[480px] mx-auto flex md:justify-between justify-around items-center h-[50px] '>
          <div className='brand'>
            <Link to={'/'} className='font-bold text-xl text-white'>Shopping Cart Test</Link>
          </div>

          <div className='flex relative'>
            <Link to={'/basket'}> 
            <FaShoppingBag className='c text-white text-2xl '/>
            <span className='px-[6px] py-[1px] text-[12px] bg-white text-black rounded-3xl flex item-center absolute bottom-[10px] left-[16px]'>{counter}</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;