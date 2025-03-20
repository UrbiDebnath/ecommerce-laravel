@extends('welcome')

@section('content')
    <h1 class="text-2xl font-bold mb-4">All Products</h1>

    @if($products->isEmpty())
        <p>No products found.</p>
    @else
        <table class="w-full table-auto border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-100">
                    <th class="px-4 py-2 border">Title</th>
                    <th class="px-4 py-2 border">Price</th>
                    <th class="px-4 py-2 border">Discount Price</th>
                    <th class="px-4 py-2 border">Stock</th>
                    <th class="px-4 py-2 border">Category</th>
                    <th class="px-4 py-2 border">Brand</th>
                    <th class="px-4 py-2 border">Color</th>
                    <th class="px-4 py-2 border">Availability</th>
                    <th class="px-4 py-2 border">Description</th>
                    <th class="px-4 py-2 border">Images</th>
                </tr>
            </thead>
            <tbody>
                @foreach($products as $product)
                    <tr>
                        <td class="px-4 py-2 border">{{ $product->title }}</td>
                        <td class="px-4 py-2 border">${{ number_format($product->price, 2) }}</td>
                        <td class="px-4 py-2 border">
                            {{ $product->discount_price ? '$' . number_format($product->discount_price, 2) : 'N/A' }}
                        </td>
                        <td class="px-4 py-2 border">{{ $product->stock }}</td>
                        <td class="px-4 py-2 border">{{ $product->category }}</td>
                        <td class="px-4 py-2 border">{{ $product->brand ?: 'N/A' }}</td>
                        <td class="px-4 py-2 border">{{ $product->color ?: 'N/A' }}</td>
                        <td class="px-4 py-2 border">{{ ucfirst(str_replace('_', ' ', $product->availability)) }}</td>
                        <td class="px-4 py-2 border">{{ $product->description ?: 'No description' }}</td>
                        <td class="px-4 py-2 border">
                            @if($product->image1)
                                <img src="{{ asset('storage/' . $product->image1) }}" width="50" alt="Image 1">
                            @else
                                <span>No Image</span>
                            @endif
                            {{-- Add additional image checks as needed --}}
                            @if($product->image2)
                                <img src="{{ asset('storage/' . $product->image2) }}" width="50" alt="Image 2">
                            @elseif($product->image3)
                                <img src="{{ asset('storage/' . $product->image3) }}" width="50" alt="Image 3">
                            @endif
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    @endif
@endsection
