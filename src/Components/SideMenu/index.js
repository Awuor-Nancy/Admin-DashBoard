import { AppstoreAddOutlined, PoweroffOutlined, ShoppingCartOutlined, StockOutlined, UnorderedListOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "antd";

function SideMenu(params) {
    return (
        <div className="SideMenu">
            <Menu items={[
                {
                    label: "Dashboard",
                    key: "/",
                    icon: <AppstoreAddOutlined />
                },
                {
                    label: "Inventory",
                    key: "/inventory",
                    icon: <StockOutlined />
                    
                },
                {
                    label: "Orders",
                    key: "/orders",
                    icon: <ShoppingCartOutlined />
                },
                {
                    label: "Customers",
                    key: "/customers",
                    icon: <UnorderedListOutlined />
                },
                 {
                    label: "User-profile",
                     key: "/user-profile",
                    icon: <UserOutlined />
                },
                {
                    label: "SignOut",
                    key: "/signout",
                    icon: <PoweroffOutlined />,
                    danger: true
                }

            ]}>
            </Menu>
        </div >
    )
}
export default SideMenu;