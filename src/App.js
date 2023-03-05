import ItemListContainer from './components/item/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './components/NavNar/NavBar';
import Botones from './components/Botones/Botones';
import React from "react";
//import ItemDetailContainer from './components/item/ItemDetailContainer/ItemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <main className="cuerpo-mid mid">
      <NavBar />
      <Botones />
      
       <Routes>
       <Route path="/" element={ "" }/>
       <Route path="producto/:category" element={ <ItemListContainer greeting={<h1 className='Titulo'> Los mejores productos </h1>} />}/>
       </Routes>

        </main>
      </BrowserRouter>
    </>

  );
}
<route path="zapas" element={ <ItemListContainer greeting={<h1 className='Titulo'> Bienvenidos a mi tienda virtual </h1>} />}/>





  


 


//*  <ItemDetailContainer />

