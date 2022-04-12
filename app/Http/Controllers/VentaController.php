<?php

namespace App\Http\Controllers;

use App\Models\Venta;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade as PDF;

class VentaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $venta = new Venta();
        $venta->data_mercadopago = json_encode($_SESSION['mercadopago_paid']);
        $venta->data_cliente = json_encode($_SESSION['pay_tapimotos']);
        $venta->data_productos = json_encode($_SESSION['data_products']);
        $venta->save();

        return view('destroy');



    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Venta  $venta
     * @return \Illuminate\Http\Response
     */
    public function show(Venta $venta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Venta  $venta
     * @return \Illuminate\Http\Response
     */
    public function edit(Venta $venta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Venta  $venta
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Venta $venta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Venta  $venta
     * @return \Illuminate\Http\Response
     */
    public function destroy(Venta $venta)
    {
        //
    }

    public function Pdf()
    {
        session_start();
        $pdf = PDF::loadView('pdf',['mp'=>$_SESSION['mercadopago_paid'],
                                    'costumer'=>$_SESSION['pay_tapimotos'],
                                    'products'=>$_SESSION['data_products']
        ]);
        return $pdf->stream();
    }
}
