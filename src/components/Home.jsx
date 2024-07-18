import useFetch from '../hooks/useFetch';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import useStrReplace from '../hooks/useStrReplace';

const Home = () => {
    const { data: quote, loading, error } = useFetch('https://fakestoreapi.com/products/categories');

    // console.log(quote, loading, error)
    return (
        <>
            <Hero size={80} text="Welcome to Ecommerce Store" />
            <div className='mt-5 grid grid-cols-12 gap-5 p-5'>
                <h3 className='col-span-12 text-center text-4xl mb-5 font-semibold'>Our Stores</h3>
                {
                    quote && quote.map((q, i) => {
                        // let noSpaces = q.split(' ').join('-');
                        let noSpaces = useStrReplace(q, ' ', '-');
                        return (
                            <Link to={`/shop/category/${noSpaces}`} key={i} className='bg-gradient-to-tr from-blue-400 via-teal-400 to-green-400 px-5 py-10 text-black uppercase font-semibold text-2xl col-span-3 text-center rounded flex items-center justify-center transition-colors hover:from-green-400 hover:via-teal-400 hover:to-blue-400 hover:text-white shadow-md hover:shadow-lg'>{q}</Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;