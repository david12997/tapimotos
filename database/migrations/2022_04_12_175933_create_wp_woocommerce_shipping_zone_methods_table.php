<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWoocommerceShippingZoneMethodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_woocommerce_shipping_zone_methods', function (Blueprint $table) {
            $table->unsignedBigInteger('zone_id');
            $table->bigIncrements('instance_id');
            $table->string('method_id', 200);
            $table->unsignedBigInteger('method_order');
            $table->boolean('is_enabled')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_woocommerce_shipping_zone_methods');
    }
}
