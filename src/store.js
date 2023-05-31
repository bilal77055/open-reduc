import { createStore } from "redux";
import { reducer } from "./reducer";


const intialstate={
    name:'bilal'
}

export const store=createStore(reducer,intialstate)