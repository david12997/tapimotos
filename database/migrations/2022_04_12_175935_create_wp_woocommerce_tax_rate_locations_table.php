<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWoocommerceTaxRateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_woocommerce_tax_rate_locations', function (Blueprint $table) {
            $table->bigIncrements('location_id');
            $table->string('location_code', 200);
            $table->unsignedBigInteger('tax_rate_id')->index('tax_rate_id');
            $table->string('location_type', 40);
            
            $table->index(['location_type`(10)', 'location_code`(20'], 'location_type_code');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_woocommerce_tax_rate_locations');
    }
}
