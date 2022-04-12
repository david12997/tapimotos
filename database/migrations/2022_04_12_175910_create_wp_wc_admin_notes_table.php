<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWcAdminNotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_wc_admin_notes', function (Blueprint $table) {
            $table->bigIncrements('note_id');
            $table->string('name');
            $table->string('type', 20);
            $table->string('locale', 20);
            $table->longText('title');
            $table->longText('content');
            $table->longText('content_data')->nullable();
            $table->string('status', 200);
            $table->string('source', 200);
            $table->dateTime('date_created')->default('0000-00-00 00:00:00');
            $table->dateTime('date_reminder')->nullable();
            $table->boolean('is_snoozable')->default(0);
            $table->string('layout', 20)->default('');
            $table->string('image', 200)->nullable();
            $table->boolean('is_deleted')->default(0);
            $table->string('icon', 200)->default('info');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_wc_admin_notes');
    }
}
