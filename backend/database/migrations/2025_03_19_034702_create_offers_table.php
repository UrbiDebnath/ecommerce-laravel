<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up() {
        Schema::create('offers', function (Blueprint $table) {
            $table->id();
            $table->string('category'); // Product category
            $table->string('image'); // Image path
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('offers');
    }
};