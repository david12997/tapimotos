import styled from 'styled-components';


const Nav = styled.div`

    width:100%;
    height:140px;
    display:flex;
    justify-content:center;
    align-items:center;

    @media(min-width:800px){

        height:180px;
        display:block;
    }

`;


const Nav_mobile = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;



    @media(min-width:800px){

        display:none;
    }


`;

const Nav_desktop =  styled.div`


    display:none;

    @media(min-width:800px){


        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        margin-top:15px;


    }



`;

const Menu_desktop =  styled.div`


    display:none;

    @media(min-width:800px){

        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100%;
        height:60px;
        background:#eeecec;
        margin-top:17px;

        .link{
            color:black;
            width:100px;
            height:100%;
            font-size:18px;
            text-decoration:none;

        }

        .link-activo{

            color:white;
            background:#e98008;
        }
    }

`;


export { Nav, Nav_mobile, Nav_desktop, Menu_desktop}
