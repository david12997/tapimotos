<?php

use App\Http\Controllers\LlantasTapimotoController;
use App\Http\Controllers\MarcasLlantaController;
use App\Http\Controllers\V2LlatnasTapimoto;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('llantas', LlantasTapimotoController::class);
Route::apiResource('marca-llantas',MarcasLlantaController::class);

Route::get('/search/llantas/{marca}',[LlantasTapimotoController::class, 'search_for_marca']);
Route::get('/search/llantas/{marca}/{ancho}',[LlantasTapimotoController::class, 'search_for_marca_ancho']);
Route::get('/search/llantas/{marca}/{ancho}/{perfil}',[LlantasTapimotoController::class, 'search_for_marca_ancho_perfil']);
Route::get('/search/llantas/{marca}/{ancho}/{perfil}/{rin}',[LlantasTapimotoController::class, 'search_for_marca_ancho_perfil_rin']);
Route::get('/search/all/{data}',[LlantasTapimotoController::class, 'Search_all']);

Route::get('search/v2/llantas/',[V2LlatnasTapimoto::class , 'search_anchos']);
Route::get('search/v2/llantas/{ancho}',[V2LlatnasTapimoto::class , 'search_for_ancho']);
Route::get('search/v2/llantas/{ancho}/{perfil}',[V2LlatnasTapimoto::class , 'search_for_ancho_perfil']);
Route::get('search/v2/llantas/{ancho}/{perfil}/{rin}',[V2LlatnasTapimoto::class , 'search_for_ancho_perfil_rin']);
