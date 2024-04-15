import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Space, Typography, Statistic } from "antd";

function Dashboard() {
    return (
        <div>
            <Typography.Title>Dashboard</Typography.Title>
            <Space>
                <Card>
                    <ShoppingCartOutlined />
                    <Statistic title= "Total Orders" value={7532} />
                </Card>
            </Space>
        </div>
    ) 
}
export default Dashboard;