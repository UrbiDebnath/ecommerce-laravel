@extends('welcome')

@section('content')
<div class="max-w-3xl mx-auto mt-4 bg-gray-300 p-4 shadow-md rounded-lg">
    <h2 class="text-2xl font-bold text-center mb-6">Add Offer</h2>
    
    <form action="{{ route('offer.store') }}"  method="POST" enctype="multipart/form-data" class="space-y-4">
        @csrf
        <!-- Title -->
        <div>
            <label class="block font-medium">Title</label>
            <input type="text" name="title" class="w-full px-4 py-2 border rounded-md" required>
        </div>

        <!-- Price -->
        <div>
            <label class="block font-medium">Discount</label>
            <input type="number" name="discount" class="w-full px-4 py-2 border rounded-md" required>
        </div>

        
        <!-- Images -->
        <div>
            <label class="block font-medium">Upload Image</label>
            <input type="file" name="image" multiple class="w-full px-4 py-2 border rounded-md">
        </div>
        

        <!-- Submit Button -->
        <div class="text-center">
            <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Add Offer
            </button>
        </div>
    </form>
</div>
@endsection