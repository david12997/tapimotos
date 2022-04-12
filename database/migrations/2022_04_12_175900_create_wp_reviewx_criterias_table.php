<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpReviewxCriteriasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_reviewx_criterias', function (Blueprint $table) {
            $table->integer('review_id');
            $table->string('criteria_id', 20);
            $table->integer('rating');
            $table->integer('is_automated');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_reviewx_criterias');
    }
}
