import React, {useRef, useEffect, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

//common components
import Screen_menu_mobile from '../components/screen-menu';
import Header_render from '../components/header';
import Nav_render from '../components/nav';

//pages
const Home = React.lazy(()=> import('./home'));
const Products = React.lazy(()=> import('./products'));
const Services = React.lazy(()=> import('./services'));
const Creditos = React.lazy(()=> import('./credits'));
const Nosotros = React.lazy(()=> import('./about'));


//data ajax - localstorage
import {DataHome} from '../services/store';

//data redux
import {Provider} from 'react-redux';
import {  database_store } from '../database';
import Spinner from '../components/spinner';



// INCORPORAR REACT LAZY DONT FORGET



function App() {

    const screen_mobile = useRef(null);


    useEffect(()=>{

        let minuto = 60000;
        setInterval(()=>{

            DataHome().functions.clear();


        },(minuto*9));

    },[]);

    return (
        <div>
            <BrowserRouter>

                <Provider store={database_store}>

                    <Screen_menu_mobile  ref={screen_mobile} ></Screen_menu_mobile>
                    <Header_render></Header_render>
                    <Nav_render screen_nav={screen_mobile}></Nav_render>

                    <Routes>

                        <Route path="/" element={ <Suspense fallback={<Spinner></Spinner>}> <Home></Home> </Suspense>  }></Route>
                        <Route path="/productos" element={ <Suspense  fallback={<Spinner></Spinner>}> <Products></Products></Suspense>}> </Route>
                        <Route path="/productos/:category" element={  <Suspense fallback={<Spinner></Spinner>}> <Products></Products></Suspense> }> </Route>

                        <Route path="/servicios" element={ <Suspense  fallback={<Spinner></Spinner>}> <Services></Services></Suspense>}> </Route>
                        <Route path="/creditos" element={ <Suspense  fallback={<Spinner></Spinner>}> <Creditos></Creditos></Suspense>}> </Route>
                        <Route path="/nosotros" element={ <Suspense  fallback={<Spinner></Spinner>}> <Nosotros></Nosotros></Suspense> }> </Route>

                    </Routes>

                </Provider>

            </BrowserRouter>
        </div>
    );
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App/>, document.getElementById('App'));
}
