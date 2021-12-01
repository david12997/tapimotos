import styled from 'styled-components';

const  Search =  styled.div`

    width:100%;
    height:900px;
    margin-top:40px;

    .contenedor-btns{

        width:100%;
        display:flex;
        justify-content:center;
        height:430px;
        overflow-y:scroll;
        padding:4px;

    }

    .main-search{

        width:100%;
        height:470px;
    }

    .title-search{

        width:100%;
        height:70px;
        display:flex;
        justify-content:center;
        align-items:center;
        font-size:19px;
    }

    .Form{

        width:100%;
        height:400px;
    }


    @media(min-width:800px){

          height:450px;


        .contenedor-btns{

            width:100%;
            height:150px;
            overflow-y:hidden;
            overflow-x:scroll;


        }

        .btns{

            width:100%;
            display:flex;
            justify-content:space-around;
            align-items:center;
        }
        .main-search{

            width:100%;
            height:300px;
        }

        .title-search{

            width:100%;
            height:70px;
            display:flex;
            justify-content:center;
            align-items:center;
            font-size:18px;
        }

        .Form{

            width:100%;
            height:230px;
        }
    }

`;

export default Search;
