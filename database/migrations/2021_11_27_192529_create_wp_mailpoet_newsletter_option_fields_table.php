<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetNewsletterOptionFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_newsletter_option_fields', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 90);
            $table->string('newsletter_type', 90);
            $table->timestamps();
            
            $table->unique(['newsletter_type', 'name'], 'name_newsletter_type');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_newsletter_option_fields');
    }
}
