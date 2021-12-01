import {
    configureStore, createSlice
} from '@reduxjs/toolkit';


const TiendaSlice =  createSlice({

    name:'tienda',
    initialState:{
        productos:null,
        paginacion:null,
        filtros:null,
        categoria:null,
        busqueda:false,
        status: ''
    },

    reducers:{

        Productos: (state,action)=>{

            state.productos = action.payload;
        },

        Paginacion: (state,action)=>{

            state.paginacion = action.payload;
        },

        Filtros: (state,action)=>{

            state.filtros = action.payload;
        },

        Categoria: (state,action)=>{

            state.categoria = action.payload;
        },
        Busqueda:(state,action)=>{

            state.busqueda = action.payload
        }


    }
});

export const  {Productos,Paginacion,Filtros,Categoria,Busqueda} = TiendaSlice.actions;

export const database_store = configureStore({

    reducer:{

        tienda:TiendaSlice.reducer
    }
})
