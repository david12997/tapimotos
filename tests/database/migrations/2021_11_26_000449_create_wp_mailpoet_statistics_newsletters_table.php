<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetStatisticsNewslettersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_statistics_newsletters', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('newsletter_id')->index('newsletter_id');
            $table->unsignedInteger('subscriber_id')->index('subscriber_id');
            $table->unsignedInteger('queue_id');
            $table->timestamp('sent_at')->nullable()->default('current_timestamp()');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_statistics_newsletters');
    }
}
