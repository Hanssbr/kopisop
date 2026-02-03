export const Navbar = () => {
  return (
    <>
    <div id='container' className='bg-transparent w-[60%] flex justify-between items-center fixed pt-8'>
        <div className='logo font-montserrat font-extrabold text-white text-2xl pl-20'>
            COFFEEMU
        </div>
                <div className='menu text-white font-montserrat font-medium text-xl flex justify-between gap-10'>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Features</a>
                    <a href="#">Services</a>
                </div>
    </div>
        
    </>
  )
}
