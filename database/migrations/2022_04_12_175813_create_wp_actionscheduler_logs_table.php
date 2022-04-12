<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpActionschedulerLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_actionscheduler_logs', function (Blueprint $table) {
            $table->bigIncrements('log_id');
            $table->unsignedBigInteger('action_id')->index('action_id');
            $table->text('message');
            $table->dateTime('log_date_gmt')->nullable()->default('0000-00-00 00:00:00')->index('log_date_gmt');
            $table->dateTime('log_date_local')->nullable()->default('0000-00-00 00:00:00');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_actionscheduler_logs');
    }
}
