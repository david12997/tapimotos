<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetSubscriberIpsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_subscriber_ips', function (Blueprint $table) {
            $table->string('ip', 45)->index('ip');
            $table->timestamp('created_at')->default('current_timestamp()');
            
            $table->primary(['created_at', 'ip']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_subscriber_ips');
    }
}
