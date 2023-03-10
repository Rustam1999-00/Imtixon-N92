import { createSlice } from "@reduxjs/toolkit";
import like from '../../assets/images/like.svg'
import RohatYog from "../../assets/images/RohatYog'i.png"
import Dsirop from "../../assets/images/Dsirop.png"
import Dtabletka from "../../assets/images/Dtabletka.png"
import Dyog from "../../assets/images/Dyog.png"
import Dsipop2 from "../../assets/images/Dsipop2.png"



const cardSlise = createSlice({
    name: 'card',
    initialState:
    {
        count: 2,
        tavars: [],
        cardAd: [],
        shopping: [],
        card: [
            {
                id: 1,
                like: like,
                img: RohatYog,
                title: 'ROHAT Yog`i №2',
                trues: 'Mavjud',
                skitka: '17,190, uzs',
                prise: 16000,
                count: 1

            },
            {
                id: 2,
                like: like,
                img: Dsirop,
                title: 'Rohat Sirop',
                trues: 'Erkaklar kuchi',
                skitka: '200,190, uzs',
                prise: 150000,
                count: 1

            },
            {
                id: 3,
                like: like,
                img: Dtabletka,
                title: 'Organic Bananas',
                trues: '7pcs, Price',
                skitka: '17,190, uzs',
                prise: 16000,
                count: 1

            },
            {
                id: 4,
                like: like,
                img: Dyog,
                title: 'ROHAT Yog`i №22',
                trues: 'Mavjud',
                skitka: '17,190, uzs',
                prise: 16000,
                count: 1

            },
            {
                id: 5,
                like: like,
                img: Dsipop2,
                title: 'Rohat Sirop',
                trues: 'Rohat Sirop',
                skitka: '200,190, uzs',
                prise: 150000,
                count: 1

            },
        ]
    }
    ,
    reducers: {
        cardAdd(state, action) {
            state.count += 1
        },
        cardDel(state, action) {
            state.count -= 1
            const asd = action.payload.find((el) => +el.count)
            // if(asd){
            //     asd.count += 1
            // }
            // const findedItem = state.shopping.find(item => item.id)
            // findedItem.count += 1

            console.log(asd.count += 2);

            console.log('salom');

            // console.log(AdcardOpen.map((el)=>el.count));
        },
        cardFilter(state, action) {

            const Filterad = state.card.filter((fil) => fil.id !== 3)

            const Bce = Filterad.flat()
            state.tavars.push(Bce)
        },
        cardChoy(state, action) {
            const Filterad = state.card.filter((fil) => fil.title === 'Organic Bananas')
            const Choy = Filterad.flat()
            state.tavars.push(Choy)


        },
        cardAsal(state, action) {
            const FilteradYog = state.card.filter((fil) => fil.title === 'ROHAT Yog`i №22')
            const asal = FilteradYog.flat()
            state.tavars.push(asal)
        },
        cardYog(state, action) {

            const FilteradYog = state.card.filter((fil) => fil.title === 'ROHAT Yog`i №2')
            const Choy = FilteradYog.flat()
            state.tavars.push(Choy)
        },

        // =========================
        cardLike(state, action) {
            const Addcard = state.card.filter((Add) => Add.id === action.payload.id)

            const AdcardOpen = Addcard.flat()
            state.cardAd.push(AdcardOpen)


        },
        shoppingAdd: (state, action) => {
            const Addshopping = state.card.filter((Add) => Add.id === action.payload.id)
            // const ShoppingOpen = state.shopping.findIndex(el => {return el.id === action.payload.id})
            // if(ShoppingOpen == -1){
            //     state.shopping = [...state.shopping,Addshopping]
            // }
            // console.log(ShoppingOpen);
            state.shopping.push(Addshopping)

            // console.log( state.shopping.push(ShoppingOpen));

        },
        cardDelete: (state, action) => {
            // state.shopping = state.shopping.filter((el) => el.id !== action.payload.id)
            state.shopping = action.payload
            console.log(state.shopping)
            console.log(action.payload);
        },

    }
});


export const { cardAdd, cardDel, cardFilter, cardChoy, cardYog, cardLike, cardDelete, shoppingAdd, cardAsal } = cardSlise.actions;
export default cardSlise.reducer; 