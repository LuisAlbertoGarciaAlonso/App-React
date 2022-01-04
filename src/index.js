import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
// import {collection, addDoc, getFirestore} from "firebase/firestore"  //lo comentamos ya subieron los productos

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUwz1u8WWE-B8YpysAQHhb1Wgm--AssvE",
  authDomain: "luisgarciaappcoder.firebaseapp.com",
  projectId: "luisgarciaappcoder",
  storageBucket: "luisgarciaappcoder.appspot.com",
  messagingSenderId: "12969025099",
  appId: "1:12969025099:web:8e40c112ab059eea3bf7ce",
};

// Initialize Firebase
initializeApp(firebaseConfig);

//subiendo al firebase los productos hardCodear asi no subimos items por items
//el json o los datos de nuestros productos un array
// const dataProducts = [
//   {
    
//     name: "JUEGO DE HERRAMIENTAS ELECTRICISTA",
//     category: "herramientas de mano",
//     image: "/img/oferta1.jpg",
//     price: 900,
//     stock: 5,
//     count: 0,
//   },
//   {
  
//     name: "JUEGO DE DESTORNILLADORES",
//     category: "herramientas de mano",
//     price: 1200,
//     stock: 5,
//     image: "/img/oferta2.jpg",
//     count: 0,
//   },
//   {
    
//     name: "GRIMPADORA CORTA CABLE N° 8",
//     category: "herramientas de mano",
//     price: 2500,
//     stock: 5,
//     image: "/img/oferta3.jpg",
//     count: 0,
//   },
//   {
    
//     name: "MULTIMETRO",
//     category: "medicion",
//     price: 3000,
//     stock: 5,
//     image: "/img/oferta4.jpg",
//     count: 0,
//   },
//   {
    
//     name: "CAJA PLASTICA PARA HERRAMIENTAS",
//     category: "porta herramientas",
//     price: 1500,
//     stock: 5,
//     image: "/img/oferta5.jpg",
//     count: 0,
//   },
//   {
    
//     name: "CANANA PORTA HERRAMIENTAS",
//     category: "porta herramientas",
//     price: 1000,
//     stock: 5,
//     image: "/img/oferta6.jpg",
//     count: 0,
//   },
// ];
// const dataBaseProducts = getFirestore();
// const ref = collection(dataBaseProducts, "products"); //si no esta la collection fire la crea

//mapear los productos de data
// dataProducts.map((product) => addDoc(ref, product))  //una ves subidos los productos sacamos el map para que no suba de nuevo, para no escribirlos a mano en firestore

//initializeApp(process.env.firebaseConfig); modo seguro

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
