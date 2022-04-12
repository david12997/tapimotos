<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>PDF</title>

        <link rel="stylesheet" href="/css/app.css">

    </head>
    <body>

        <style>
            .costumer{
                color:gray;
            }
            .gray{
                color:gray;
            }
        </style>

        <h4 style="margin-left:150px;margin-top:-10px;">Transacción #{{$mp['payment_id']}}</h4>
        <h4 style="margin-left:150px;margin-top:-20px;">Estado:{{$mp['status']}}</h4>
        <img style="width:130px;margin-top:-30px;" src="images/logo-tapimotos.png">
        <hr>
        <div style="width:100%;display:flex;">
            <div style="margin-left:50px;">
                <h3 style="color:black">Comprador:</h3>
                <li><span class="costumer">Nombre : </span>{{$costumer['nombre']}}</li>
                <br>
                <li><span class="costumer">Ciudad : </span>{{$costumer['ciudad']}}</li>
                <br>
                <li><span class="costumer">Dirección : </span>{{$costumer['direccion']}}</li>
                <br>
                <li><span class="costumer">Email : </span>{{$costumer['correo']}}</li>
                <br>
                <li><span class="costumer">Telefono : </span>{{$costumer['celular']}}</li>
            </div>
            <div style="margin-left:400px">
                <h3>Productos:</h3>

                @foreach ($products as $product)
                    <li> {{ $product['product'] }} <br> <span class="gray">$ {{number_format($product['price'])}} COP  x {{ $product['cantidad']}}</span></li><br>
                @endforeach
            </div>

        </div>
        <hr style="margin-top:-130px;">
        <br>
        <div>
           <b>TOTAL PRODUCTOS: $ {{number_format($costumer['total_pay'])}} COP</b>
           <br><br>
           <b>ENVÍO: $ {{number_format(20000)}} COP</b>
           <hr style="width:300px;margin-left:-10px;">
           <b>TOTAL A PAGAR: <b style="color:green;">$ {{ number_format(20000+intval($costumer['total_pay']))}} COP</b></b>
        </div>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <br><br><br>
        <small style="color:gray">Cualquier duda e inquitud sobre tu compra comunicate a los números: 3208168103 - 3118928239</small>
        <br>
        <small style="color:gray">Carrera 11 - 6 - 46 Villanueva, Casanare</small>
        <br>
        <small style="color:gray">www.tapimotosdk.com</small>

    </body>
</html>
