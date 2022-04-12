<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetDynamicSegmentFiltersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_dynamic_segment_filters', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('segment_id')->index('segment_id');
            $table->timestamps();
            $table->longblob('filter_data')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_dynamic_segment_filters');
    }
}
