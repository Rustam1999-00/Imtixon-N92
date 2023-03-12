import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import fleg from '../../assets/images/fleg.svg'
import locations from '../../assets/images/location.svg'
import people from '../../assets/images/people.svg'
import Like from '../../assets/images/like.svg'
import Korzinka from '../../assets/images/shopping-cart (1) 1.svg'
import "./Header.css"
import { useSelector } from 'react-redux'

const Header = () => {
    const { shopping } = useSelector((state) => state.card)
    const { cardAd } = useSelector((state) => state.card)
    const navigaert = useNavigate()
    const logout=()=>{
        localStorage.removeItem('token')
        navigaert('/')
        console.log('klj');
        location.reload()

    }
    return (
       <div className="">

<div className='Wrapper'>

<div className="containerWrapper mx-auto">
    <div className="  d-flex gap-3">
        <NavLink className='header_nav' to={'/'}>
            Mahsulotlar katalogi
        </NavLink>
        <NavLink className='header_nav' to={'/'}>
            Foto-lavhalar
        </NavLink>
        <NavLink className='header_nav' to={'/'}>
            Yetkazib berish va to'lash
        </NavLink>
        <NavLink className='header_axsia' to={'/'}>
            Aksiya
        </NavLink>
        <NavLink className='header_yang' to={'/'}>
            Yangi
        </NavLink>
    </div>
    <div className="d-flex gap-3 align-items-center">
        <div className="">
            <img src={fleg} width='22' height='16' alt='fleg' />
            <select className='select'>
                <option hidden></option>
                <option>UZB</option>
                <option>RUS</option>
                <option>ENG</option>
            </select>
        </div>
        <div className="">
            <p className='d-inline header_text'>Toshkent shahar</p>
            <img src={people} width='11' height='14' alt='logo' />
        </div>
        <div className="">
            <button onClick={logout} className='bg-transparent border-0' >
            <p className='d-inline header_text'>Kirish</p>
            </button>
            <img src={locations} width='10' height='14' alt='location' />
        </div>
    </div>
</div>
</div>
{/* ========== */}
<div className='Home mx-auto'>
    <div className=" d-flex align-items-center">

        <h1>LOGO</h1>
        <div className="nav_page">
            <NavLink className={({ isActive }) => isActive ? 'Active' : 'NoActive'} to={'/'}>Bosh sahifa</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'Active' : 'NoActive'} to={'/Maxsulotlar'}>Mahsulotlar</NavLink>
        </div>
        <div className=" ms-auto like_goup">
            <NavLink className={({ isActive }) => isActive ? 'shopping_Activ' : 'shopping'} to={'/Loves'}>
                <img src={Like} width='16' height='14' alt='like' />
                <sup className='supIndex'>{cardAd.length}</sup>
            </NavLink>
            <NavLink className={({ isActive }) => isActive ? 'shopping_Activ' : 'shopping'} to={'/Shopping'}>
                <img src={Korzinka} width='18' height='18' alt='like' />
                <sup className='supIndex'>{shopping.length}</sup>
            </NavLink>
        </div>
    </div>
</div>
       </div>

    )
}

export default Header
