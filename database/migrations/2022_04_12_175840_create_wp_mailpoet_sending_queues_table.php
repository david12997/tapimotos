<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetSendingQueuesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_sending_queues', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('task_id')->index('task_id');
            $table->unsignedInteger('newsletter_id')->index('newsletter_id');
            $table->longText('newsletter_rendered_body')->nullable();
            $table->string('newsletter_rendered_subject', 250)->nullable();
            $table->longText('subscribers')->nullable();
            $table->unsignedInteger('count_total')->default(0);
            $table->unsignedInteger('count_processed')->default(0);
            $table->unsignedInteger('count_to_process')->default(0);
            $table->longText('meta')->nullable();
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_sending_queues');
    }
}
