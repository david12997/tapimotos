<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpAioseoCacheTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_aioseo_cache', function (Blueprint $table) {
            $table->id();
            $table->string('key', 80)->unique('ndx_aioseo_cache_key');
            $table->longText('value');
            $table->dateTime('expiration')->nullable()->index('ndx_aioseo_cache_expiration');
            $table->dateTime('created');
            $table->dateTime('updated');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_aioseo_cache');
    }
}
