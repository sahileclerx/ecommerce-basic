import {React, useState, useRef} from "react";
import { HiOutlineShoppingCart, HiOutlineMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { FcShop } from "react-icons/fc";

const NavBar = () => {

    const [search, setSearch] = useState(true);
    const [searchVal, setSearchVal] = useState('');

    const searchRef = useRef(null);

    const toggleSearch = () => {
        // setSearchVal('')
        setSearch(!search)
        if(search){
            searchRef.current.focus();
        }
    }

    return (
        <>
        <nav className="flex justify-between py-3 px-5 bg-gray-100 item-center fixed w-full z-[10]">
            <h1 className="font-semibold text-xl flex items-center gap-2 shrink-0"><FcShop className="text-3xl" /> Ecommerce Basic</h1>
            <ul className="flex gap-5 items-center fixed bottom-0 p-4 w-full bg-gray-100 left-0 justify-between sm:static sm:justify-end sm:p-0">
                <li className="flex items-center gap-1"><HiOutlineShoppingBag className="inline text-2xl" /> Shop</li>
                <li className="flex items-center gap-1" onClick={() => toggleSearch()}><HiOutlineMagnifyingGlass className="text-2xl" /> Search</li>
                <li className="flex gap-1"><HiOutlineShoppingCart className="inline text-2xl" /> Cart <span className="bg-red-500 rounded-full w-[14px] h-[14px] text-white flex items-center justify-center text-[10px]">2</span></li>
            </ul>
        </nav>
            <div className={`flex p-3 bg-gray-50 items-center fixed transition-all duration-500 w-full left-[0px] z-[5] ${search ? 'top-[0px]' : 'top-[50px]'}`}><input type="text" className="w-full bg-transparent p-2 focus:outline-none" placeholder="Search Products" ref={searchRef} value={searchVal} onChange={(e) => setSearchVal(e.target.value) } /> <p className="shrink-0 text-gray-400"><HiOutlineMagnifyingGlass className="text-2xl" /></p></div>
        </>
    )
}

export default NavBar ;