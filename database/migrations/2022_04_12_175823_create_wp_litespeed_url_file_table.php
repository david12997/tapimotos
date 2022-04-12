<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpLitespeedUrlFileTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_litespeed_url_file', function (Blueprint $table) {
            $table->bigInteger('id')->primary();
            $table->bigInteger('url_id');
            $table->string('vary', 32)->default(' COMMENT 'md5');
            $table->string('filename', 32)->default(' COMMENT 'md5')->index('filename');
            $table->tinyInteger('type')->index('type');
            
            $table->index(['url_id', 'vary', 'type'], 'url_id_2');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_litespeed_url_file');
    }
}
