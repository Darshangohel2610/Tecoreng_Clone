import React from 'react'
import ContactForm from './ContactForm'

function GetInTouchSection() {
    const socialImages=["/x1.svg","/fb.svg","/ln3.svg","/pin4.svg","/be5.svg","/drib6.svg","/me7.svg"]
  return (
    <section>
        <div className="container">
            <div className='position-relative getInTouch'>
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <div className='hidden md:grid-cols md:flex md:flex-col'>
                        <div className='text-[32px] font-[600]'>We Are Here To Help You</div>
                        <div className='font-[600] mt-8 text-5xl'>Let’s Transform Your Vision Into Value.</div>
                        <div className='font-[600] text-xl mt-[50px] mb-[30px]'>Contact us</div>
                        <div className="flex pt-[5px] mb-6">
                            <div className='my-[5px] mx-2.5'>
                                <img alt="skype" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" style={{color:"transparent"}} src="/skype.svg"/>
                            </div>
                            <p className='m-0 pt-1.5'><a href="#">biz.tecoreng</a></p>
                        </div>
                        <div className="flex pt-[5px] mb-12">
                            <div className='my-[5px] mx-2.5'>
                                <img alt="skype" loading="lazy" width="24" height="24" decoding="async" data-nimg="1" style={{color:"transparent"}} src="/phone.svg"/>
                            </div>
                            <p className='m-0 pt-1.5'><a href="#">+91 85117 46476</a></p>
                        </div>
                        <section className='pt-4'>
                            <div className="container">
                                <div className="flex items-center flex-wrap">
                                    <div>
                                        <h2 className='leading-[54px] text-4xl font-[600]'>Our Socials</h2>
                                        <p className='text-[16px] font-[600] leading-6'>Don’t Miss To Follow Us On Our Social Networks Accounts.</p>
                                    </div>
                                    <div className="flex w-2/3">
                                        <div className='gap-4 flex items-center justify-end'>
                                            {socialImages.map((item,index)=>(
                                                <a href="#" key={index}>
                                                    <img loading="lazy" src={item} alt="twitter" className="w-10 h-10 cursor-pointer"/>
                                                </a>
                                            ))}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div >
                        <ContactForm></ContactForm>
                    </div>
                </div>
            </div>
        </div>
    </section>
)
}

export default GetInTouchSection