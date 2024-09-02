import React,{useState} from 'react'

const SignUpForm = () => {

    

    const [signUpData, setSignUpData] = useState(
        {
            name: '',
            email: '',
            password:''
          }
    );

    const handleChange = (e)=>{
        const {name, value}=e.target;
        setSignUpData({
            ...setSignUpData,
            [name]:value
        })
    }

  return (
    <div>
      <form className='login-form flex flex-col gap-2' >
                <div>
                <label className='BodyText'>Name</label>
                <input
                 type="text"
                    name="name"
                    value={signUpData.name}
                    onChange={handleChange}
                    required
                    autoComplete='off'
                />
                </div>
                
                <div>
                <label className='BodyText'>Email Address</label>
                <input
                 type="text"
                    name="email"
                    value={signUpData.email}
                    onChange={handleChange}
                    required
                    autoComplete='off'
                />
                </div>
                
                <div>
                <label className='BodyText'>Password</label>
                <input
                 type="text"
                    name="password"
                    value={signUpData.password}
                    onChange={handleChange}
                    required
                    autoComplete='off'
                />
                </div>

                
                <div className='flex justify-center mt-10'>
                <button type="submit" className="submit-button" style={{width:'160px', padding: '10px 20px' }}>
                Get Started
                </button>
                </div>

             

            </form>

                
            
    </div>
  )
}

export default SignUpForm