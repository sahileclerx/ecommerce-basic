import Hero from "./Hero";
import { useParams, Link } from "react-router-dom";
import useStrReplace from "../hooks/useStrReplace";
import useFetch from "../hooks/useFetch";
import { HiOutlineStar, HiOutlinePlus } from "react-icons/hi2";

const Shop = () => {
    // console.log(useParams())
    // Test Comment
    const { type, term } = useParams();

    let url = type === 'category' ? `https://fakestoreapi.com/products/category/${useStrReplace(term, '-', ' ')}` : 'https://fakestoreapi.com/products';

    let { data: products, loading, error } = useFetch(url);
    if(type === 'search'){
        products = products && products.filter((product) => product && `${product.title} ${product.category}`.toLowerCase().indexOf(`${term}`) !== -1)
    }
    // console.log(products);
    return (
        <>
            <Hero size={50} extraClasses="capitalize" text={type==`category` ? useStrReplace(term, '-', ' ') : type=='search' ? `Search results for ${useStrReplace(term, '-', ' ')}` : 'Shop'} />

            {
                products ?
                <div className="grid gap-6 grid-cols-12 mt-5 p-5 relative items-start">

                <div className="col-span-3 border rounded p-3 sticky top-[80px] max-h-[80vh] overflow-auto">
                    <h4 className="font-semibold text-xl">Filter & Sort</h4>
                    <div className="border-b py-3">
                        <h5 className="font-semibold mb-1">Sort by Price</h5>
                        <p>Low to High</p>
                        <p>High to Low</p>
                    </div>
                    <div className="border-b py-3">
                        <h5 className="font-semibold mb-1">Price Range</h5>
                        <p>Under $1000</p>
                        <p>Under $800</p>
                        <p>Under $600</p>
                        <p>Under $400</p>
                        <p>Under $200</p>
                        <p>Under $100</p>
                    </div>
                    <div className="border-b py-3">
                        <h5 className="font-semibold mb-1">Category</h5>
                        <p>ELECTRONICS</p>
                        <p>JEWELERY</p>
                        <p>MEN'S CLOTHING</p>
                        <p>WOMEN'S CLOTHING</p>
                    </div>
                    <div className="pt-3">
                        <h5 className="font-semibold mb-1">Rating</h5>
                        <p>5 Star</p>
                        <p>Above 4 Star</p>
                        <p>Above 3 Star</p>
                        <p>Above 2 Star</p>
                        <p>Above 1 Star</p>
                    </div>
                </div>

                <div className="grid col-span-9 gap-6 grid-cols-12">
                    {
                        products && products.map((product) => {
                            return (
                                <div key={product.id} className="col-span-12 md:col-span-6 lg:col-span-3 border p-3 rounded">
                                    <div className="h-[150px] p-3 flex items-center justify-center">
                                        <img src={product.image} alt={product.title} className="max-h-full" />
                                    </div>
                                    <h4 className="font-semibold line-clamp-1"><Link to={`/product/${product.id}`}>{product.title}</Link></h4>
                                    <p className="flex items-center justify-between my-3"><span>$ {product.price}</span> <span className="flex items-center gap-2"><HiOutlineStar /> {product.rating.rate}</span></p>
                                    <button className="flex items-center justify-center gap-2 py-2 px-4 bg-blue-500 text-white w-full rounded"><HiOutlinePlus /> Add to Cart</button>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            :
            <h4 className='text-center text-4xl mb-5 font-semibold mt-5 p-5'>Loading...</h4>
            }

        </>
    )
}

export default Shop;