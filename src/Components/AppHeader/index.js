
import { BellOutlined, DashboardOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Space, Typography } from "antd";

function AppHeader() {
    return <div className="AppHeader">
        <DashboardOutlined style={{fontSize: 40, color: 'hotpink'}} />
        <Typography.Title>Admin Dashboard</Typography.Title>

        <Space>
            <Badge count={5} dot>
                <MailOutlined style={{fontSize: 25}} />
            </Badge>
            
            <Badge count={15}>
                <BellOutlined style={{ fontSize: 25 }} /></Badge>
            
             <Badge count={15} dot>
                <UserOutlined style={{ fontSize: 25 }} /></Badge>
        </Space>
    </div>
}
export default AppHeader;