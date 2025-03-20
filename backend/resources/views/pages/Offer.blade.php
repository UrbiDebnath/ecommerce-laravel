@extends('welcome')

@section('content')
    <div class="max-w-lg mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
        <h1 class="text-3xl font-bold text-center">Add Offer Image for Slider</h1>
        <p class="text-center text-gray-600 mt-2">Fill out the form below to add a new product.</p>
        
        <form action="{{ route('offerImage.store') }}"  method="POST" enctype="multipart/form-data" class="mt-6">
            @csrf
            
            <!-- ID -->
            <div class="mb-4">
                <label for="id" class="block text-gray-700 font-semibold">Product Category</label>
                <input type="text" id="id" name="category" class="w-full mt-2 p-2 border rounded-lg focus:ring focus:ring-blue-300" required>
            </div>
 
            <!-- Image -->
            <div class="mb-4">
                <label for="image" class="block text-gray-700 font-semibold">Upload Image</label>
                <input type="file" id="image" name="image" class="w-full mt-2 p-2 border rounded-lg focus:ring focus:ring-blue-300">
            </div>

            <!-- Submit Button -->
            <div class="text-center">
                <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Submit</button>
            </div>
        </form>
    </div>
@endsection