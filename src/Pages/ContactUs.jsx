import React from 'react'
import ContactForm from '../Components/ContactForm'

const ContactUs = () => {
  return (
    <div>
      <div className='Conatct-us-top flex flex-row justify-between lg:h-[30%] overflow-clip' style={{ width: '100%',background: 'linear-gradient(to bottom, #1E3822, #498052)'}}>
        <div className='flex w-1/2 justify-start items-center'>
            <h2 className='Text text-center pb-10 pl-20  ' id='subHeadingMember' style={{ color: 'white' }}>Contact US</h2>
        </div>
        <div className='flex w-1/2 justify-end items-end'>
            <img className='lg:w-[30%] md:w-[40%] sm:w-[30%]' src="/assets/AboutPlant.svg" alt=""plant in pot />
        </div>
      </div>

      <div className='flex justify-center my-20'>
        <div className='w-3/4 flex lg:flex-row md:flex-row sm:flex-col'>
            <div className='flex flex-col w-1/2'>
               <h4 className='Text pb-4' id='sideHeading' style={{fontSize:'0.7rem'}}>Contact Us</h4>
               <h2 className='Text pb-7'id='subHeading'>Get In Touch</h2>
               <p className='Text pb-8' id='BodyText' style={{paddingRight:'200px'}}> Thank you for your interest in PetalNest. We’re excited to hear from you</p>
                <div className='flex flex-row my-3'>
                  <img className='pr-3' src="assets/Contact/location.svg" alt="loc" />
                  <div className='flex flex-col'>
                  <p className='Text pb-1' id='BodyText' >Call Us for inquery </p>
                  <p className='Text '  style={{fontSize: '0.8rem',color:'#151515'}}>+5678765456</p>
                  </div>
                </div>

                <div className='flex flex-row my-3'>
                  <img className='pr-3' src="assets/Contact/email.svg" alt="email" />
                  <div className='flex flex-col'>
                  <p className='Text pb-1' id='BodyText' > Email anytime</p>
                  <p className='Text '  style={{fontSize: '0.8rem',color:'#151515'}}>petalnest@gmail.com</p>
                  </div>
                </div>

                <div className='flex flex-row my-3'>
                  <img className='pr-3' src="assets/Contact/telephone.svg" alt="telephone" />
                  <div className='flex flex-col'>
                  <p className='Text pb-1' id='BodyText' >Visit Our Store </p>
                  <p className='Text '  style={{fontSize: '0.8rem',color:'#151515'}}>15 maniel Lane, 560023</p>
                  </div>
                </div>
               
                
            </div>
            <div className='w-1/2'>
              <ContactForm />
            </div>
        </div>
      </div>


      
      
    </div>
  )
}

export default ContactUs
