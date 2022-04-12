<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpMailpoetSubscribersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_mailpoet_subscribers', function (Blueprint $table) {
            $table->increments('id');
            $table->bigInteger('wp_user_id')->nullable()->index('wp_user_id');
            $table->integer('is_woocommerce_user')->default(0);
            $table->string('first_name')->default('');
            $table->string('last_name')->default('');
            $table->string('email', 150)->unique('email');
            $table->string('status', 12)->default('unconfirmed');
            $table->string('subscribed_ip', 45)->nullable();
            $table->string('confirmed_ip', 45)->nullable();
            $table->timestamp('confirmed_at')->nullable();
            $table->timestamp('last_subscribed_at')->nullable()->index('last_subscribed_at');
            $table->timestamps();
            $table->timestamp('deleted_at')->nullable();
            $table->longText('unconfirmed_data')->nullable();
            $table->enum('source', ['form', 'imported', 'administrator', 'api', 'wordpress_user', 'woocommerce_user', 'woocommerce_checkout', 'unknown'])->nullable()->default('unknown');
            $table->unsignedInteger('count_confirmations')->default(0);
            $table->char('unsubscribe_token', 15)->nullable()->unique('unsubscribe_token');
            $table->char('link_token', 32)->nullable()->index('link_token');
            $table->float('engagement_score')->unsigned()->nullable();
            $table->timestamp('engagement_score_updated_at')->nullable()->index('engagement_score_updated_at');
            $table->timestamp('last_engagement_at')->nullable();
            
            $table->index(['status', 'deleted_at'], 'status_deleted_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_mailpoet_subscribers');
    }
}
