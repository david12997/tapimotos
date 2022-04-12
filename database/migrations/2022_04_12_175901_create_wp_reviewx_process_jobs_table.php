<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpReviewxProcessJobsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_reviewx_process_jobs', function (Blueprint $table) {
            $table->integer('id')->primary();
            $table->string('process_name', 20);
            $table->integer('process_meta');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_reviewx_process_jobs');
    }
}
