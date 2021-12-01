<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWcDownloadLogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_wc_download_log', function (Blueprint $table) {
            $table->bigIncrements('download_log_id');
            $table->dateTime('timestamp')->index('timestamp');
            $table->unsignedBigInteger('permission_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->string('user_ip_address', 100)->nullable()->default('');
            
            $table->foreign('permission_id', 'fk_wp_wc_download_log_permission_id')->references('permission_id')->on('wp_woocommerce_downloadable_product_permissions')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_wc_download_log');
    }
}
