<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWcCategoryLookupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_wc_category_lookup', function (Blueprint $table) {
            $table->unsignedBigInteger('category_tree_id');
            $table->unsignedBigInteger('category_id');
            
            $table->primary(['category_tree_id', 'category_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_wc_category_lookup');
    }
}
