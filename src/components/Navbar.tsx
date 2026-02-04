export const Navbar = () => {
  return (
    <>
    <div id='container' className='bg-transparent fixed w-screen md:w-[60%] flex justify-between items-center pt-8'>
        <div className='logo font-montserrat font-extrabold text-white text-2xl md:pl-20 pl-5'>
            COFFEMU
        </div>
                <div id="menu" className='hidden md:flex text-white font-montserrat font-medium text-xl justify-between gap-10'>
                    <a href="#">Home</a>
                    <a href="#">Products</a>
                    <a href="#">Features</a>
                    <a href="#">Services</a>
                </div>
    </div>
        
    </>
  )
}
