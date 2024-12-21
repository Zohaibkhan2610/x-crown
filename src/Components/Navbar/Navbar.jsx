import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  let links = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/Pricing" },
    { name: "Contact", path: "/Contact" },
    { name: "Setup", path: "/Setup" },
]
let closeMenu=()=> setOpen(!open);


  return (
    <nav
     className="bg-[black] font-serif top-0 border border-black">
      <div className="flex relative items-center font-medium justify-around">
        <div className="z-50 py-5  md:w-auto w-full flex justify-between ">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-16" />
          <div className="text-3xl md:hidden absolute top-[30%] right-[4%]" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon className="text-white" icon={open ?  faTimes: faBars}/>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-sans">
          {links.map((pageLink,index)=>{
            return(
                <li key={index} className="">
            <Link to={pageLink.path} className="hover:text-[red] py-7 text-white px-3 inline-block">
              {pageLink.name}
            </Link>
          </li>
            )
          })}
        </ul>
        <div class="md:flex hidden flex-wrap justify-center gap-4">
        <div class="flip-card w-52 h-16 overflow-hidden">
  <div class="flip-card-inner ">
    <div class="flip-card-front border border-[red] rounded-full">
      <Link to='/FreeTrail' className='w-full h-full flex text-clip items-center justify-center text-2xl font-bold'>Free trail</Link>
    </div>
    <div class="flip-card-back bg-[yellow] border-[black] rounded-full">
    <Link to='/FreeTrail' className='w-full h-full flex text-clip items-center justify-center text-2xl font-bold'>Free trail</Link>
    </div>
  </div>
</div>
      </div>
        {/* Mobile nav */}
        <div onClick={closeMenu} className={`bg-black w-full ${open ? "left-0" : "left-[100%]"} md:hidden fixed top-0 overflow-y-auto bottom-0 py-24 pl-4
        z-50 h-full`}>
        <ul
          className={`
        md:hidden bg-[black] fixed w-[75%] top-0 ${open ? "right-[0]" : "right-[-100%]"} overflow-y-auto right-0 bottom-0 py-24 pl-4 z-30
        duration-700 flex flex-col gap-6 items-center ${open ? "opacity-100" : "opacity-0"} $
        `}
          >
            <div className="text-3xl md:hidden absolute top-[5%] right-[6%]" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon className="text-white" icon={open ?  faTimes: faBars}/>
          </div>
          <img src={Logo} alt="logo" className="md:cursor-pointer h-16" />
          {links.map((pageLink,index)=>{
            return(
                <li key={index} onClick={closeMenu}>
            <Link to={pageLink.path} className="duration-500 text-lg hover:text-[red] font-black text-white py-2 px-3 inline-flex">
              {pageLink.name}
            </Link>
          </li>
            )
          })}
            <div class="mt-8 flex flex-wrap justify-center gap-4">
            <div class="flip-card w-52 h-16 overflow-hidden">
            <div class="flip-card-inner ">
    <div class="flip-card-front border border-[red] rounded-full">
      <Link to='/FreeTrail' className='w-full h-full flex text-clip items-center justify-center text-2xl font-bold'>Free trail</Link>
    </div>
    <div class="flip-card-back bg-[yellow] border-[black] rounded-full">
    <Link to='/FreeTrail' className='w-full h-full flex text-clip items-center justify-center text-2xl font-bold'>Free trail</Link>
    </div>
  </div>
</div>
      </div>
          
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







