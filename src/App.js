import ItemListContainer from './components/item/ItemListContainer/ItemListContainer';
import './App.css';
import NavBar from './components/NavNar/NavBar';
import Botones from './components/Botones/Botones';
import React from "react";
import ItemDetailContainer from './components/item/ItemDetailContainer/ItemDitailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main className="cuerpo-mid mid">

          <NavBar />


          <div className='tituloanimado'>
            <p className='an1'>T</p>
            <p className='an2'>i</p>
            <p className='an3'>e</p>
            <p className='an4'>n</p>
            <p className='an5'>d</p>
            <p className='an6'>a</p>
            <p className='anx'></p>
            <p className='an7'>o</p>
            <p className='an8'>n</p>
            <p className='an9'>l</p>
            <p className='an10'>i</p>
            <p className='an11'>n</p>
            <p className='an12'>e</p>
          </div>


          <Routes>

            <Route path="/" element={<Botones />} />
            <Route path="producto/:category" element={<ItemListContainer greeting={<h1 className='Titulo'> Los mejores productos </h1>} />} />
            <Route path="/:idUsers" element={<ItemDetailContainer greeting={""} />} />

          </Routes>

        </main>
      </BrowserRouter>
    </>

  );
}
<route path="zapas" element={<ItemListContainer greeting={<h1 className='Titulo'> Bienvenidos a mi tienda virtual </h1>} />} />











//*  <ItemDetailContainer />

