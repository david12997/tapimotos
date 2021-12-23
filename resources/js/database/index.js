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
            localStorage.setItem('products_state',JSON.stringify(state.productos));
        },

        Paginacion: (state,action)=>{

            state.paginacion = action.payload;
            localStorage.setItem('pagination_state',JSON.stringify(state.paginacion));
        },

        Filtros: (state,action)=>{

            state.filtros = action.payload;
            localStorage.setItem('filtros_state',JSON.stringify(state.filtros));
        },

        Categoria: (state,action)=>{

            state.categoria = action.payload;
            localStorage.setItem('category',JSON.stringify(state.categoria));
        },
        Busqueda:(state,action)=>{

            state.busqueda = action.payload;
            localStorage.setItem('busqueda_state',JSON.stringify(state.busqueda));
        }


    }
});

const CarritoSlice = createSlice({

    name:'carrito',
    initialState:{

        productos:null,
        cantidad:0

    },
    reducers:{

        UpdateCart: (state,action)=>{

            state.productos = action.payload;
            localStorage.setItem('products_carrito',JSON.stringify(state.productos));


        },

        UpdateCuantity:(state,action)=>{

            state.cantidad = action.payload;
            localStorage.setItem('cuantity_carrito',JSON.stringify(state.cantidad));
        }
    }
})



const VistaProductoSlice = createSlice({

    name:'vista_producto',
    initialState:{
        producto:null
    },
    reducers:{

        UpdateProduct:(state,action)=>{

            state.producto = action.payload;
        }
    }
})



const DataBuy = createSlice({

    name:'comprar',
    initialState:{

        productos:null,
        type:null
    },
    reducers:{

        UpdateProductsBuy:(state,action)=>{

            state.productos = action.payload;
        },

        UpdateTypeBuy:(state,action)=>{

            state.type = action.payload;
        }
    }
})


export const  {Productos,Paginacion,Filtros,Categoria,Busqueda} = TiendaSlice.actions;
export const { UpdateCart, UpdateCuantity} = CarritoSlice.actions;
export const { UpdateProduct } =  VistaProductoSlice.actions;
export const { UpdateProductsBuy, UpdateTypeBuy} =  DataBuy.actions;





export const database_store = configureStore({

    reducer:{

        tienda:TiendaSlice.reducer,
        carrito:CarritoSlice.reducer,
        vista_producto:VistaProductoSlice.reducer,
        comprar:DataBuy.reducer
    }
})
