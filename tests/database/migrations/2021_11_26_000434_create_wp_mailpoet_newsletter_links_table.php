<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetNewsletterLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_newsletter_links', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('newsletter_id')->index('newsletter_id');
            $table->unsignedInteger('queue_id')->index('queue_id');
            $table->string('url', 2083);
            $table->string('hash', 20);
            $table->timestamps();
            
            $table->index(['url`(100'], 'url');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_newsletter_links');
    }
}
