<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpAioseoNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_aioseo_notifications', function (Blueprint $table) {
            $table->id();
            $table->string('slug', 13)->unique('ndx_aioseo_notifications_slug');
            $table->text('title');
            $table->longText('content');
            $table->string('type', 64)->index('ndx_aioseo_notifications_type');
            $table->text('level');
            $table->unsignedBigInteger('notification_id')->nullable();
            $table->string('notification_name')->nullable();
            $table->dateTime('start')->nullable();
            $table->dateTime('end')->nullable();
            $table->string('button1_label')->nullable();
            $table->string('button1_action')->nullable();
            $table->string('button2_label')->nullable();
            $table->string('button2_action')->nullable();
            $table->boolean('dismissed')->default(0)->index('ndx_aioseo_notifications_dismissed');
            $table->boolean('new')->default(1);
            $table->dateTime('created');
            $table->dateTime('updated');
            
            $table->index(['start', 'end'], 'ndx_aioseo_notifications_dates');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_aioseo_notifications');
    }
}
