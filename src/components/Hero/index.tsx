import PaymentFormGIF from 'assets/img/payment-form.gif'

const Hero = () => {
    return (
        <div className="lg:h-screen bg-gray-100 flex flex-row pt-16">
            <div className="flex flex-col lg:justify-center w-full sm:w-6/12">
                <div className="p-4 sm:p-6 lg:ml-14 lg:p-0">
                    <p className="text-7xl 2xl:text-8xl text-green-500">
                        Ekata
                    </p>
                    <p className="text-7xl 2xl:text-8xl text-green-500">
                        Gateway
                    </p>
                    <p className="text-7xl 2xl:text-8xl text-green-500">
                        Processor
                    </p>
                    <p className="text-xl 2xl:text-2xl text-gray-600 mt-2 ml-1">
                        Fast, Secure, Easy Integrable{' '}
                        <br className="hidden sm:inline" /> Cryptocurrency
                        payment processor for web2 and mobile applications.
                    </p>
                    <p className="text-sm 2xl:text-md mt-2 ml-1 text-gray-600">
                        Accept crypto in your shop without the worry of
                        maintaining large backend
                        <br className="hidden lg:inline" /> code or servers!!
                        Leave that heavy lifting for us.
                    </p>
                    <button className="bg-green-500 px-6 h-12 w-40 rounded text-white mt-2 ml-1">
                        DEMO
                    </button>
                </div>
            </div>
            <div className="hidden sm:flex items-center justify-center w-6/12">
                <img
                    src={PaymentFormGIF}
                    alt="payment form"
                    className="w-[400px] xl:w-[550px] 2xl:w-[700px] h-[400px] xl:h-[550px] 2xl:h-[700px] object-contain"
                />
            </div>
        </div>
    )
}

export default Hero
