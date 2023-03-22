<?php

namespace App\Export;

use App\Models\Product;
use Maatwebsite\Excel\Concerns\FromQuery;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithTitle;

class ProductSheet implements FromQuery, WithTitle, WithHeadings, WithMapping
{
    private $brandId;
    private $brandTitle;

    public function __construct($bandId, $title)
    {
        $this->brandId = $bandId;
        $this->brandTitle = $title;
    }


    public function query()
    {
        return Product::query()
            ->where('idmanufacturer', '=', $this->brandId)
            ->where('pshow', '=', 1)
            ->orderBy('idproduct', 'DESC')
            ->limit(5000);
    }

    public function title(): string
    {
        return 'Brand ' . $this->brandTitle;
    }

    public function headings(): array
    {
//        return [
//            "idproduct", "pbanner", "pname", "pname_eng", "pmodel", "pprice", "method_promotion",
//            "pprice_down", "h_start", "h_end", "time_end",
//            "amount", "pdescription", "mota_km", "pcontent", "pingredient", "puses", "pusing", "review",
//            "gallery", "p_alias", "meta_ptitle", "meta_pdescription", "meta_pkeyword",
//            "images_b", "images_s", "images_s2", "images_s3", "frame_image", "frame_status", "pro_status",
//            "psort", "cate_sort", "promotion_sort", "cate_father_sort", "manu_sort", "pshow", "phome", "pspecial",
//            "time_add", "time_modify", "pview", "idcategories", "vote_reviewcount", "vote_rating",
//            "vote_avg", "attribute", "color", "id_skin", "id_purpose", "idmanufacturer", "relationship",
//            "relationship_new", "pro_promotion", "pro_attach", "show_cate", "show_home", "status",
//            "giaychungnhan", "quycach", "xuatxu", "hansudung", "tinhtrang", "loaida", "mavach", "hottest", "promotion_tag",
//            "het_hang", "sort_top_manu", "sort_top_cate", "top_sell", "num_required", "num_random", "type_promotion",
//            "flash_sale", "flash_sale_sort", "clock_active", "clock_time", "clock_daily", "capacity", "idparent"
//        ];
        return ['Mã sản phẩm','Tên sản phẩm','Thương hiệu', 'Dung tích/Phân loại', 'Giá gốc', 'Hình ảnh'];
    }

    public function map($row): array
    {
        // $description = html_entity_decode(strip_tags($row->pdescription), ENT_QUOTES | ENT_HTML5, "UTF-8");
        // TODO: Implement map() method.
        //$hetHang = $row->het_hang == '1' ? 'Hết hàng' : ($row->het_hang == '0' ? 'Còn hàng' : 'Sắp ra mắt');
        return [
            $row->idproduct,
            $row->pname,
            $this->brandTitle,
            $row->quycach,
            $row->pprice,
            $row->images_b,
        ];
    }
}
