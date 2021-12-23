<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\RedirectResponse;

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
});

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

Route::get('/pagos/{status}', function ($status) {
    dd($status);
});



