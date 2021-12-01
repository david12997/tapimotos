<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWcAdminNoteActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_wc_admin_note_actions', function (Blueprint $table) {
            $table->bigIncrements('action_id');
            $table->unsignedBigInteger('note_id')->index('note_id');
            $table->string('name');
            $table->string('label');
            $table->longText('query');
            $table->string('status');
            $table->boolean('is_primary')->default(0);
            $table->string('actioned_text');
            $table->string('nonce_action')->nullable();
            $table->string('nonce_name')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_wc_admin_note_actions');
    }
}
