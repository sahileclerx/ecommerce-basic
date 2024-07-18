const Hero = (props) => {
    const {size, text, extraClasses} = props;
    return(

        <>
            <div className={`bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 text-white text-center flex items-center justify-center py-[${size}px] px-3 ${extraClasses}`}>
                <h1 className='text-5xl'>{text}</h1>
            </div>
        </>
    )
}

export default Hero;