import React, {useEffect, useState, useRef} from 'react';
import Main_btn_category from './main-btn';
import Search from './styles/styles-main-search';
import Search_llantas from './search-llantas';
import Search_cascos from './search-cascos';
import Search_aceites from './search-aceites';
import {DataHome} from '../services/store';



const Main_search = () => {

    let defaultData = [
        {'name':'LLANTAS','discount':'20% OFF','img':'./images/llantas.png'},
        {'name':'CASCOS','discount':'20% OFF','img':'./images/casco.png'},
        {'name':'ACEITES','discount':'20% OFF','img':'./images/aceite.png'}
    ];

    const [categories, setCategories] = useState(defaultData);
    const [nameCategory, setNameCategory] = useState('LLANTAS');
    const [typeSearch, setTypeSearch] = useState( <Search_llantas></Search_llantas>)


    useEffect(()=>{


        //defaultData must be equal to data[0] at  DataHome().main_search.response()
        DataHome().main_search.response().then(data =>{

            (data[0] !== 'Error can not get data') && setCategories(data[0])

        });

        return()=>{

            setCategories(defaultData);
        }

    },[]);


    const  Click_category = (index,category)=>{

        setNameCategory(category);

        (category === 'LLANTAS') && setTypeSearch(<Search_llantas></Search_llantas>);
        (category === 'CASCOS') && setTypeSearch(<Search_cascos></Search_cascos>);
        (category === 'ACEITES') && setTypeSearch(<Search_aceites></Search_aceites>);

        let buttons = document.getElementsByClassName('buttons-category');

        for(let i=0; i< buttons.length;i++){

            if(index === i){buttons[i].firstChild.style.background = '#e98008';}
            else{buttons[i].firstChild.style.background ='#0096d2';}
        }

        window.scrollTo(0,780)
    }

    return (
        <Search>

            <div className='contenedor-btns'>

                <div className='btns'>

                    {
                        categories.map((category,index)=>

                            <div className='buttons-category' onClick={()=>Click_category(index,category.name)} key={index}>

                                <Main_btn_category color='#0096d2'   name={category.name} discount={category.discount} img={category.img}/>

                            </div>

                        )
                    }

                </div>

            </div>

            <div className='main-search'>

                <div className='title-search'>
                    <b><li> {nameCategory}</li></b>
                </div>

                <div className='Form'>

                    {typeSearch}

                </div>


            </div>


        </Search>
    );
}

export default Main_search;
