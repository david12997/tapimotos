<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetNewsletterOptionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_newsletter_option', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('newsletter_id');
            $table->unsignedInteger('option_field_id');
            $table->longText('value')->nullable();
            $table->timestamps();
            
            $table->unique(['newsletter_id', 'option_field_id'], 'newsletter_id_option_field_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_newsletter_option');
    }
}
