<?php

namespace App\Export;

use Illuminate\Support\Arr;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class ProductExport implements WithMultipleSheets
{
    use Exportable;

    private $brands;

    public function __construct(array $brands)
    {
        $this->brands = $brands;
    }

    public function sheets(): array
    {
        $sheets = [];
        foreach ($this->brands as $brand) {
            $brandId = Arr::get($brand, 'idmanufacturer');
            $name = Arr::get($brand, 'manufacturer_name');
            $sheets[] = new ProductSheet($brandId, $name);
        }

        return ['No brand'];
    }
}
