<?php

namespace App\Http\Controllers;

use App\Models\Offer;
use Illuminate\Http\Request;

class OfferController extends Controller
{
    public function createOffer(){
        return view('pages.Offer');
    }

    public function storeOffer(Request $request) {
        $request->validate([
            'category' => 'required|string|max:255',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Store the image
        $imagePath = $request->file('image')->store('offers', 'public');

        // Save to database
        Offer::create([
            'category' => $request->category,
            'image' => $imagePath,
        ]);

        return back()->with('success', 'Offer added successfully!');
    }
    public function getOfferImage()
    {
        return response()->json(Offer::all());
    }
   
}
