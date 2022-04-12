<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWoocommerceShippingZonesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_woocommerce_shipping_zones', function (Blueprint $table) {
            $table->bigIncrements('zone_id');
            $table->string('zone_name', 200);
            $table->unsignedBigInteger('zone_order');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_woocommerce_shipping_zones');
    }
}
