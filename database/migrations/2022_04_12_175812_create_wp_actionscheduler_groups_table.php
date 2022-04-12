<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpActionschedulerGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_actionscheduler_groups', function (Blueprint $table) {
            $table->bigIncrements('group_id');
            $table->string('slug');
            
            $table->index(['slug`(191'], 'slug');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_actionscheduler_groups');
    }
}
