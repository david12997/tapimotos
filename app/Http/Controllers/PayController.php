<?php

namespace App\Http\Controllers;
use MercadoPago;
use MercadoPago\Shipments;



class PayController extends Controller
{

    public function Create_preference()
    {


        $_SESSION['dominio'] = 'http://127.0.0.1:8000/';
        $_SESSION['pay_tapimotos'] = json_decode($_POST['pay_tapimotos'],true);
        $_SESSION['data_products'] = json_decode($_POST['data_products'],true);


        // SDK de Mercado Pago
        require base_path('vendor/autoload.php');

        // Agrega credenciales
        MercadoPago\SDK::setAccessToken(config('services.mercadopago.token'));

        $preference = new MercadoPago\Preference();

        //exclude method pay efecty
        $preference->payment_methods = array(

            "excluded_payment_types"=>array(
                array("id"=>"ticket")
            )
        );

        //access back url
        $_SESSION['backs_url'] = true;

        $preference->back_urls = array(

            "success" => "{$_SESSION['dominio']}pagos/estado/success",
            "failure" => "{$_SESSION['dominio']}pagos/estado/failed",
            "pending" => "{$_SESSION['dominio']}pagos/estado/pending"
        );

        $preference->auto_return = "approved";

        $shipment = new Shipments();
        $shipment->cost = intval(20000);
        $shipment->mode = "not_specified";


        // Crea un ítem en la preferencia
        $item = new MercadoPago\Item();
        $item->title = 'Productos';
        $item->quantity = intval(1);
        $item->unit_price = $_SESSION['pay_tapimotos']['total_pay'];


        // Crea un objeto de preferencia
        $preference->items = array($item);
        $preference->shipments = $shipment;
        $preference->save();

        //eliminar autenticacion
        $_SESSION['auth_pay'] = false;
        unset($_SESSION['auth_pay']);



        echo json_encode(['init_point'=>$preference->init_point]);

    }


    public function Auth_preference()
    {
        if(!isset($_POST['auth_pay']) || empty($_POST['auth_pay']) || $_POST['auth_pay'] !== '5719326' )
        {
            echo json_encode('bad authentication try again');

        }else{

            session_start();
            $_SESSION['auth_pay'] = true;
            echo json_encode('success auth_preference');
        }

    }

    public function Delete_preference()
    {
        session_start();

        if(isset($_SESSION['auth_pay'])){

            $_SESSION['auth_pay'] = false;
            unset($_SESSION['auth_pay']);
            echo json_encode('success_delete auth_preference');
        }else{

            echo json_encode('auth_pay does not exist');
        }
    }





}
