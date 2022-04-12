<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetStatisticsUnsubscribesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_statistics_unsubscribes', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('newsletter_id')->nullable();
            $table->unsignedInteger('subscriber_id')->index('subscriber_id');
            $table->unsignedInteger('queue_id')->nullable()->index('queue_id');
            $table->timestamp('created_at')->default('current_timestamp()');
            $table->string('source')->nullable()->default('unknown');
            $table->string('meta')->nullable();
            
            $table->index(['newsletter_id', 'subscriber_id'], 'newsletter_id_subscriber_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_statistics_unsubscribes');
    }
}
