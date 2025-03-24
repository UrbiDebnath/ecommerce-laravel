<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Product extends Model
{
    use HasFactory;

    protected $table = 'allproducts';
    protected $fillable = [
        'title', 'price', 'discount_price', 'stock', 'category', 'brand', 
        'color', 'availability', 'description', 'image1', 'image2', 'image3'
    ];
}