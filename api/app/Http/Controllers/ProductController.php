<?php

namespace App\Http\Controllers;

use App\Export\ProductExport;
use App\Models\Brand;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class ProductController extends Controller
{
    public function export(Request $request)
    {
        $bands = Brand::query()->select(['idmanufacturer', 'manufacturer_name'])->get()->toArray();
        return (new ProductExport($bands))->download('brandExport.xlsx');
    }

}
