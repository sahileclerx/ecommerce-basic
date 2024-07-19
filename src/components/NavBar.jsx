import {React, useState, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineShoppingCart, HiOutlineMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { FcShop } from "react-icons/fc";
import useStrReplace from "../hooks/useStrReplace";

const NavBar = () => {

    const [search, setSearch] = useState(true);
    const [searchVal, setSearchVal] = useState('');
    const searchRef = useRef(null);
    const navigate = useNavigate();

    const toggleSearch = () => {
        // setSearchVal('')
        setSearch(!search)
        if(search){
            searchRef.current.focus();
        }
    }

    const redirectToShop = (e) => {
        if (e.keyCode === 13) {
            navigate(`/shop/search/${useStrReplace(searchVal, ' ', '-')}`);
            setSearch(!search)
            searchRef.current.blur();
            setSearchVal('')
        }
    }

    return (
        <>
        <nav className="flex justify-between py-3 px-5 bg-gray-100 item-center fixed top-0 w-full z-[10]">
            <Link to="/" className="font-semibold text-xl flex items-center gap-2 shrink-0"><FcShop className="text-3xl" /> Ecommerce Basic</Link>
            <ul className="flex gap-5 items-center fixed bottom-0 p-4 w-full bg-gray-100 left-0 justify-between sm:static sm:justify-end sm:p-0">
                <li className="flex items-center gap-1 cursor-pointer" onClick={() => toggleSearch()}><HiOutlineMagnifyingGlass className="text-2xl" /> Search</li>
                <li><Link to="shop" className="flex items-center gap-1"><HiOutlineShoppingBag className="inline text-2xl" /> Shop</Link></li>
                <li><Link to="cart" className="flex gap-1"><HiOutlineShoppingCart className="inline text-2xl" /> Cart <span className="bg-red-500 rounded-full w-[14px] h-[14px] text-white flex items-center justify-center text-[10px]">2</span></Link></li>
            </ul>
        </nav>
        <div className={`flex p-3 items-center fixed transition-all duration-500 w-full left-[0px] z-[5] ${search ? 'top-[0px] bg-gray-100' : 'top-[50px] bg-gray-50'}`}><input type="text" className="w-full bg-transparent p-2 focus:outline-none" placeholder="Search Products" ref={searchRef} value={searchVal} onChange={(e) => setSearchVal(e.target.value) } onKeyDown={redirectToShop} /> <p className="shrink-0 text-gray-400"><HiOutlineMagnifyingGlass className="text-2xl" /></p></div>
        <div className='mt-[60px]'></div>
        </>
    )
}

export default NavBar ;