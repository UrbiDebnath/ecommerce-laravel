@extends('welcome')

@section('content')
<h1 class="text-3xl font-bold text-center mb-6">Add Category</h1>

@if(session('success'))
    <div class="bg-green-500 text-white text-center p-3 mb-4 rounded">
        {{ session('success') }}
    </div>
@endif

<div class="max-w-lg mx-auto bg-white p-6 rounded shadow">
    <form action="{{ route('category.store') }}" method="POST" enctype="multipart/form-data">
        @csrf

        <div class="mb-4">
            <label for="title" class="block text-gray-700 font-bold mb-2">Title:</label>
            <input type="text" id="title" name="title" class="w-full p-2 border rounded" required>
            @error('title')
                <p class="text-red-500">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-4">
            <label for="category" class="block text-gray-700 font-bold mb-2">Category:</label>
            <input type="text" id="category" name="category" class="w-full p-2 border rounded" required>
            @error('category')
                <p class="text-red-500">{{ $message }}</p>
            @enderror
        </div>

        <div class="mb-4">
            <label for="image" class="block text-gray-700 font-bold mb-2">Image:</label>
            <input type="file" id="image" name="image" class="w-full p-2 border rounded" required>
            @error('image')
                <p class="text-red-500">{{ $message }}</p>
            @enderror
        </div>

        <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Add Post</button>
    </form>
</div>
@endsection