<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function create() {
        return view('pages.addCategory');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048',
        ]);

        // Handle Image Upload
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('uploads', 'public');
        }

        // Store Data
        Category::create([
            'title' => $request->title,
            'category' => $request->category,
            'image' => $imagePath ?? null,
        ]);
        return redirect()->route('addCategory')->with('success', 'category added successfully!');
    }

    public function index()
    {
        return response()->json(Category::all(), 200);
    }

    public function getCategory()
    {
        return response()->json(Category::all());
    } 
}