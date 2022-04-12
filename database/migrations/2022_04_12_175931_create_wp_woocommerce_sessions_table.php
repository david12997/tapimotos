<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWoocommerceSessionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_woocommerce_sessions', function (Blueprint $table) {
            $table->bigIncrements('session_id');
            $table->char('session_key', 32)->unique('session_key');
            $table->longText('session_value');
            $table->unsignedBigInteger('session_expiry');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_woocommerce_sessions');
    }
}
