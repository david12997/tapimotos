<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class PayMiddleware
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

        if(!isset($_SESSION['auth_pay']) || $_SESSION['auth_pay'] !== true){

           echo json_encode('bad request');
           die();
        }

        return $next($request);
    }
}
