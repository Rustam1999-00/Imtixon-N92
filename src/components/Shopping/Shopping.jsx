import React from 'react'
import { NavLink } from 'react-router-dom'
import Header from '../Header/Header'
import "./Shopping.css"
import VectorRight2 from "../../assets/images/VectorRight2.svg"
import Phone from "../../assets/images/Phone.svg"
import Message from "../../assets/images/Message.svg"
import Delete from '../../assets/images/Delete.svg'
import Pustoybox from "../../assets/images/Pustoybox.png"
import Artwork from "../../assets/images/Artwork.svg"
import { cardFilter, cardAdd, cardDel, cardChoy, cardYog, cardLike, shoppingAdd, cardDelete } from '../../store/cardSlise/cardSlise'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

const Shopping = () => {

  const navigaet = useNavigate()
  const dispatch = useDispatch()
  const { shopping } = useSelector((state) => state.card)
  const { demo } = useSelector((state) => state.card)





  const { count } = useSelector((state) => state.card)
  const { cardAd } = useSelector((state) => state.card)




  const AddDell = (Id) => {
    const AddCount = shopping.find((el) => el[0].id !== Id)
   
    dispatch(cardDel(AddCount[0].count))
    console.log(AddCount[0].count);
    console.log('salom');
  }
  if (shopping.length) {
    const arrey = shopping.map((el) => el[0].prise * el[0].count)
    var counts = arrey.reduce((acc, cur) => acc + cur)
    const bcecounts = counts + 1500
    // console.log(shopping);

    const hendleDel = (Id) => {
      const topDel = shopping.filter(el => el[0].id !== Id)
      console.log(topDel);
      dispatch(cardDelete(topDel))

    }



    return (
    <>
        <Header />
     <div className="wrappershop">
       <div >
        <div className="ms-5 mt-5">
          <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/'}>Bosh sahifa</NavLink>
          <p className='d-inline p-0 m-0 mx-2'>/</p>
          <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/Shopping'}>Savatcha</NavLink>
        </div>
        <div className="d-flex mx-5 mt-3">
          <h2 className='Addshpping'>Savatchada {shopping.length} ta mahsulot bor</h2>
          <NavLink className="logOutlink" to={'/Maxsulotlar'}>
            Buyurtmalar tarixi
            <img className='ms-3' src={VectorRight2} width='15' height={'11'} alt="vektor" />
          </NavLink>
        </div>
        {/* { demo.map((el)=><p>{el.count}</p>)} */}

        <div className="Shop_content">
          <div className=" d-flex gap-4 mt-5">
            <ul className=' w-75'>
              {
                shopping.map((el) =>
                  <li className=' addCard d-flex align-items-center justify-content-between p-4'>
                    <img src={el[0].img} width='97' height={'97'} alt="dorilar" />
                    <div className="">
                      <h3 className='Eltitle'>{el[0].title}</h3>
                      <p className='eltext'>{el[0].trues}</p>
                    </div>
                    <div className="d-flex">
                      <button onClick={() => dispatch(cardDel(el[0].id))} className='count_btnDel'>-</button>
                      <h3 className='counst'>{el[0].count}</h3>
                      <button onClick={() => dispatch(cardAdd(el[0].id))} className='count_btnAdd'>+</button>

                    </div>
                    <div className="">
                      <s className='elskitka'>{el[0].skitka}</s>
                      <h2 className='elprise'>{el[0].prise} uzs</h2>
                    </div>
                    {/* () => dispatch(cardDelete({id:el[0].id})) */}
                    <button onClick={() => hendleDel(el[0].id)} type='button' className='border-0 bg-transparent'>
                      <img src={Delete} width='16' height={'18'} alt="AddDorilar" />

                    </button>
                  </li>
                )
              }
            </ul>


            {/* ================== */}



            <div className="w-25 counds contents shadow me-3">
              <div className="  d-flex align-items-center justify-content-between">
                <h3 className='cards_text'>Mahsulotlar ({shopping.length})</h3>
                <p className='cards_text'>
                  {counts} uzs</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3 className='cards_text'>Chegirma</h3>
                <p className='cards_text'>0</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3 className='cards_text'>Yetkazib berish</h3>
                <p className='cards_text'>1500</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <h3 className='cards_title'>Umumiy</h3>
                <p className='cards_title'>{bcecounts} uzs</p>
              </div>

              <button onClick={() => navigaet('/log')} className='cards_btn'>To’lovga o’tish</button>
              <button onClick={() => navigaet('/')} className='cards_btn2'>Menyuga qaytish</button>
            </div>

          </div>
          {/* ====================== */}
          <div className="ms-auto d-block w-25 mt-4 mb-5 ">
            <img className='d-block ms-auto me-4' src={Phone} width='87' height={'87'} alt="Phone" />
            <img className='d-block ms-auto me-4' src={Message} width='95' height={'99'} alt="Phone" />
          </div>
          {/* ================ */}
        </div>

      </div>
     </div>
     <Footer />
    </>
    )
  }
  else {
    return (
    <>
        <Header />
      <div className="wrappershop">
        <div className="Box">
          <div className="ms-5 mt-5 ">
            <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/'}>Bosh sahifa</NavLink>
            <p className='d-inline p-0 m-0 mx-2'>/</p>
            <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/Shopping'}>Savatcha</NavLink>
          </div>
          <div className="d-flex mx-5 mt-3 ">
            <h2 className='Addshpping'>Savatchada {shopping.length} ta mahsulot bor</h2>
            <NavLink className="logOutlink" to={'/Maxsulotlar'}>
              Buyurtmalar tarixi
              <img className='ms-3' src={VectorRight2} width='15' height={'11'} alt="vektor" />
            </NavLink>
          </div>


          <div className="w-25 mx-auto mt-5 position-relative">
            <img className='ms-5' src={Pustoybox} width='150' height={'150'} alt="Pustoybox" />
            <img className='position-absolute end-50 top-50' src={Artwork} width='35' height={'35'} alt="Artwork" />
          </div>
        </div>
        <div className="ms-auto d-block w-25 mt-4 mb-5 ">
          <img className='d-block ms-auto me-4' src={Phone} width='87' height={'87'} alt="Phone" />
          <img className='d-block ms-auto me-4' src={Message} width='95' height={'99'} alt="Phone" />
        </div>


        {/* ================ */}
      </div>
        <Footer />
    </>
    )
  }
}

export default Shopping
