<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWoocommerceApiKeysTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_woocommerce_api_keys', function (Blueprint $table) {
            $table->bigIncrements('key_id');
            $table->unsignedBigInteger('user_id');
            $table->string('description', 200)->nullable();
            $table->string('permissions', 10);
            $table->char('consumer_key', 64)->index('consumer_key');
            $table->char('consumer_secret', 43)->index('consumer_secret');
            $table->longText('nonces')->nullable();
            $table->char('truncated_key', 7);
            $table->dateTime('last_access')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_woocommerce_api_keys');
    }
}
