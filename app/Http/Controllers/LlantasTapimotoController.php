<?php

namespace App\Http\Controllers;

use App\Models\LlantasTapimoto;
use App\Http\Requests\StoreLlantasTapimotoRequest;
use App\Http\Requests\UpdateLlantasTapimotoRequest;

class LlantasTapimotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $llantas = LlantasTapimoto::paginate(9);

        return \response($llantas);
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
     * @param  \App\Http\Requests\StoreLlantasTapimotoRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreLlantasTapimotoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LlantasTapimoto  $llantasTapimoto
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $llantas = LlantasTapimoto::findOrFail($id);

        return \response($llantas);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\LlantasTapimoto  $llantasTapimoto
     * @return \Illuminate\Http\Response
     */
    public function edit(LlantasTapimoto $llantasTapimoto)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateLlantasTapimotoRequest  $request
     * @param  \App\Models\LlantasTapimoto  $llantasTapimoto
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateLlantasTapimotoRequest $request, LlantasTapimoto $llantasTapimoto)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\LlantasTapimoto  $llantasTapimoto
     * @return \Illuminate\Http\Response
     */
    public function destroy(LlantasTapimoto $llantasTapimoto)
    {
        //
    }



    public function search_for_marca($marca)
    {

        $llantas = LlantasTapimoto::all()->where('marca_llanta',strtoupper($marca));

        return \response($llantas);

    }



    public function search_for_marca_ancho($marca,$ancho)
    {

        $llantas = LlantasTapimoto::all()->where('marca_llanta',strtoupper($marca))->where('ancho_llanta',intval($ancho));

        return \response($llantas);

    }


    public function search_for_marca_ancho_perfil($marca,$ancho, $perfil)
    {

        $llantas = LlantasTapimoto::all()->where('marca_llanta',strtoupper($marca))
                                        ->where('ancho_llanta',intval($ancho))
                                        ->where('perfil_llanta',$perfil)
        ;

        return \response($llantas);

    }

    public function search_for_marca_ancho_perfil_rin($marca,$ancho, $perfil, $rin)
    {

        $llantas = LlantasTapimoto::all()->where('marca_llanta',strtoupper($marca))
                                        ->where('ancho_llanta',intval($ancho))
                                        ->where('perfil_llanta',$perfil)
                                        ->where('numero_rin',$rin)
        ;

        return \response($llantas);

    }
}
