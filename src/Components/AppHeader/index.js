
import { BellOutlined, DashboardOutlined, MailOutlined } from "@ant-design/icons";
import { Badge, Space, Typography } from "antd";

function AppHeader(params) {
    return <div className="AppHeader">
        <DashboardOutlined style={{fontSize: 40, color: 'hotpink'}} />
        <Typography.Title>Admin Dashboard</Typography.Title>

        <Space>
            <Badge count={5} dot>
                <MailOutlined style={{fontSize: 20}} />
            </Badge>
            
            <Badge count={15} dot>
                <BellOutlined style={{ fontSize: 20 }} /></Badge>
        </Space>
    </div>
}
export default AppHeader;