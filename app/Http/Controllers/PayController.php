<?php

namespace App\Http\Controllers;
use MercadoPago;
use MercadoPago\Shipments;



class PayController extends Controller
{

    public function Create_preference()
    {


        $_SESSION['dominio'] = 'https://portalorion.ml/';

        $_SESSION['pay_tapimotos'] = json_decode($_POST['pay_tapimotos'],true);
        $_SESSION['data_products'] = json_decode($_POST['data_products'],true);


        // SDK de Mercado Pago
        require base_path('vendor/autoload.php');

        // Agrega credenciales
        MercadoPago\SDK::setAccessToken(config('services.mercadopago.token'));
        MercadoPago\SDK::setIntegratorId('dev_24c65fb163bf11ea96500242ac130004');

        $preference = new MercadoPago\Preference();

        //exclude method
        $preference->payment_methods = array(

            "excluded_payment_methods"=>array(
                array("id"=>"visa")
            ),
            'installments'=>6
        );

        //payer
        $payer = new MercadoPago\Payer();

        $payer->name = 'Lalo';
        $payer->surname = 'Landa';
        $payer->email = 'test_user_83958037@testuser.com';
        $payer->phone=array(
            'area_code'=>'11',
            'number'=>'3102414148'
        );
        $payer->address=array(

            'zip_code'=>'110811',
            'street_name'=>'Falsa',
            'street_number'=>123
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
        $shipment->cost = intval(35000);
        $shipment->mode = "not_specified";


        // Crea un ítem en la preferencia
        $item = new MercadoPago\Item();
        $item->id=1234;
        $item->title = 'Productos';
        $item->description="Dispositivo móvil de Tienda e-commerce";
        $item->picture_url = $_SESSION['data_products'][0]['image'];
        $item->quantity = intval(1);
        $item->unit_price = $_SESSION['pay_tapimotos']['total_pay'];


        // Crea un objeto de preferencia7
        $preference->payer = $payer;
        $preference->items = array($item);
        $preference->shipments = $shipment;
        $preference->external_reference="davidc12997@gmail.com";
        $preference->notification_url = $_SESSION['dominio'].'mercadopago/notificaciones?source_news=webhooks';
        $preference->save();

        //eliminar autenticacion
        $_SESSION['auth_pay'] = false;
        unset($_SESSION['auth_pay']);



        echo json_encode(['init_point'=>$preference->init_point,'prefrence_id'=>$preference->id,'preference'=>$preference]);

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
