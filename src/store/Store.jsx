 import { configureStore } from "@reduxjs/toolkit";
 import cardSlise from './cardSlise/cardSlise';



 export const store =configureStore({
    reducer:{card:cardSlise}
 })