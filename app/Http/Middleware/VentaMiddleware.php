<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class VentaMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        session_start();

        if( !isset($_SESSION['backs_url']) || $_SESSION['backs_url'] !== true ){

            return redirect()->route('productos');

        }else{

            $_SESSION['mercadopago_paid'] = $_GET;
            $_SESSION['backs_url'] = false;
            unset($_SESSION['backs_url']);

            return $next($request);


        }
    }



}
