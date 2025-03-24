@extends('welcome')

@section('content')
<div class="max-w-3xl mx-auto mt-4 bg-gray-300 p-4 shadow-md rounded-lg">
    <h2 class="text-2xl font-bold text-center mb-6">Add Product</h2>
    
    <form action="{{ route('product.store') }}"  method="POST" enctype="multipart/form-data" class="space-y-4">
        @csrf
        <!-- Title -->
        <div>
            <label class="block font-medium">Title</label>
            <input type="text" name="title" class="w-full px-4 py-2 border rounded-md" required>
        </div>

        <!-- Price -->
        <div>
            <label class="block font-medium">Price</label>
            <input type="number" name="price" class="w-full px-4 py-2 border rounded-md" required>
        </div>

        <!-- Discount Price -->
        <div>
            <label class="block font-medium">Discount Price</label>
            <input type="number" name="discount_price" class="w-full px-4 py-2 border rounded-md">
        </div>

        <!-- Stock -->
        <div>
            <label class="block font-medium">Stock</label>
            <input type="number" name="stock" class="w-full px-4 py-2 border rounded-md" required>
        </div>

        <!-- Category -->
        <div>
            <label class="block font-medium">Category</label>
            <select name="category" class="w-full px-4 py-2 border rounded-md" required>
                <option value="">Select Category</option>
                <option value="Electronic">Electronic</option>
                <option value="Home & Kitchen">Home & Kitchen</option>
                <option value="Clothing & Fashion">Clothing & Fashion</option>
                <option value="Accessories">Accessories</option>
                <option value="Beauty & Personal Care">Beauty & Personal Care</option>
                <option value="Sports & Fitness">Sports & Fitness</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Books & Stationary">Books & Stationary</option>
                <option value="Jewelry & Watches">Jewelry & Watches</option>
                <option value="Baby Product">Baby Product</option>
                <option value="Mobile & Gadgets">Mobile & Gadgets</option>
                <option value="Musical Instrument">Musical Instrument</option>

            </select>
        </div>

        <!-- Brand -->
        <div>
            <label class="block font-medium">Brand</label>
            <input type="text" name="brand" class="w-full px-4 py-2 border rounded-md">
        </div>

        <!-- Color -->
        <div>
            <label class="block font-medium">Color</label>
            <input type="text" name="color" class="w-full px-4 py-2 border rounded-md">
        </div>

        <!-- Availability -->
        <div>
            <label class="block font-medium">Availability</label>
            <select name="availability" class="w-full px-4 py-2 border rounded-md">
                <option value="in_stock">In Stock</option>
                <option value="out_of_stock">Out of Stock</option>
                <option value="pre_order">Pre Order</option>
            </select>
        </div>

        <!-- Description -->
        <div>
            <label class="block font-medium">Description</label>
            <textarea name="description" class="w-full px-4 py-2 border rounded-md" rows="3"></textarea>
        </div>

        <!-- Images -->
        <div>
            <label class="block font-medium">Upload Images 1</label>
            <input type="file" name="images1" multiple class="w-full px-4 py-2 border rounded-md">
        </div>
        <!-- Images -->
        <div>
            <label class="block font-medium">Upload Images 2</label>
            <input type="file" name="images2" multiple class="w-full px-4 py-2 border rounded-md">
        </div>
        <!-- Images -->
        <div>
            <label class="block font-medium">Upload Images 3</label>
            <input type="file" name="images3" multiple class="w-full px-4 py-2 border rounded-md">
        </div>

        <!-- Submit Button -->
        <div class="text-center">
            <button type="submit" class="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                Add Product
            </button>
        </div>
    </form>
</div>
@endsection