<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpActionschedulerActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_actionscheduler_actions', function (Blueprint $table) {
            $table->bigIncrements('action_id');
            $table->string('hook', 191)->index('hook');
            $table->string('status', 20)->index('status');
            $table->dateTime('scheduled_date_gmt')->nullable()->default('0000-00-00 00:00:00')->index('scheduled_date_gmt');
            $table->dateTime('scheduled_date_local')->nullable()->default('0000-00-00 00:00:00');
            $table->string('args', 191)->nullable()->index('args');
            $table->longText('schedule')->nullable();
            $table->unsignedBigInteger('group_id')->default(0)->index('group_id');
            $table->integer('attempts')->default(0);
            $table->dateTime('last_attempt_gmt')->nullable()->default('0000-00-00 00:00:00')->index('last_attempt_gmt');
            $table->dateTime('last_attempt_local')->nullable()->default('0000-00-00 00:00:00');
            $table->unsignedBigInteger('claim_id')->default(0)->index('claim_id');
            $table->string('extended_args', 8000)->nullable();
            
            $table->index(['claim_id', 'status', 'scheduled_date_gmt'], 'claim_id_status_scheduled_date_gmt');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_actionscheduler_actions');
    }
}
