import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {

    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true)

    useEffect(()=> {
        loadCaptchaEnginge(6);
    },[])

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }
    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
        }
   
        else {
            setDisabled(true);
        }
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row gap-12">
    <div className="text-center md:w-1/2 lg:text-left">
     <img src="https://i.postimg.cc/ZRsCRg2c/6300959.jpg" alt="" />
    </div>
    <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin}>
      <div className="card-body">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email</span>
          </label>
          <input type="text" name='email' placeholder="Type Password" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" name='password' placeholder="Type password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover text-yellow-400 font-bold">Forgot password?</a>
          </label>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input ref={captchaRef} type="text" name='captcha' placeholder="type Captcha" className="input input-bordered" />
          <button onClick={handleValidateCaptcha} className="btn btn-xs btn-outline mt-3">Validate</button> 
        </div>
        <div className="form-control mt-6">
          <input disabled={disabled} className="btn bg-yellow-400 border-none"  type="submit" value="Login" />
        </div>
        <p className='text-center font-bold'>New Here?<span className='font-bold text-yellow-400'><Link to='/register'> Please Register</Link></span></p>
      </div>
      </div>
      </form>
    </div>
  </div>
</div>

    );
};

export default Login;