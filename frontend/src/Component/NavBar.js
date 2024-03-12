import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Images/Cricket5.png'
import './NavBar.css';
const NavBar = () => {
  return (
    <header className="bg-blue-500 py-2 px-2  shadow-2xl flex justify-between items-center flex-wrap">
    <div className="flex items-center h-32">
      <h1 className="text-white text-blue-100 text-3xl ">CrickInformer</h1>
      <img src={logo} alt='mypic' className='h-full'/>
    </div>
   
    <nav className='navbar w-full lg:w-1/2'> {/* Added flex-grow class to take remaining space */}
      <ul className="flex lg:text-xl text-white ">
        <li><Link to={"/"} className="hover:text-gray-300 ">Live Matches</Link></li>
        <li><Link to={"/history"} className="hover:text-gray-300 ">History</Link></li>
        <li><Link to={"/upcoming"} className="hover:text-gray-300">Upcoming</Link></li>
        <li><Link to={"/rankings/batting"} className="hover:text-gray-300">Rankings</Link></li>
        
      </ul>
    </nav>
    <div></div> {/* Add a div to maintain space between first div and nav */}
  </header>

  );
}

export default NavBar;
