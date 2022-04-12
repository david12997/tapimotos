<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetStatisticsClicksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_statistics_clicks', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('newsletter_id');
            $table->unsignedInteger('subscriber_id')->index('subscriber_id');
            $table->unsignedInteger('queue_id')->index('queue_id');
            $table->unsignedInteger('link_id');
            $table->unsignedInteger('user_agent_id')->nullable();
            $table->boolean('user_agent_type')->default(0);
            $table->unsignedInteger('count');
            $table->timestamps();
            
            $table->index(['newsletter_id', 'subscriber_id', 'user_agent_type'], 'newsletter_id_subscriber_id_user_agent_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_statistics_clicks');
    }
}
