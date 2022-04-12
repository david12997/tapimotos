<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpAddonlibraryCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_addonlibrary_categories', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->string('title');
            $table->string('alias')->nullable();
            $table->integer('ordering');
            $table->text('params');
            $table->string('type')->nullable();
            $table->integer('parent_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_addonlibrary_categories');
    }
}
