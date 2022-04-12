<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpWcCustomerLookupTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_wc_customer_lookup', function (Blueprint $table) {
            $table->bigIncrements('customer_id');
            $table->unsignedBigInteger('user_id')->nullable()->unique('user_id');
            $table->string('username', 60)->default('');
            $table->string('first_name');
            $table->string('last_name');
            $table->string('email', 100)->nullable()->index('email');
            $table->timestamp('date_last_active')->nullable();
            $table->timestamp('date_registered')->nullable();
            $table->char('country', 2)->default('');
            $table->string('postcode', 20)->default('');
            $table->string('city', 100)->default('');
            $table->string('state', 100)->default('');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_wc_customer_lookup');
    }
}
