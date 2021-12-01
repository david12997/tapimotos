<?php

namespace App\Http\Controllers;

use App\Models\MarcasLlanta;
use App\Http\Requests\StoreMarcasLlantaRequest;
use App\Http\Requests\UpdateMarcasLlantaRequest;

class MarcasLlantaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $marcas = MarcasLlanta::all();

        return \response($marcas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreMarcasLlantaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMarcasLlantaRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\MarcasLlanta  $marcasLlanta
     * @return \Illuminate\Http\Response
     */
    public function show(MarcasLlanta $marcasLlanta)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\MarcasLlanta  $marcasLlanta
     * @return \Illuminate\Http\Response
     */
    public function edit(MarcasLlanta $marcasLlanta)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateMarcasLlantaRequest  $request
     * @param  \App\Models\MarcasLlanta  $marcasLlanta
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMarcasLlantaRequest $request, MarcasLlanta $marcasLlanta)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MarcasLlanta  $marcasLlanta
     * @return \Illuminate\Http\Response
     */
    public function destroy(MarcasLlanta $marcasLlanta)
    {
        //
    }
}
