<?php

use App\Http\Controllers\PayController;
use App\Http\Controllers\VentaController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', function () {
    return view('home');
});

Route::get('/productos', function () {
    return view('products');
})->name('productos');

Route::get('/productos/{category}', function () {
    return view('products');
});

Route::get('/servicios', function () {
    return view('services');
});

Route::get('/creditos', function () {
    return view('credits');
});

Route::get('/nosotros', function () {
    return view('about');
});

Route::get('/pagar', function () {
    return view('pay');
});




Route::post('/pagos/auth',[PayController::class,'Auth_preference']);

Route::post('/pagos/auth/delete',[PayController::class,'Delete_preference']);

Route::post('/pagos/crear-pago',[PayController::class,'Create_preference'])->middleware('pay');

Route::get('/pagos/estado/{status}', [VentaController::class,'store'])->middleware('venta');

Route::get('/pagos/transaccion/pdf',[VentaController::class,'Pdf']);


