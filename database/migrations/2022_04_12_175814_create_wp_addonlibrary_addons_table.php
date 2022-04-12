<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpAddonlibraryAddonsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_addonlibrary_addons', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->string('title')->nullable();
            $table->string('name', 128)->nullable();
            $table->string('alias', 128)->nullable();
            $table->string('addontype', 128)->nullable();
            $table->text('description')->nullable();
            $table->integer('ordering');
            $table->mediumText('templates')->nullable();
            $table->mediumText('config')->nullable();
            $table->integer('catid')->nullable();
            $table->boolean('is_active')->nullable();
            $table->text('test_slot1')->nullable();
            $table->text('test_slot2')->nullable();
            $table->text('test_slot3')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_addonlibrary_addons');
    }
}
