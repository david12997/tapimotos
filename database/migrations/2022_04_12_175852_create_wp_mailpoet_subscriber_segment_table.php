<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetSubscriberSegmentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_subscriber_segment', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('subscriber_id');
            $table->unsignedInteger('segment_id')->index('segment_id');
            $table->string('status', 12)->default('subscribed');
            $table->timestamps();
            
            $table->unique(['subscriber_id', 'segment_id'], 'subscriber_segment');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_subscriber_segment');
    }
}
