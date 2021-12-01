<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetNewsletterTemplatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_newsletter_templates', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('newsletter_id')->nullable()->default(0);
            $table->string('name', 250);
            $table->string('categories', 250)->default('[]');
            $table->string('description')->default('');
            $table->longText('body')->nullable();
            $table->longText('thumbnail')->nullable();
            $table->boolean('readonly')->nullable()->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_newsletter_templates');
    }
}
