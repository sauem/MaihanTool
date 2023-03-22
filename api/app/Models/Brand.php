<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    protected $table = 'manufacturer';

    public function products(){
        return $this->hasMany(Product::class, 'idmanufacturer', 'idmanufacturer')
            ->where('pshow', '=', 0);
    }
}
