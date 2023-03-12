import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Header from '../Header/Header'
import "./Maxsulotlar.css"
import Search from "../../assets/images/Search.svg"
import VectorLogout from "../../assets/images/VectorLogout.svg"
import like from "../../assets/images/like.svg"
import buttonImg from "../../assets/images/buttonImg.svg"
import VectorRight from "../../assets/images/VectorRight.svg"
import Dsipop2 from "../../assets/images/Dsipop2.png"
import Star from "../../assets/images/Star.svg"
import Phone from "../../assets/images/Phone.svg"
import Message from "../../assets/images/Message.svg"
import QizilLike from "../../assets/images/QizilLike.svg"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { cardFilter, cardAdd, cardDel, cardChoy, cardYog, cardLike, shoppingAdd, cardAsal, shoppingAdd2,cardMadal,madalAdd,madalDel,cardSearch } from '../../store/cardSlise/cardSlise'
import { Footer } from '../Footer/Footer'

const Maxsulotlar = () => {

  const dispeach = useDispatch()
  const { tavars } = useSelector((state) => state.card)
  const { count } = useSelector((state) => state.card)
  const { cardAd } = useSelector((state) => state.card)
  const { card } = useSelector((state) => state.card)
  const { madal } = useSelector((state) => state.card)
  console.log(cardAd.map((el) => el[0].title));
  const singleRef = useRef()
  const searchRef = useRef()
  const hendleNan = () => {
    singleRef.current.className = 'd-none'
  }
  const hendleOpen = () => {
    singleRef.current.className = 'mt-5 shadow p-4 rounded-4 single1 d-block'
  }
  // =====
  const hendlelogOut = () => {
    location.reload()
  }
  const hendleSubmit=(evt)=>{
    evt.preventDefault();
    dispeach(cardSearch(searchRef.current.value))
    searchRef.current.value = ''
  }


  return (
    <>
      <Header />
      <div className='Maxsulotlarwrap  mb-5 pb-5'>
        <div className="nav_page2">
          <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/'}>Bosh sahifa</NavLink>
          <p className='d-inline p-0 m-0 mx-2'>/</p>
          <NavLink className={({ isActive }) => isActive ? 'Actives' : 'NoActives'} to={'/Maxsulotlar'}>Mahsulotlar</NavLink>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h2>Mahsulotlar</h2>
          <form onSubmit={hendleSubmit} className='search_form'>
            <label htmlFor="ids">
            {/* onChange={()=>dispeach(cardSearch(searchRef.current.value))} */}
              <img src={Search} width={'16'} height='16' alt="search" />
              <input ref={searchRef} className='border-0 bg-transparent ms-2 w-75' type="text" id='ids' placeholder='Qidirish' typeof='text' />
            </label>
          </form>
        </div>

        <div className="WrapperFilterCard">
          <div className="WrapperCategory">
            <div className="WrapperCategorytop">
              <h2 className='kategoryTitle'>Kategoriyalar</h2>
              <button onClick={hendlelogOut} className='kategoryButton'> <img className='me-1' src={VectorLogout} width={'12'} height='12' alt="logout" />tozalash</button>
            </div>
            <form >
              {/* =========== */}
              <ul className='list-unstyled p-0'>
                <li className='mb-2 '>
                  <label htmlFor="id">
                    <input onChange={hendlelogOut} className='chekInput bg-secondary' defaultChecked  type='checkbox' />
                    <p className='Item_Text ms-2 d-inline-block m-0'>Hammasi</p>
                  </label>
                </li>
                <li className='mb-2 '>
                  <label htmlFor="id1">
                    <input onChange={() => dispeach(cardChoy())} className='chekInput ' type='checkbox' id='id1' name='input' />
                    <p className='Item_Text ms-2 d-inline-block m-0 p-0'>Choy</p>
                  </label>
                </li>
                <li className='mb-2 '>
                  <label htmlFor="id">
                    <input onChange={() => dispeach(cardAsal())} className='chekInput' type='checkbox' />
                    <p className='Item_Text ms-2 d-inline-block m-0 p-0'>Asal</p>
                  </label>
                </li>
                <li className='mb-2 '>
                  <label for="id2">
                    <input onChange={() => dispeach(cardYog())} className='chekInput' type='checkbox' id='id2' name='input' />
                    <p className='Item_Text ms-2 d-inline-block m-0 p-0'>Yog’</p>
                  </label>
                </li>
                <li className='mb-2 '>
                  <label htmlFor="id">
                    <input onChange={() => dispeach(cardChoy())} className='chekInput' type='checkbox' />
                    <p className='Item_Text ms-2 d-inline-block m-0 p-0'>Non</p>
                  </label>
                </li>
                <li className='mb-2 '>
                  <label htmlFor="id">
                    <input onChange={() => dispeach(cardChoy())} className='chekInput' type='checkbox' />
                    <p className='Item_Text ms-2 d-inline-block m-0 p-0'>Ziravorlar</p>
                  </label>
                </li>
                <li className='mb-2 '>
                  <label htmlFor="id">
                    <input onChange={() => dispeach(cardChoy())} className='chekInput' type='checkbox' />
                    <p className='Item_Text ms-2 d-inline-block m-0 p-0'>Sharbatlar</p>
                  </label>
                </li>
                <li className='mb-2 '>
                  <label htmlFor="id">
                    <input onChange={() => dispeach(cardChoy())} className='chekInput' type='checkbox' />
                    <p className='Item_Text ms-2 d-inline-block m-0 p-0'>Lolipoplar</p>
                  </label>
                </li>
                <li className='mb-2 '>
                  <label htmlFor="id">
                    <input onChange={() => dispeach(cardChoy())} className='chekInput' type='checkbox' />
                    <p className='Item_Text ms-2 d-inline-block m-0 p-0'>Lolipoplar</p>
                  </label>
                </li>


              </ul>

            </form>
          </div>
          {/* ======================= */}
          {
            tavars.length ?
              <ul className='d-flex gap-2 flex-wrap p-0'>
                {
                  tavars.map((el) =>
                    <div className="card position-relative rounded-4" style={{ width: "240px" }}>
                      <button onClick={() => dispeach(cardLike({id:el[0].id }))} className='position-absolute border-0 bg-transparent' style={{ top: '15px', right: '13px' }}>
                        <img className='Add_like' src={el[0].like ? QizilLike : like} width={'22'} height={'19'} alt="like" />
                      </button>
                      <img src={el[0].img} width='175' height='175' className="" alt="Maxsulotlar" />
                      <div className="card-body">
                        <h5 className="card_title">{el[0].title}</h5>
                        <p className="card_p mb-3">{el[0].trues}</p>
                        <div className="card-content d-flex">
                          <div className="card_texts">
                            <s className='card_p'>{el[0].skitka}</s>
                            <h2 className='card_tite'>{el[0].prise}uzs</h2>
                          </div>
                          <button onClick={() => dispeach(shoppingAdd({ id: el[0].id }))} className='btnse border-0'>
                            <img className='d-inline Add_img' src={buttonImg} width={'45'} height={'45'} alt="buttonImg" />
                          </button>
                        </div>
                        <button onClick={hendleOpen} className='bg-transparent border-0'>
                          <span onClick={()=>dispeach(cardMadal(el[0].id))} className='card_span'>Tafsilotlar <img src={VectorRight} width={'5'} height={'11'} alt="" /></span>
                        </button>
                      </div>
                    </div>

                  )
                }
              </ul>
              :
              // ==============
              <ul className='d-flex gap-2 flex-wrap p-0'>
                {
                  card.map((el) =>
                    <div className="card position-relative rounded-4" style={{ width: "240px" }}>
                      <button onClick={() => dispeach(cardLike({ id: el.id }))} className='position-absolute border-0 bg-transparent' style={{ top: '15px', right: '13px' }}>
                        <img className='Add_like' src={el.like ? like : QizilLike} width={'22'} height={'19'} alt="like" />
                      </button>
                      <img src={el.img} width='175' height='175' className="" alt="Maxsulotlar" />
                      <div className="card-body">
                        <h5 className="card_title">{el.title}</h5>
                        <p className="card_p mb-3">{el.trues}</p>
                        <div className="card-content d-flex">
                          <div className="card_texts">
                            <s className='card_p'>{el.skitka}</s>
                            <h2 className='card_tite'>{el.prise}uzs</h2>
                          </div>
                          <button onClick={() => dispeach(shoppingAdd({ id: el.id }))} className='btnse border-0'>
                            <img className='d-inline Add_img' src={buttonImg} width={'45'} height={'45'} alt="buttonImg" />
                          </button>
                        </div>
                        <button onClick={hendleOpen} className='bg-transparent border-0'>
                          <span onClick={()=>dispeach(cardMadal(el.id))} className='card_span'>Tafsilotlar <img src={VectorRight} width={'5'} height={'11'} alt="" /></span>
                        </button>
                      </div>
                    </div>

                  )
                }
              </ul>




          }
          {/* ========================= */}

        </div>




        <img className='Phone' src={Phone} width='87' height={'87'} alt="Phone" />
        <img className='Message' src={Message} width='95' height={'99'} alt="Phone" />
        {/* ========================================== */}

       <div ref={singleRef} className="mt-5 shadow p-4 single1  d-none">
                    <button onClick={hendleNan} type='button' className='rounded-pill border-0 d-block ms-auto   px-2'> x</button>

                    {
                        madal.length ?

                            madal.map((el) =>
                                <div className="">
                                    <div className="d-flex gap-5">
                                        <div className=" ms-5 ps-5 d-flex">
                                            <div className="">
                                                <img className='d-block' src={el[0].img} width={'82'} height='80' alt="dori" />
                                                <img src={el[0].img} width={'82'} height='80' alt="dori" />

                                            </div>
                                            <img className='mt-4' src={el[0].img} width={'271'} height='270' alt="dori" />

                                        </div>

                                        <div className="sibgle_content w-50 ">
                                            <h2 className='singleTitle'>{el[0].title}</h2>
                                            <span>  <img src={Star} width={'20'} height='20' alt="star" /></span>
                                            <span>  <img src={Star} width={'20'} height='20' alt="star" /></span>
                                            <span>  <img src={Star} width={'20'} height='20' alt="star" /></span>
                                            <span>  <img src={Star} width={'20'} height='20' alt="star" /></span>
                                            <span>  <img src={Star} width={'20'} height='20' alt="star" /></span>
                                            <span> 47</span>
                                            <div className="d-flex mt-4 mb-4">
                                                <button className='border-0 bg-transparent fs-2 me-2 ' onClick={() => dispeach(madalDel(el[0].id))} >-</button>
                                                <h2 className='border p-3 px-4 rounded-4'>{el[0].count}</h2>
                                                <button className='border-0 bg-transparent fs-2 ms-2 ' onClick={() => dispeach(madalAdd(el[0].id))}>+</button>
                                                <h2 className='card_tite ms-auto'>{el[0].prise}uzs</h2>
                                            </div>
                                            <hr />
                                            {/* ============= */}
                                            <div class="accordion accordion-flush" id="accordionFlushExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="flush-headingOne">
                                                        <button class="accordion-button collapsed fs-4" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                            Mahsulot haqida
                                                        </button>
                                                    </h2>
                                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                        <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ================== */}
                                            <hr />
                                            <div className="d-flex align-items-center justify-content-between">
                                                <h3 className='fs-5'>Og’irligi</h3>
                                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOnes" aria-expanded="false" aria-controls="flush-collapseOnes">
                                                        100gr
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <button onClick={() => dispeach(shoppingAdd2({ id: el[0].id }))}  type='button' className='Login_bottom2'>
                                        Savatga qo'shish
                                    </button>
                                </div>

                            )

                            : ''
                    }


                </div>



        {/* ====================== */}
       
        {/* ================================= */}

      </div>
      <Footer />
    </>
  )
}

export default Maxsulotlar
