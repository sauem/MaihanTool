import React, {useEffect} from "react";
import BreadPath from "../../common/BreadPath";
import {Card, Select, Table, Tabs} from "antd";

const HomePage = () => {
    useEffect(() => {
        document.title = "Trang chủ";
    }, [])
    return (
        <Card>
            <Tabs defaultActiveKey={"1"}>
                <Tabs.TabPane tabKey={"1"} tab={"Export"}>
                    <Select>

                    </Select>
                </Tabs.TabPane>
            </Tabs>
        </Card>
    )
}
export default HomePage
