<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OfferController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoryController;

// Redirect root to home
Route::get('/', function () {
    return view('pages.home'); 
})->name('home');
Route::get('/home', function () {
    return view('pages.home'); 
})->name('home');

// Show Add Product Form
Route::get('/addProduct', [ProductController::class, 'create'])->name('addProduct');

// // Store Product Data
Route::post('/addProduct', [ProductController::class, 'store'])->name('product.store');
// // Show Products (Blade)
Route::get('/products', [ProductController::class, 'showProducts'])->name('products.list');


// // Fetch Products as JSON (for React)
Route::get('/api/products', [ProductController::class, 'getProducts']); 


Route::get('/addOfferImage', [OfferController::class, 'createOffer'])->name('addOfferImage');
Route::post('/addOfferImage', [OfferController::class, 'storeOffer'])->name('offerImage.store');
Route::get('/api/offerImage', [OfferController::class, 'getOfferImage']);

Route::get('/addCategory', [CategoryController::class, 'create'])->name('addCategory');
Route::post('/addCategory', [CategoryController::class, 'store'])->name('category.store');
Route::get('/api/category', [CategoryController::class, 'getCategory']);

// Dynamic Page Handling
Route::get('/{page}', function ($page) {
    if (view()->exists("pages.$page")) {
        return view('welcome', ['page' => $page]);
    }
    abort(404);
});