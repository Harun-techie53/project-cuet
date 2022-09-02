import React from 'react'
import { Box, FormControlLabel, Checkbox, Alert, Collapse } from '@mui/material';
import './LoginRegistration.css';

const style = {
    position: 'absolute',
    left: '25%',
    top:'5%'
  };

const LoginRegistrationView = ({
    signUpFields,
    signInFields,
    addClass,
    setAddClass,
    handleChange,
    handleSignInFieldsChange,
    handleSignInSubmit,
    handleSignUpSubmit,
    setSignUpFields,    
    signInErrorAlert,
    signUpErrorAlert,
    openAlert,
    setOpenAlert
}) => {
  const {email: loginEmail, password: loginPassword} = signInFields;

  const {name, email, password, password2, isTeacher} = signUpFields;
  return (
    <div className='animate__animated animate__bounceInDown'>
      <Box sx={style} className='animate__animated animate__bounceInDown  '>
      <div className=' flex justify-center my-10 '>
            <div className={`container_loginreg ${addClass}`} id="container">
                <div className="form-container  sign-up-container">
                    <form 
                        className='form'
                        onSubmit={handleSignUpSubmit}
                    >
                        <h1 className=' text-xl font-bold mb-2 '>
                            Create Account
                        </h1>
                        <FormControlLabel 
                            control={<Checkbox defaultChecked />} 
                            label="I am a faculty member"
                            checked={isTeacher}
                            onChange={() => setSignUpFields({
                                ...signUpFields,
                                isTeacher: !isTeacher
                            })}
                        />
                        <input 
                            name="name"
                            className='input_tag' 
                            type="text" 
                            placeholder="Full Name Here"
                            value={name}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            name="email"
                            className='input_tag' 
                            type="email" 
                            placeholder="Email Here"
                            value={email}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            name="password"
                            className='input_tag' 
                            type="password" 
                            placeholder="Password Here"
                            value={password}
                            onChange={handleChange}
                            minLength="8"
                        />
                        <input 
                            name="password2"
                            className='input_tag' 
                            type="password" 
                            placeholder="Confirm Password Here"
                            value={password2}
                            onChange={handleChange}
                            minLength="8"
                        />

                        <div className='w-full py-3'>
                            <Collapse in={openAlert}>
                                <Alert 
                                    severity='error'
                                    onClose={() => setOpenAlert(false)}
                                >
                                    {signUpErrorAlert ?? '' }
                                </Alert>
                            </Collapse>
                        </div>

                        <button className='button' type="submit">
                            REGISTER
                        </button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form 
                        className='form'
                        onSubmit={handleSignInSubmit}
                    >
                        <h1 className=' text-xl font-bold mb-2'>Sign in</h1>
                        <span className='heading_two'>or use your account</span>
                        <input 
                            name="email"
                            className='input_tag' 
                            type="text" 
                            placeholder="Email Here"
                            value={loginEmail}
                            onChange={handleSignInFieldsChange}
                        />
                        <input 
                            name="password"
                            className='input_tag' 
                            type="password" 
                            placeholder="Password Here"
                            value={loginPassword}
                            onChange={handleSignInFieldsChange}
                        />
                        <a className='social' href="/#">Forgot your password?</a>
                        <div className='w-full py-3'>
                            <Collapse in={openAlert}>
                                <Alert 
                                    severity='error'
                                    onClose={() => setOpenAlert(false)}
                                >
                                    {signInErrorAlert ?? '' }
                                </Alert>
                            </Collapse>
                        </div>

                        <button className='button' type="submit">Sign in</button>
                    </form>
                </div>
                <div className="overlay-container z-10 ">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1 className=' text-2xl font-bold'>Welcome Back!</h1>
                            <p className='heading'>To keep connected with us please login with your personal info.</p>
                            <button
                                className="button ghost"
                                id="signIn"
                                onClick={() => setAddClass("")}
                            >
                                GO TO LOGIN
                            </button>
                        </div>

                        <div className="overlay-panel overlay-right">
                            <h1 className=' text-2xl font-bold'>Hello, Friend!</h1>
                            <p className='heading'>Enter your personal details and start journey with us.</p>

                            <button
                                className="button ghost"
                                id="signUp"
                                onClick={() => setAddClass("right-panel-active")}
                            >
                                GO TO REGISTER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </Box>
    </div>
  )
}

export default LoginRegistrationView;