<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetStatisticsOpensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_statistics_opens', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('newsletter_id');
            $table->unsignedInteger('subscriber_id')->index('subscriber_id');
            $table->unsignedInteger('queue_id')->index('queue_id');
            $table->unsignedInteger('user_agent_id')->nullable();
            $table->boolean('user_agent_type')->default(0);
            $table->timestamp('created_at')->default('current_timestamp()')->index('created_at');
            
            $table->index(['newsletter_id', 'subscriber_id', 'user_agent_type'], 'newsletter_id_subscriber_id_user_agent_type');
            $table->index(['subscriber_id', 'created_at'], 'subscriber_id_created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_statistics_opens');
    }
}
