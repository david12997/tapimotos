<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpPageGeneratorKeywordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_page_generator_keywords', function (Blueprint $table) {
            $table->integer('keywordID')->primary();
            $table->string('keyword', 191)->unique('keyword');
            $table->string('source', 191);
            $table->text('options');
            $table->text('columns');
            $table->string('delimiter', 191);
            $table->longText('data');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_page_generator_keywords');
    }
}
