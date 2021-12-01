<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LlantasTapimoto extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_llanta',
        'nombre_llanta',
        'marca_llanta',
        'precio_llanta',
        'ancho_llanta',
        'perfil_llanta',
        'numero_rin',
        'disponibilidad'
    ];

    protected $primaryKey = 'id_llanta';
}
