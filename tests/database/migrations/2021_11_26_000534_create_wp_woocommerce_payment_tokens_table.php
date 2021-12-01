<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWoocommercePaymentTokensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_woocommerce_payment_tokens', function (Blueprint $table) {
            $table->bigIncrements('token_id');
            $table->string('gateway_id', 200);
            $table->text('token');
            $table->unsignedBigInteger('user_id')->default(0)->index('user_id');
            $table->string('type', 200);
            $table->boolean('is_default')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_woocommerce_payment_tokens');
    }
}
