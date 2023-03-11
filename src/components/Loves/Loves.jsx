import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'
import './Loves.css'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import buttonImg from '../../assets/images/buttonImg.svg'
import Delete from '../../assets/images/Delete.svg'
import Phone from "../../assets/images/Phone.svg"
import Message from "../../assets/images/Message.svg"
import Pustoybox from "../../assets/images/Pustoybox.png"
import Artwork from "../../assets/images/Artwork.svg"
import  { shoppingAdd,cardDelete2}  from '../../store/cardSlise/cardSlise'
import { Footer } from '../Footer/Footer'



const Loves = () => {
  const dispetch = useDispatch()
  const { cardAd } = useSelector((state) => state.card)

  const likeDel =(Id)=>{
    const topDel = cardAd.filter(el => el[0].id !== Id)
    dispetch(cardDelete2(topDel))
  }

  if (cardAd.length) {


    return (
      <>
        <Header />
        <div className='nav_page2 ms-5'>
          <div className=" ">
            <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/'}>Bosh sahifa</NavLink>
            <p className='d-inline p-0 m-0 mx-2'>/</p>
            <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/Loves'}> Saqlangan dorilar</NavLink>
          </div>
          <h2 className='loveDori mt-3'>Sevimli dorilar</h2>





          <ul className='m-0 p-0 me-3'>
            {
              cardAd.map((el) =>
                <li className=' addCard d-flex align-items-center justify-content-between p-4'>
                  <img src={el[0].img} width='97' height={'97'} alt="dorilar" />
                  <div className="">
                    <h3 className='Eltitle'>{el[0].title}</h3>
                    <p className='eltext'>{el[0].trues}</p>
                  </div>
                  <button className='border-0 bg-transparent' onClick={() => dispetch(shoppingAdd({ id: el[0].id }))}>
                  <img className='Add_img' src={buttonImg} width='45' height={'45'} alt="AddDorilar" />
                  </button>
                   
                  
                  <div className="">
                    <s className='elskitka'>{el[0].skitka}</s>
                    <h2 className='elprise'>{el[0].prise} uzs</h2>
                  </div>
                  <button onClick={()=>likeDel(el[0].id)} className='border-0 bg-transparent'>
                    <img src={Delete} width='16' height={'18'} alt="AddDorilar" />

                  </button>
                </li>
                
              )
            }
          </ul>
          <div className="ms-auto d-block w-25">
            <img className='d-block ms-auto me-4' src={Phone} width='87' height={'87'} alt="Phone" />
            <img className='d-block ms-auto me-4' src={Message} width='95' height={'99'} alt="Phone" />
          </div>

<Footer/>
        </div>
      </>
    )
  } else {
    return (
      <>
        <Header />
        <div className='nav_page3 ms-5'>
          <div className=" ">
            <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/'}>Bosh sahifa</NavLink>
            <p className='d-inline p-0 m-0 mx-2'>/</p>
            <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/Loves'}> Saqlangan dorilar</NavLink>
          </div>
          <h2 className='loveDori mt-3'>Sevimli dorilar</h2>



          <div className="w-25 mx-auto mt-5 position-relative">
            <img className='ms-5' src={Pustoybox} width='150' height={'150'} alt="Pustoybox" />
            <img className='position-absolute end-50 top-50' src={Artwork} width='35' height={'35'} alt="Artwork" />
            <h3 className='Artwork'>Saqlangan dorilar bo’sh!</h3>
            <p className='Artwork_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor</p>
          </div>



          <div className="ms-auto d-block w-25">
            <img className='d-block ms-auto me-4' src={Phone} width='87' height={'87'} alt="Phone" />
            <img className='d-block ms-auto me-4' src={Message} width='95' height={'99'} alt="Phone" />
          </div>
        </div>
        <Footer/>
      </>
    )
  }
}

export default Loves
