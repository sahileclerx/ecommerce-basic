import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { HiOutlineStar, HiOutlinePlus } from "react-icons/hi2";

const Product = () => {
    const { id } = useParams();
    const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
    // console.log(title, description, price, image);
    return (
        <>
            {
                product ?

                <div className="pt-8">
                    <div className="grid grid-cols-12 mt-10 p-5 gap-5 max-w-[800px] mx-auto border">
                        <div className="col-span-4 p-3"><img src={product && product.image} alt={product && product.title} /></div>
                        <div className="col-span-8">
                            <h1 className="text-3xl">{product && product.title}</h1>
                            <p className="my-3">{product && product.description}</p>
                            <div className="flex items-center justify-between">
                                <p className="font-bold">$ {product && product.price}</p>
                                <p className="flex items-center justify-center"><HiOutlineStar className="mr-1" /> {product && product.rating.rate} ({product && product.rating.count})</p>
                            </div>
                            <button className="flex items-center justify-center gap-2 py-2 px-4 bg-blue-500 text-white rounded mt-5"><HiOutlinePlus /> Add to Cart</button>
                        </div>
                    </div>
                </div>
                :
                <h4 className='text-center text-4xl mb-5 font-semibold mt-5 p-5'>Loading...</h4>
            }
        </>
    )
}

export default Product;