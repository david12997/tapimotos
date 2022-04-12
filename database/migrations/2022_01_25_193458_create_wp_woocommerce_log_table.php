<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWoocommerceLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_woocommerce_log', function (Blueprint $table) {
            $table->bigIncrements('log_id');
            $table->dateTime('timestamp');
            $table->smallInteger('level')->index('level');
            $table->string('source', 200);
            $table->longText('message');
            $table->longText('context')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_woocommerce_log');
    }
}
