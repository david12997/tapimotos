<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetMappingToExternalEntitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_mapping_to_external_entities', function (Blueprint $table) {
            $table->unsignedInteger('old_id');
            $table->string('type', 50);
            $table->unsignedInteger('new_id')->index('new_id');
            $table->timestamp('created_at')->default('current_timestamp()');
            
            $table->primary(['old_id', 'type']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_mapping_to_external_entities');
    }
}
