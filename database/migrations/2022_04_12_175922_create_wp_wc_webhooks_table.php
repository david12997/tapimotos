<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWcWebhooksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_wc_webhooks', function (Blueprint $table) {
            $table->bigIncrements('webhook_id');
            $table->string('status', 200);
            $table->text('name');
            $table->unsignedBigInteger('user_id')->index('user_id');
            $table->text('delivery_url');
            $table->text('secret');
            $table->string('topic', 200);
            $table->dateTime('date_created')->default('0000-00-00 00:00:00');
            $table->dateTime('date_created_gmt')->default('0000-00-00 00:00:00');
            $table->dateTime('date_modified')->default('0000-00-00 00:00:00');
            $table->dateTime('date_modified_gmt')->default('0000-00-00 00:00:00');
            $table->smallInteger('api_version');
            $table->smallInteger('failure_count')->default(0);
            $table->boolean('pending_delivery')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_wc_webhooks');
    }
}
