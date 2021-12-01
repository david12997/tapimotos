<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWpAioseoPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wp_aioseo_posts', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('post_id')->index('ndx_aioseo_posts_post_id');
            $table->text('title')->nullable();
            $table->text('description')->nullable();
            $table->mediumText('keywords')->nullable();
            $table->longText('keyphrases')->nullable();
            $table->longText('page_analysis')->nullable();
            $table->text('canonical_url')->nullable();
            $table->text('og_title')->nullable();
            $table->text('og_description')->nullable();
            $table->string('og_object_type', 64)->nullable()->default('default');
            $table->string('og_image_type', 64)->nullable()->default('default');
            $table->text('og_image_custom_url')->nullable();
            $table->text('og_image_custom_fields')->nullable();
            $table->integer('og_custom_image_width')->nullable();
            $table->integer('og_custom_image_height')->nullable();
            $table->string('og_video')->nullable();
            $table->text('og_custom_url')->nullable();
            $table->text('og_article_section')->nullable();
            $table->text('og_article_tags')->nullable();
            $table->boolean('twitter_use_og')->nullable()->default(0);
            $table->string('twitter_card', 64)->nullable()->default('default');
            $table->string('twitter_image_type', 64)->nullable()->default('default');
            $table->text('twitter_image_custom_url')->nullable();
            $table->text('twitter_image_custom_fields')->nullable();
            $table->text('twitter_title')->nullable();
            $table->text('twitter_description')->nullable();
            $table->integer('seo_score')->default(0);
            $table->string('schema_type', 20)->nullable()->default('default');
            $table->longText('schema_type_options')->nullable();
            $table->tinyInteger('pillar_content')->nullable();
            $table->boolean('robots_default')->default(1);
            $table->boolean('robots_noindex')->default(0);
            $table->boolean('robots_noarchive')->default(0);
            $table->boolean('robots_nosnippet')->default(0);
            $table->boolean('robots_nofollow')->default(0);
            $table->boolean('robots_noimageindex')->default(0);
            $table->boolean('robots_noodp')->default(0);
            $table->boolean('robots_notranslate')->default(0);
            $table->integer('robots_max_snippet')->nullable();
            $table->integer('robots_max_videopreview')->nullable();
            $table->string('robots_max_imagepreview', 20)->nullable()->default('large');
            $table->mediumText('tabs')->nullable();
            $table->longText('images')->nullable();
            $table->dateTime('image_scan_date')->nullable();
            $table->string('priority')->nullable();
            $table->string('frequency')->nullable();
            $table->longText('videos')->nullable();
            $table->text('video_thumbnail')->nullable();
            $table->dateTime('video_scan_date')->nullable();
            $table->longText('local_seo')->nullable();
            $table->dateTime('created');
            $table->dateTime('updated');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wp_aioseo_posts');
    }
}
