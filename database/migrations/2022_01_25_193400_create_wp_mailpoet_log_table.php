<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_log', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->integer('level')->nullable();
            $table->longText('message')->nullable();
            $table->timestamp('created_at')->default('current_timestamp()');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_log');
    }
}
