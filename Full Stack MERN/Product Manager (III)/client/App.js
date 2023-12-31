import "./App.css";
import React, { useState } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import Update from './components/Update';
// import ProductForm from '../components/ProductForm';
// import ProductList from '../components/ProductList';
const App = () => {
    
    return(
	<div>
    	<BrowserRouter>
            <div className="App">
                <Routes>
                    <Route element={<Main/>} path="/home" default /> 
                    <Route element={<Detail/>} path="/product/:id" />
                    <Route element={<Update/>} path="/product/edit/:id"/>
                </Routes>
            </div>
    	</BrowserRouter>
    </div>
    ) 
}
export default App;
