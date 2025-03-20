<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up() 
    {
        Schema::create('allProducts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->decimal('price', 10, 2);
            $table->decimal('discount_price', 10, 2)->nullable();
            $table->integer('stock');
            $table->string('category');
            $table->string('brand')->nullable();
            $table->string('color')->nullable();
            $table->enum('availability', ['in_stock', 'out_of_stock', 'pre_order']);
            $table->text('description')->nullable();
            $table->string('image1')->nullable();
            $table->string('image2')->nullable();
            $table->string('image3')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('allProducts');
    }
};