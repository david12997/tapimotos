<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetStatisticsWoocommercePurchasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_statistics_woocommerce_purchases', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('newsletter_id')->index('newsletter_id');
            $table->unsignedInteger('subscriber_id')->index('subscriber_id');
            $table->unsignedInteger('queue_id')->index('queue_id');
            $table->unsignedInteger('click_id');
            $table->unsignedBigInteger('order_id');
            $table->char('order_currency', 3);
            $table->float('order_price_total');
            $table->timestamps();
            
            $table->unique(['click_id', 'order_id'], 'click_id_order_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_statistics_woocommerce_purchases');
    }
}
