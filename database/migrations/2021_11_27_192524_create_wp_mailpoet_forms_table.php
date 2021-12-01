<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_forms', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 90);
            $table->string('status', 20)->default('enabled');
            $table->longText('body')->nullable();
            $table->longText('settings')->nullable();
            $table->longText('styles')->nullable();
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_forms');
    }
}
