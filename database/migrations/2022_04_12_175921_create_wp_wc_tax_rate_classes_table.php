<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWcTaxRateClassesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_wc_tax_rate_classes', function (Blueprint $table) {
            $table->bigIncrements('tax_rate_class_id');
            $table->string('name', 200)->default('');
            $table->string('slug', 200)->default('');
            
            $table->unique(['slug`(191'], 'slug');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_wc_tax_rate_classes');
    }
}
