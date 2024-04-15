import { AppstoreAddOutlined, PoweroffOutlined, ShoppingCartOutlined, StockOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate();
    const handleClick = (item) => {
        navigate(item.key);
    }
    return (
        <div className="SideMenu">
            <Menu items={[
                {
                    label: "Dashboard",
                    key: "/",
                    icon: <AppstoreAddOutlined />,
                    onClick: handleClick
                },
                 {
                    label: "Orders",
                    key: "/orders",
                    icon: <ShoppingCartOutlined />,
                    onClick: handleClick
                },
                {
                    label: "Inventory",
                    key: "/inventory",
                    icon: <StockOutlined />,
                    onClick: handleClick
                    
                },
                {
                    label: "Customers",
                    key: "/customers",
                    icon: 
                        <UsergroupAddOutlined />,
                    onClick: handleClick
                },     
                {
                    label: "SignOut",
                    key: "/signout",
                    icon: <PoweroffOutlined />,
                    danger: true,
                    onClick: handleClick
                }
            ]}>
            </Menu>
        </div >
    )
}
export default SideMenu;