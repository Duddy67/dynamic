<?php namespace Codalia\Bookend\Updates;

use Schema;
use October\Rain\Database\Schema\Blueprint;
use October\Rain\Database\Updates\Migration;

class CreatePublicationsTable extends Migration
{
    public function up()
    {
        Schema::create('codalia_bookend_publications', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->integer('id');
	    $table->integer('book_id')->unsigned()->nullable()->index();
	    $table->string('editor')->nullable();
	    $table->string('standard')->nullable();
	    $table->string('translations')->nullable();
	    $table->char('version', 15)->nullable();
	    $table->boolean('ebook')->nullable();
	    $table->timestamp('release_date')->nullable();
	    $table->integer('category_id')->unsigned()->nullable();
	    $table->integer('ordering')->unsigned();
        });
    }

    public function down()
    {
        Schema::dropIfExists('codalia_bookend_publications');
    }
}
