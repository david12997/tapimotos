<?php

namespace App\Http\Controllers;

use App\Models\LlantasTapimoto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class V2LlatnasTapimoto extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\LlantasTapimoto  $llantasTapimoto
     * @return \Illuminate\Http\Response
     */
    public function show(LlantasTapimoto $llantasTapimoto)
    {
        //
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
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\LlantasTapimoto  $llantasTapimoto
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, LlantasTapimoto $llantasTapimoto)
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

    public function search_anchos(){

        $llantas = LlantasTapimoto::select(['ancho_llanta'])->paginate(350);

        return \response($llantas);
    }

    public function search_for_ancho($ancho)
    {

        $llantas = DB::table('llantas_tapimotos')->where('ancho_llanta',strtoupper($ancho))->paginate(9);

        return \response($llantas);

    }

    public function search_for_ancho_perfil($ancho,$perfil)
    {

        $llantas = DB::table('llantas_tapimotos')->where('ancho_llanta',strtoupper($ancho))
                                                ->where('perfil_llanta',intval($perfil))
                                                ->paginate(9);

        return \response($llantas);

    }

    public function search_for_ancho_perfil_rin($ancho,$perfil,$rin)
    {

        $llantas = DB::table('llantas_tapimotos')->where('ancho_llanta',strtoupper($ancho))
                                                ->where('perfil_llanta',intval($perfil))
                                                ->where('numero_rin',intval($rin))
                                                ->paginate(9);

        return \response($llantas);

    }
}
