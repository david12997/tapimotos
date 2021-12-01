<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetScheduledTasksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_scheduled_tasks', function (Blueprint $table) {
            $table->increments('id');
            $table->string('type', 90)->nullable()->index('type');
            $table->string('status', 12)->nullable()->index('status');
            $table->mediumInteger('priority')->default(0);
            $table->timestamp('scheduled_at')->nullable();
            $table->timestamp('processed_at')->nullable();
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
            $table->integer('in_progress')->nullable();
            $table->integer('reschedule_count')->default(0);
            $table->longText('meta')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_scheduled_tasks');
    }
}
