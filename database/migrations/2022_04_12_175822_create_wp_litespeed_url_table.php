<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpLitespeedUrlTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_litespeed_url', function (Blueprint $table) {
            $table->bigInteger('id')->primary();
            $table->string('url', 500);
            $table->string('cache_tags', 1000)->default('');
            
            $table->unique(['url`(191'], 'url');
            $table->index(['cache_tags`(191'], 'cache_tags');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_litespeed_url');
    }
}
