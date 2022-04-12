<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venta extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_venta',
        'data_mercadopago',
        'data_cliente',
        'data_productos'

    ];

    protected $primaryKey = 'id_venta';
}
