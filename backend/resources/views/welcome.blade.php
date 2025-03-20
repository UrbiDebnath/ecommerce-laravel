<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Backend</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="grid grid-cols-6 h-screen">
        <!-- Sidebar -->
        <div class="col-span-1 bg-blue-900 text-white p-5">
            <h2 class="text-2xl font-bold mb-4">Menu</h2>
            <ul class="space-y-2">
                <li>
                    <a href="{{ url('/home') }}" 
                       class="block py-2 px-3 rounded {{ Request::is('home') ? 'bg-blue-700 text-white' : 'hover:bg-blue-600' }}">
                        Home
                    </a>
                </li>
                <li>
                    <a href="{{ url('/addProduct') }}" 
                       class="block py-2 px-3 rounded {{ Request::is('addProduct') ? 'bg-blue-700 text-white' : 'hover:bg-blue-600' }}">
                        Add Product
                    </a>
                </li>
                <li>
                    <a href="{{ route('products.list') }}" 
                       class="block py-2 px-3 rounded {{ Request::is('products') ? 'bg-blue-700 text-white' : 'hover:bg-blue-600' }}">
                        Product List
                    </a>
                </li>
                <li>
                    <a href="{{ url('/addOfferImage') }}" 
                       class="block py-2 px-3 rounded {{ Request::is('addOfferImage') ? 'bg-blue-700 text-white' : 'hover:bg-blue-600' }}">
                        Add Offer
                    </a>
                </li>
                <li>
                    <a href="{{ url('/addCategory') }}" 
                       class="block py-2 px-3 rounded {{ Request::is('addCategory') ? 'bg-blue-700 text-white' : 'hover:bg-blue-600' }}">
                        Add Category
                    </a>
                </li>
            </ul>
        </div>

        <!-- Main Content -->
        <div class="col-span-5 p-5">
            <div class="p-6 bg-white shadow-md rounded-lg">
                @yield('content') 
            </div>
        </div>
    </div>
</body>
</html>