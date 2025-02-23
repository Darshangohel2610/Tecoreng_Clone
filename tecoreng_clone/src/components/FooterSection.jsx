import React from 'react'

function FooterSection() {
  return (
    <section className='bg-[#112542] mt-8'>
        <footer className="py-8">
            <div className='container footerMenu'>
                <div className="flex flex-wrap justify-center ">

                    <div className='block w-full md:w-1/4'>
                        <span className='text-2xl border-b border-dashed'>Features menu</span>
                        <ol className='p-0 list-none mt-0 mb-4'>
                            <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">blog</a></li>
                            <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Services</a></li>
                            <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Hire Developer</a></li>
                            <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Career</a></li>
                            <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Who We Are</a></li>
                        </ol>
                    </div>
                    <div className='hidden w-2/4 md:block'>
                        <span className='text-2xl border-b border-dashed'>Service menu</span>
                        <div className="flex ">
                            <ol className='p-0 list-none mt-0 mb-4  text-[1rem]'>
                                <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Web Development</a></li>
                                <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Mobile App Development</a></li>
                                <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Game Development</a></li>
                                <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">UI/UX Design</a></li>
                                <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Graphics Design</a></li>
                            </ol>   
                            <ol className="p-0 list-none mt-0 mb-4 text-[1rem]" style={{margin:"0 auto"}}>
                            <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">DevOps</a></li>
                            <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">E-Commerce</a></li>
                            <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Digital Marketing</a></li>
                            <li className='no-underline text-inherit list-[unset]' style={{margin:"1rem 0"}}><a href="#">Cloud Computing</a></li>

                            </ol>
                        </div>
                    </div>
                    <div className='block w-full md:w-1/4'>
                        <span className='text-2xl border-b border-dashed'>Contact Information</span>
                        <ol className='p-0 list-none mt-0 mb-4  text-[1rem]'>
                            <li className='no-underline text-inherit list-[unset] flex' style={{margin:"0.5rem 0"}}>
                                <img alt="location" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/f1.svg" style={{color: "transparent", margin: "5px 10px",    height: "-webkit-fit-content"}}/>
                                <p className='m-0 text-[12px] md:text-[16px]'>904, Skywalk The Elements, Jagatpur Rd, near BSNL Office, off Sarkhej - Gandhinagar Highway, Jagatpur, Ahmedabad, Gujarat 382470</p>
                            </li>
                            <li className='no-underline text-inherit list-[unset] flex' style={{margin:"0.5rem 0"}}>
                                <img alt="location" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/f1.svg" style={{color: "transparent", margin: "5px 10px",    height: "-webkit-fit-content"}}/>
                                <p className='m-0 text-[12px] md:text-[16px]'>1148 S Railroad Ave, Bronxville, New York 10708, USA.</p>
                            </li>
                            <li className='no-underline text-inherit list-[unset] flex items-center' >
                                <div style={{margin: "5px 10px"}}>
                                    <img alt="location" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/f2.svg" style={{color: "transparent"}}/>
                                </div>
                                
                                <p className="m-0" style={{marginBottom:"0"}}><a href="mailto:sales@tecoreng.com">sales@tecoreng.com</a></p>
                            </li>
                            <li className='no-underline text-inherit list-[unset] flex' style={{margin:"0.5rem 0"}}>
                                <img alt="location" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" src="/f3.webp" style={{color: "transparent", margin: "5px 10px",    height: "-webkit-fit-content"}}/>
                                    
                                    <div className='mt-[5px] py-0 px-2.5 text-[12px] md:text-[16px]'>
                                            <div>Call Us: </div>
                                            <div style={{marginBottom:"10px"}}><a href="tel:+916352725452">HR - +91 63527 25452</a></div>
                                            <div ><a href="tel:+918511746476">Sales - +91 85117 46476</a></div>

                                        </div>
                            </li>

                            
                        </ol>

                    </div>

                </div>
                <section className='border-t border-solid pt-[28px]'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        <div className='hidden sm:hidden md:hidden lg:block h-[88px]'>
                            <a href="/" className='block'>
                            <img alt="Tecoreng" loading="lazy" width="102" height="46" decoding="async" data-nimg="1" style={{color:"transparent",width:"47%",height:"50%",}} src="/tecoreng_logo_2.svg"/>
                            </a>
                        </div>


                        <div className='order-2 sm:order-2 md:order-1'>
                            <div style={{marginTop:"20px",textAlign:"center"}}>
                            Copyright © 2025 by Tecoreng
                            </div>
                        </div>
                        <div className='order-1 sm:order-1 md:order-2'>
                            <div className="flex justify-around" style={{marginTop:"20px"}}>
                                <a href="#"><img src="/x.svg" alt="fb" width={21} height={20}/></a>
                                <a href="#"><img src="/fb.svg" alt="fb" width={11} height={20}/></a>
                                <a href="#"><img src="/ln.svg" alt="fb" width={21} height={20}/></a>
                                <a href="#"><img src="/pin.svg" alt="fb" width={21} height={20}/></a>
                                <a href="#"><img src="/Be.svg" alt="fb" width={21} height={20}/></a>
                                <a href="#"><img src="/Dri.svg" alt="fb" width={21} height={20}/></a>
                                <a href="#"><img src="/Me.svg" alt="fb" width={36} height={20}/></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </footer>
    </section>
  )
}

export default FooterSection