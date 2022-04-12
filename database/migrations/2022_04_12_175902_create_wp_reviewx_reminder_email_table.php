<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpReviewxReminderEmailTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_reviewx_reminder_email', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->integer('order_id');
            $table->string('customer_email', 100);
            $table->integer('order_items');
            $table->string('order_status', 20);
            $table->date('order_date');
            $table->string('status', 50);
            $table->integer('max_delivery');
            $table->integer('total_delivery')->default(0);
            $table->text('processed_email')->nullable();
            $table->timestamp('scheduled_at')->default('current_timestamp()');
            $table->integer('is_subscribe')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_reviewx_reminder_email');
    }
}
