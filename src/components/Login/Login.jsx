import React, { useRef } from 'react'
import "./Login.css"
import Fleg from "../../assets/images/fleg.svg"
import Eye from "../../assets/images/eye.svg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const naviget = useNavigate()

    const inpuRef = useRef()

    const hendleOpen = () => {
        if (inpuRef.current.type === 'password') {
            inpuRef.current.type = 'text'
        } else {
            inpuRef.current.type = 'password'
        }
    }
    const hendlSubmit = (evt) => {
        evt.preventDefault()
        console.log(inpuRef.current.value);

        localStorage.setItem('token',inpuRef.current.value)

        naviget('/')
        inpuRef.current.value=''
        location.reload()
        toast.success("Bajarildi!")
    }
    return (
        <div className='loginWrapper'>
            <div className=" rounded-4 shadow mx-auto login">
                <button className='rounded-pill px-2 d-block ms-auto mt-3 me-3 border-0' >
                    x
                </button>
                <div className="kirish mx-auto">
                    <h4 className='logintitle'>Kirish</h4>
                </div>
                <form onSubmit={hendlSubmit} className='form mx-auto'>
                    <label htmlFor="id">
                        <p className='form_text'>Telefon raqam</p>
                        <img src={Fleg} alt="tel" width='33' height='23' />
                        <input className='form_input' type='number' id='id' placeholder='+998' />
                    </label>
                    <hr />

                    <label htmlFor="id">
                        <p className='form_text'>Parol</p>
                        <input ref={inpuRef} className='form_input ' type='password' id='id' />
                        <button onClick={() => hendleOpen()} type='button' className='password_button rounded-pill border-0 bg-none'>
                            <img src={Eye} width='19' height='18' />
                        </button>
                    </label>
                    <hr />
                    <button type='submit' className='Login_bottom'>
                        Tizimga kirish
                    </button>

                </form>

            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>

    )
}

export default Login
