import useFetch from '../hooks/useFetch';
import Hero from './Hero';
import { Link } from 'react-router-dom';
import useStrReplace from '../hooks/useStrReplace';

const Home = () => {
    const { data: categories, loading, error } = useFetch('https://fakestoreapi.com/products/categories');

    // console.log(quote, loading, error)
    return (
        <>
            <Hero size="big" text="Welcome to Ecommerce Store" />
            {
                categories ?
                <div className='mt-5 grid grid-cols-12 gap-5 p-5'>
                <h3 className='col-span-12 text-center text-4xl mb-5 font-semibold'>Our Stores</h3>
                {
                    categories && categories.map((cat, i) => {
                        let linkParam = useStrReplace(cat, ' ', '-');
                        return (
                            <Link to={`/shop/category/${linkParam}`} key={i} className='bg-gradient-to-tr from-blue-400 via-teal-400 to-green-400 px-5 py-10 text-black uppercase font-semibold text-2xl col-span-12 md:col-span-6 lg:col-span-3 text-center rounded flex items-center justify-center transition-colors hover:from-green-400 hover:via-teal-400 hover:to-blue-400 hover:text-white shadow-md hover:shadow-lg'>{cat}</Link>
                        )
                    })
                }
            </div>
            :

            <h4 className='text-center text-4xl mb-5 font-semibold mt-5 p-5'>Loading...</h4>
            }
            
        </>
    )
}

export default Home;