<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetSegmentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_segments', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 90)->unique('name');
            $table->string('type', 90)->default('default');
            $table->string('description', 250)->default('');
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
            $table->float('average_engagement_score')->unsigned()->nullable();
            $table->timestamp('average_engagement_score_updated_at')->nullable()->index('average_engagement_score_updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_segments');
    }
}
