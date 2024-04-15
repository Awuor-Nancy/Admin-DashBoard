import { DollarOutlined, ShoppingCartOutlined, StockOutlined, UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Card, Space, Typography, Statistic } from "antd";

function Dashboard() {
    return (
        <div>
            <Typography.Title level={3}>Dashboard</Typography.Title>
            <Space>
                <DashboardCard icon={<ShoppingCartOutlined style={{ color: "limegreen", fontSize: 60 }} />} title={"Total Orders"} value={7532} />
                <DashboardCard icon={<StockOutlined style={{ color: "lightcoral", fontSize: 60 }} />} title={"Inventory"} value={400} />
                <DashboardCard icon={<UsergroupAddOutlined style={{ color: "blue", fontSize: 60 }} />} title={"Customers"} value={5321} />
                <DashboardCard icon={<DollarOutlined style={{ color: "lightgreen", fontSize: 60 }} />} title={"Total Sales"} value={5321} />
                <DashboardCard icon={<UserOutlined style={{ color: "gold", fontSize: 60 }} />} title={"Active Users"} value={5} />

            </Space>
        </div>
    )
}

function DashboardCard({ title, value, icon }) {
    return (
        <div>
            <Card>
                <Space>
                    {icon}
                    <Statistic title={title} value={value} />
                </Space>


            </Card>

        </div>
    )
}
export default Dashboard;