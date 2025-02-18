import React, { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  const navItems = [
    {
      name: "About",
      id: "#about",
    },
    {
      name: "Today's Special",
      id: "#special",
    },
    {
      name: "menu",
      id: "#menu",
    },
    {
      name: "reservation",
      id: "#reservation",
    },
    {
      name: "team",
      id: "#team",
    },
    {
      name: "gallery",
      id: "#gallery",
    },
    {
      name: "contact",
      id: "#contact",
    },
    {
        name:<CiSearch/>,
        id:"#search"
}
  ];
  const[selected,setselected]=useState(0)
  const navbarRef = useRef(null);

  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
 
        const distanceFromTop = navbarRef.current.getBoundingClientRect().top;
if(distanceFromTop===0){
    setIsSticky(true)
}else{
    setIsSticky(false)
}

    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={navbarRef}   style={{
        position: isSticky ? 'fixed' : 'relative', // Set position to 'sticky' when isSticky is true, otherwise set it to 'relative'
        top: '0',
        left: '0',
        width:'100%'
      }} className="flex items-center px-96 justify-between border bg-zinc-900 h-20 mb-24">
      <div>
        <img src="" alt="Logo" />
      </div>
      <ul className="flex items-center gap-12 text-sm">
       {navItems.map((item, index) => (
          <li  key={index}>
            <a  className={`${selected===index?'text-yellow-400':'text-slate-300'}`} href={item.id}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
