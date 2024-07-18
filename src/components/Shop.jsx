import Hero from "./Hero";
import { useParams } from "react-router-dom";
import useStrReplace from "../hooks/useStrReplace";

const Shop = () => {
    console.log(useParams())
    const { type, term } = useParams();
    
    return (
        <>
            <Hero size={50} extraClasses="capitalize" text={type==`category` ? useStrReplace(term, '-', ' ') : 'Shop'} />
        </>
    )
}

export default Shop;