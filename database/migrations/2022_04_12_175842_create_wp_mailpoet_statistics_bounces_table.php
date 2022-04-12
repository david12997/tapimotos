<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetStatisticsBouncesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_statistics_bounces', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('newsletter_id');
            $table->unsignedInteger('subscriber_id');
            $table->unsignedInteger('queue_id');
            $table->timestamp('created_at')->default('current_timestamp()');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_statistics_bounces');
    }
}
