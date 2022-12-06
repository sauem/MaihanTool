import React from "react";
import {Button, Space} from "antd";

const PopupFooter = ({onClose, onLoad, showConfirm = true, formId}: any) => {
    return (
        <Space>
            <small>* Thông tin bắt buộc</small>
            <Button
                type={`default`}
                onClick={onClose}>Hủy</Button>
            {showConfirm && <Button loading={onLoad} type={`primary`} htmlType={`submit`}
                                    form={formId}>Lưu</Button>}
        </Space>
    )
}
export default PopupFooter;
