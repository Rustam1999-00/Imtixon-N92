import React, { useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import Groupimg from '../../assets/images/Group 2534947 (1).jpg'
import After from '../../assets/images/consultant.jpg'
import Befor from '../../assets/images/xizmatlar.jpg'
import Icon1 from '../../assets/images/Icon.svg'
import Icon2 from '../../assets/images/Icon (1).svg'
import Icon3 from '../../assets/images/Icon (2).svg'
import Icon4 from '../../assets/images/Icon0.svg'
import RohatYogi from "../../assets/images/RohatYog'i.png"
import like from "../../assets/images/like.svg"
import buttonImg from "../../assets/images/buttonImg.svg"
import VectorRight from "../../assets/images/VectorRight.svg"
import VectorRight2 from "../../assets/images/VectorRight2.svg"
import DachaImg from "../../assets/images/DachaImg.png"
import Bubble from "../../assets/images/Bubble 2.png"
import Animations from "../../assets/images/Animations.png"
import Fleg from "../../assets/images/fleg.svg"
import Reqves from "../../assets/images/Recvest.svg"
import GravdFarm from "../../assets/images/GravdFarm.svg"
import ASIKLEPI from "../../assets/images/ASIKLEPI.svg"
import DORI from "../../assets/images/DORI.svg"
import NIKPHARM from "../../assets/images/NIKPHARM.svg"
import Laxisam from "../../assets/images/Laxisam .svg"
import JAYXUN from "../../assets/images/JAYXUN.svg"
import Dsipop2 from "../../assets/images/Dsipop2.png"
import Star from "../../assets/images/Star.svg"
import Phone from "../../assets/images/Phone.svg"
import Message from "../../assets/images/Message.svg"

import "./Home.css"
// =======================

import { useDispatch, useSelector } from 'react-redux';
import { cardAdd, cardDel, shoppingAdd,shoppingAdd2, cardMadal, madalAdd, madalDel } from '../../store/cardSlise/cardSlise'
import { Footer } from '../Footer/Footer'


const Home = () => {

    const navigate = useNavigate()
    const dispetch = useDispatch();
    const { count } = useSelector((state) => state.card);
    const { card } = useSelector((state) => state.card)
    const { madal } = useSelector((state) => state.card)
    console.log(card);
    // =================

    const singleRef = useRef()
    // console.log(singleRef.current.className);
    const hendleNan = () => {


        singleRef.current.className = 'd-none'
        navigate('/')
    }
    const hendleOpen = () => {
        singleRef.current.className = 'mt-5 shadow p-4 rounded-4 single1 d-block'
    }


    return (
        <div className="HomeWrapper">

            <Header />

            <div className="text-center Title_wrapper">
                <h1 className='title'>
                    Bepul shifokor maslahat kerakmi?
                </h1>
                <p className='text'>
                    24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq<br />
                    Faqat<span className='text_span'> mobil ilovada</span>
                </p>
            </div>
            <img className='Groupimg mx-auto' src={Groupimg} width='836' height='500' alt="doktor" />
            <img className='GroupAfter' src={After} width='188' height='118' alt="GroupAfter" />
            <img className='GroupBefor' src={Befor} width='188' height='118' alt="GroupBefor" />


            <hr className='dvider' />

            <div className="xizmatlarWrapper">
                <div className="xizmatlar">
                    <Link to={'/were'}>
                        <img src={Icon1} width='70' height='70' alt="icons" />
                    </Link>
                    <div className="ms-3">
                        <p className='xizmatlarText'>Yetkazib berish bepul</p>
                        <span className='xizmatlarspan' >100 000 so'mdan ortiq<br />
                            buyurtma berganingizda</span>
                    </div>
                </div>
                <div className="xizmatlar">
                    <Link to={'/sf'}>
                        <img src={Icon2} width='70' height='70' alt="icons" />
                    </Link>
                    <div className="ms-3">
                        <p className='xizmatlarText'>Tez to'lov</p>
                        <span className='xizmatlarspan'>100% xavfsiz to'lov</span>
                    </div>
                </div>
                <div className="xizmatlar">
                    <Link to={'/fbd'}>
                        <img src={Icon3} width='70' height='70' alt="icons" />
                    </Link>
                    <div className="ms-3">
                        <p className='xizmatlarText'>Doimiy chegirmalar</p>
                        <span className='xizmatlarspan'>Ular allaqachon ishlamoqda</span>
                    </div>
                </div>
                <div className="xizmatlar">
                    <Link to={'/fbd'}>
                        <img src={Icon4} width='70' height='70' alt="icons" />
                    </Link>
                    <div className="ms-3">
                        <p className='xizmatlarText'>Onlayn yordam</p>
                        <span className='xizmatlarspan'>Ish vaqti: 08:00 - 18:00</span>
                    </div>
                </div>
            </div>
            <hr className='dvider' />
            {/* ======================= */}
            <img className='Phones' src={Phone} width='87' height={'87'} alt="Phone" />
            <img className='Messages' src={Message} width='95' height={'99'} alt="Phone" />
            {/* ======================= */}

            {/* =========================== */}
            <div className="mx-5">
                <h2 className='raspiseni'>Mahsulotlarimiz<br /> ro'yxati</h2>


                {/* ====================================================== */}
                <div className="d-flex gap-3">
                    {
                        card.map((el) =>
                            <div className="card position-relative rounded-4" style={{ width: "240px" }}>
                                <button className='LikeActive position-absolute border-0 bg-transparent' style={{ top: '15px', right: '13px' }}>
                                    <img className='LikeActive' src={like} width={'22'} height={'19'} alt="like" />
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
                                        <button onClick={() => dispetch(shoppingAdd({ id: el.id }))} className='btnse border-0'>
                                            <img className='d-inline' src={buttonImg} width={'45'} height={'45'} alt="buttonImg" />
                                        </button>
                                    </div>
                                    <button onClick={hendleOpen} type='button' className='border-0 bg-transparent' >
                                        <span onClick={() => dispetch(cardMadal(el.id))} className='card_span'>Tafsilotlar <img src={VectorRight} width={'5'} height={'11'} alt="" /></span>
                                    </button>
                                </div>
                            </div>
                        )
                    }
                </div>



                <div ref={singleRef} className="mt-5 shadow p-4 single1 d-none">
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
                                                <button className='border-0 bg-transparent fs-2 me-2 ' onClick={() => dispetch(madalDel(el[0].id))} >-</button>
                                                <h2 className='border p-3 px-4 rounded-4'>{el[0].count}</h2>
                                                <button className='border-0 bg-transparent fs-2 ms-2 ' onClick={() => dispetch(madalAdd(el[0].id))}>+</button>
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
                                    <button onClick={() => dispetch(shoppingAdd2({ id: el[0].id }))}  type='button' className='Login_bottom2'>
                                        Savatga qo'shish
                                    </button>
                                </div>

                            )

                            : ''
                    }


                </div>


                {/* ============== */}
                <div className=" cards_button">
                    <div className="bce">
                        <Link className='Bce_tavar' to={'/Maxsulotlar'}>Barcha mahsulotlarni ko’rish</Link>
                        <img className='ms-3' src={VectorRight2} width={'16'} height='11' alt="vector" />
                    </div>
                    <div className="d-flex gap-2">
                        <span className='span_aktive'></span>
                        <span className='span_Noaktive'></span>
                        <span className='span_Noaktive'></span>
                        <span className='span_Noaktive'></span>
                    </div>
                </div>
            </div>
            <div className="Dom mx-auto shadow ms-5 mb-5">
                <h1 className='Dom_title'>Biz shifobaxsh o‘tlarimiz o‘sishiga g‘amxo‘rlik qilamiz</h1>
                <img className='DachaImg' src={DachaImg} width='263' height='163' alt="dom" />
            </div>
            {/* ============ */}

            <div className=" acardion ms-5 pt-5">
                <div className="wrap  mt-5">
                    <h2 className='wrap_title'>Ko’p so'raladigan savollar</h2>
                    <p className='wrap_text'>Qo'shimcha ma'lumot uchun<br />
                        biz bilan bog'laning</p>
                    <Link className='wrap_link' to={'/'}>
                        <p className='link_text'>Batafsil</p>
                        <img src={VectorRight2} width='15' height={'11'} alt="vector" />
                    </Link>
                </div>
                {/* ========== */}
                <div className="acardions">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <span className='acardion_span'>01</span> Какой состав сока Alatoo?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <span className='acardion_span'>02</span> Сколько стоит Алатоо и сколько стоит доставка?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    <span className='acardion_span'>03</span>Здравствуйте, аллергия часто на этот сок?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span className='acardion_span'>04</span>Эффективен ли сок Алатоо при часто рецидивирующем герпесе?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ======================================================== */}



            <div className="reqvest">
                <div className="reqvest_img ms-5">
                    <img src={Animations} width={'519'} height='402' alt="Aperater" />
                </div>
                <div className="forms">
                    <p>Biz bilan bog'lanish</p>
                    <h2>So'rovingizni yuboring</h2>
                    <form className='form mx-auto'>
                        <label htmlFor="id">
                            <input className='form_input' type='text' id='id' placeholder='Foydalanuvchi nomi' />
                        </label>
                        <hr />
                        <label htmlFor="id">
                            <input className='form_input' type='email' id='id' placeholder='Elektron pochta' />
                        </label>
                        <hr />
                        <label htmlFor="id">
                            <p className='form_text'>Telefon raqam</p>
                            <img src={Fleg} alt="tel" width='33' height='23' />
                            <input className='form_input' type='number' id='id' placeholder='+998' />
                        </label>
                        <hr />
                        <label htmlFor="id">
                            <input className='form_input ' type='password' id='id' />
                            <button type='button' className='password_button rounded-pill border-0 bg-none'>
                            </button>
                        </label>
                        <hr />

                        <button type='submit' className='Reqvest_bottom'>
                            Xabar yuborish
                            <img className='ms-3' src={Reqves} width='20' height='20' alt="Xabar" />
                        </button>

                    </form>

                </div>
            </div>

            <ul className='List'>
                <li className='Item'>
                  
                    <a href="https://grandpharm.uz/">

                    <img src={GravdFarm} width='218' height={'50'} alt="Logos" />
                    </a>
                </li>
                <li className='Item'>
                    <a href="https://asklepiy.uz/">

                    <img src={ASIKLEPI} width='163' height={'40'} alt="Logos" />
                    </a>
                </li>
                <li className='Item'>
                    <a href="https://doridarmon.uz/">

                    <img src={DORI} width='105' height={'73'} alt="Logos" />
                    </a>
                </li>
                <li className='Item'>
                    <a href="https://nikapharm.uz/">

                    <img src={NIKPHARM} width='163' height={'40'} alt="Logos" />
                    </a>
                </li>
                <li className='Item'>
                    <a href="https://lahisam.uz/">

                    <img src={Laxisam} width='149' height={'50'} alt="Logos" />
                    </a>
                </li>
                <li className='Item'>
                    <a href="https://arzonapteka.uz/ru/org/4723">

                    <img src={JAYXUN} width='124' height={'54'} alt="Logos" />
                    </a>
                </li>
            </ul>

            <Footer />
        </div >
    )
}

export default Home
