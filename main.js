import "./scss/style.scss";
import {getCoins} from "./src/getCoins.js"

const form=document.querySelector('header form');
  
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log("form submit oldu");
    getInputVal();
    // e.target.reset();
    form.reset();
})

const getInputVal=()=>{
    const inputVal=document.querySelector("header form input").value;
    if(!inputVal.trim()){
        alert("input alanı boş bırakılamaz")
    }else{
        console.log("input doldurulmuş");
        getCoins(inputVal);
    }
}