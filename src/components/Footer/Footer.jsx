import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Facebook from '../../assets/images/fasebook.svg'
import Instagram from '../../assets/images/Inistagram.svg'
import Telegram from '../../assets/images/telegram.svg'
import Youtube from '../../assets/images/youTobe.svg'
import GooglePlay from '../../assets/images/GooglePlay.svg'
import AppStore from '../../assets/images/AppStore.svg'
export const Footer = () => {
  return (
    <footer className='site-footer'>
      <div className="container">
        <div className='d-flex justify-content-between'>
          <div style={{ width: "400px" }}>
            <Link style={{ color: "#FFFFFF",marginBottom:"14px" }} to='/' className='footer-logo d-block'>LOGO</Link>
            <p className='footer-text'>Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar</p>
            <p className='footer-text'>Ish vaqti: Har kuni 8:00 dan 18:00 gacha</p>
            <ul className='d-flex align-items-center list-unstyled' style={{ gap: "24px" }}>
              <li>
                <a href='https://facebook.com/' target="_blank" >
                  <img src={Facebook} />
                </a>
              </li>
              <li>
                <a href='https://instagram.com/' target="_blank" >
                  <img src={Instagram} />
                </a>
              </li>
              <li>
                <a href='https://telegram.com/' target="_blank" >
                  <img src={Telegram} />
                </a>
              </li>
              <li>
                <a href='https://youtube.com/' target="_blank" >
                  <img src={Youtube} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className='footer-textt'>Ilovani yuklab olish</p>
            <a href='https://play.google.com/store/games' target='_blank'>
              <img src={GooglePlay} className='d-block mb-3' />
            </a>
            <a href="https://www.apple.com/app-store/" target='_blank'>
              <img src={AppStore} />
            </a>
          </div>
        </div>
        <div className='footer-box' style={{ width: "553px", background: "#53B175" }}>
          <ul className='footer-info'>
            <li>
              <p className='text-light' style={{ opacity: '0.6', marginBottom: "8px" }}>E-mail</p>
              <a target='_blank' className='text-decoration-none' style={{ color: "#FFF" }} href='mailto:info@mehrigiyo.uz'>info@mehrigiyo.uz</a>
            </li>
            <li>
              <p className='text-light' style={{ opacity: '0.6', marginBottom: "8px" }}>Bizga qo'ng'iroq qiling</p>
              <a target='_blank' className='text-decoration-none' style={{ color: "#FFF" }} href='tel:+998981253103'>+99898 125 31 03</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-light'>
        <div className="container">
          <div className='d-flex align-items-center justify-content-between p-4'>
          <small className='d-block' style={{width:'529px'}}>© 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan.<br/>
            Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy.
          </small>
          <ul className='d-flex list-unstyled gap-4'>
            <li>
              <Link className='footer-link' style={{color:"#282938"}}  to='/'>Bosh sahifa</Link>
            </li>
            <li>
              <Link className='footer-link' style={{color:"#282938"}}  to='/about'>Biz haqimizda</Link>
            </li>
            <li>
              <Link className='footer-link' style={{color:"#282938"}} to='/news'>Yangiliklar</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
