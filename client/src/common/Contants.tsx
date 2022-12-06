import {Role} from "./constants/Role";

export const formDefault = {
    labelCol: {sm: 8},
    labelAlign: 'left'
}
export const TOKEN_NAME: string = "gsht_token";
export const TOKEN_EXPIRE_DAYS: number = 16;

export const ROLES = [
    {title: 'Admin', value: Role.ROLE_ADMIN},
    {title: 'Mod', value: Role.ROLE_MOD},
    {title: 'Người dùng', value: Role.ROLE_USER},
    {title: 'Đại lý', value: Role.ROLE_AGENT},
];
export const AGENT_ROLES = [
    {title: 'Đại lý', value: Role.ROLE_AGENT},
    {title: 'Người dùng', value: Role.ROLE_USER},
];

export const STATUS_ACTIVE = true;
export const STATUS_INACTIVE = false;
export const STATUS = [
    {title: 'Kích hoạt', value: STATUS_ACTIVE},
    {title: 'Ngưng hoạt động', value: STATUS_INACTIVE},
]

export const DEVICE_TYPES = [
    {title: 'Asia 03', value: 'Asia 03'},
    {title: 'Asia 05', value: 'Asia 05'},
    {title: 'Old Device 1', value: 'Old Device 1'},
    {title: 'Old Device 2', value: 'Old Device 2'},
    {title: 'Old Device 4', value: 'Old Device 4'},
]
export const SPEED_LIMIT = [
    {title: '80 km/h - Ô tô chở người đến 30 chỗ ngồi, trọng tải dưới 3.500Kg.'},
    {title: '70 km/h - Ô tô chở người trên 30 chỗ ngồi, trọng tải trên 3.500Kg.'},
    {title: '60 km/h - Ô tô buýt, ô tô sơ mi rơ moóc, ô tô chuyên dùng, xe mô tô'},
    {title: '50 km/h - Ô tô kéo rơ moóc, ô tô kéo xe khác, xe gắn máy.'},
    {title: '100 km/h - Ô tô, xe gắn máy.'},
    {title: '90 km/h - Ô tô, xe gắn máy.'},
]

export const BUSINESS_TYPE = [
    {title: 'Xe khách tuyến cố định'},
    {title: 'Vận tải hành khách bằng xe bus'},
    {title: 'Vận tải hành khách theo hợp đồng'},
    {title: 'Vận chuyển khách du lịch bằng ô tô'},
    {title: 'Vận tải hàng hóa bằng container'},
    {title: 'Xe tải - vận chuyện hàng hóa không phải container'},
];

export const rolePermission = [
    {
        key: `report`,
        title: 'Báo cáo',
        items: [
            {title: 'Báo cáo tài khoản', key: 1},
            {title: 'Xe đã gia hạn', key: 2},
            {title: 'Xe hết cước', key: 3},
            {title: 'Xe sắp hết cước', key: 4},
            {title: 'Xe bị khóa', key: 5},
        ]
    },
    {
        key: `vehicle`,
        title: 'Phương tiện',
        items: [
            {title: 'Nhóm xe', key: 1},
            {title: 'Thêm nhóm xe', key: 2},
            {title: 'Xóa nhóm xe', key: 3},
            {title: 'Thông báo nhóm', key: 4},
            {title: 'Gia hạn xe', key: 5},
            {title: 'Duyệt gia hạn', key: 6},
            {title: 'Danh sách xe', key: 8},
            {title: 'Thêm xe', key: 8},
            {title: 'Cập nhật xe', key: 9},
            {title: 'Xóa dữ liệu', key: 10},
            {title: 'Lịch sử gia hạn', key: 11},
        ]
    },
    {
        key: `account`,
        title: 'Tài khoản',
        items: [
            {title: 'Nhóm tài khoản', key: 1},
            {title: 'Danh sách tài khoản', key: 2},
            {title: 'Tạo tài khoản', key: 3},
            {title: 'Sửa tài khoản', key: 4},
            {title: 'Xóa tài khoản', key: 5},
        ]
    },
    {
        key: `system`,
        title: 'Hệ thống',
        items: [
            {title: 'Thông báo chung', key: 1},
            {title: 'Lịch sử hoạt động', key: 2}
        ]
    }
]
