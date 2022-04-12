<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWoocommerceAttributeTaxonomiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_woocommerce_attribute_taxonomies', function (Blueprint $table) {
            $table->bigIncrements('attribute_id');
            $table->string('attribute_name', 200);
            $table->string('attribute_label', 200)->nullable();
            $table->string('attribute_type', 20);
            $table->string('attribute_orderby', 20);
            $table->integer('attribute_public')->default(1);
            
            $table->index(['attribute_name`(20'], 'attribute_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_woocommerce_attribute_taxonomies');
    }
}
