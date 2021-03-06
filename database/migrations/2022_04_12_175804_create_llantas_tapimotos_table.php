<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLlantasTapimotosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('llantas_tapimotos', function (Blueprint $table) {
            $table->bigInteger('id_llanta')->primary();
            $table->string('identificador');
            $table->string('nombre_llanta');
            $table->string('marca_llanta');
            $table->string('ancho_llanta');
            $table->string('perfil_llanta');
            $table->string('numero_rin');
            $table->integer('disponibilidad');
            $table->string('img');
            $table->integer('precio_llanta');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('llantas_tapimotos');
    }
}
