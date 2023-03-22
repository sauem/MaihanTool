<?php

namespace App\Http\Controllers;

use App\Export\ProductExport;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use League\Flysystem\Config;

class ProductController extends Controller
{
    public function export(Request $request)
    {
        $bands = Brand::query()->select(['idmanufacturer', 'manufacturer_name'])
            ->withCount(['products'])
            ->get()
            ->where('products_count', '>', 0)
            ->toArray();

        return (new ProductExport($bands))->download('brandExport.xlsx');
    }

}
