<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetNewslettersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_newsletters', function (Blueprint $table) {
            $table->increments('id');
            $table->string('hash', 150)->nullable();
            $table->unsignedInteger('parent_id')->nullable();
            $table->string('subject', 250)->default('');
            $table->string('type', 20)->default('standard');
            $table->string('sender_address', 150)->default('');
            $table->string('sender_name', 150)->default('');
            $table->string('status', 20)->default('draft');
            $table->string('reply_to_address', 150)->default('');
            $table->string('reply_to_name', 150)->default('');
            $table->string('preheader', 250)->default('');
            $table->longText('body')->nullable();
            $table->timestamp('sent_at')->nullable();
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
            $table->char('unsubscribe_token', 15)->nullable()->unique('unsubscribe_token');
            $table->string('ga_campaign', 250)->default('');
            
            $table->index(['type', 'status'], 'type_status');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_newsletters');
    }
}
