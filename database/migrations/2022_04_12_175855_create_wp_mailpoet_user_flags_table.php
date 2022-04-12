<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetUserFlagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_user_flags', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('user_id');
            $table->string('name', 50);
            $table->string('value')->nullable();
            $table->timestamps();
            
            $table->unique(['user_id', 'name'], 'user_id_name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_user_flags');
    }
}
