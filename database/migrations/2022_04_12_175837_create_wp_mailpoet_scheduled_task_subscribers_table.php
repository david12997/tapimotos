<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetScheduledTaskSubscribersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_scheduled_task_subscribers', function (Blueprint $table) {
            $table->unsignedInteger('task_id');
            $table->unsignedInteger('subscriber_id')->index('subscriber_id');
            $table->integer('processed');
            $table->smallInteger('failed')->default(0);
            $table->text('error')->nullable();
            $table->timestamps();
            
            $table->primary(['task_id', 'subscriber_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_scheduled_task_subscribers');
    }
}
