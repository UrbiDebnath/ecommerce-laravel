<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
       // Show the Add Product Form
    public function create() {
        return view('pages.addProduct');
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'price' => 'required|numeric',
            'discount_price' => 'nullable|numeric',
            'stock' => 'required|integer',
            'category' => 'required|string',
            'brand' => 'nullable|string',
            'color' => 'nullable|string',
            'availability' => 'required',
            'description' => 'nullable|string',
            'images1' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'images2' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'images3' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Handling Image Uploads
        $image1 = $request->file('images1') ? $request->file('images1')->store('products', 'public') : null;
        $image2 = $request->file('images2') ? $request->file('images2')->store('products', 'public') : null;
        $image3 = $request->file('images3') ? $request->file('images3')->store('products', 'public') : null;

        // Create Product
        Product::create([
            'title' => $request->title,
            'price' => $request->price,
            'discount_price' => $request->discount_price,
            'stock' => $request->stock,
            'category' => $request->category,
            'brand' => $request->brand,
            'color' => $request->color,
            'availability' => $request->availability,
            'description' => $request->description,
            'image1' => $image1,
            'image2' => $image2,
            'image3' => $image3,
        ]);

        return redirect()->route('addProduct')->with('success', 'Product added successfully!');
    }
    // Show Products in Laravel Blade (for /products)
    public function showProducts()
    {
        $products = Product::all();
        return view('pages.products', compact('products'));
    }
     // Fetch Products as JSON for React (for /api/products)
     public function getProducts()
     {
         return response()->json(Product::all());
     }
}
