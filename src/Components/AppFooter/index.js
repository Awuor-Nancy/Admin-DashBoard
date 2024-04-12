import { HeatMapOutlined, HomeOutlined, LayoutOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Typography } from "antd";

function AppFooter(params) {
    return (
        <div className="AppFooter">
            <PhoneOutlined />
            <Typography.Link 
            href="tel: +254742507531">+254 743507531</Typography.Link>

            <HomeOutlined />
            <Typography.Link href="address: 616 Korongo Rd.">Address</Typography.Link>

            <LayoutOutlined />
            <Typography.Link href="Terms of Use:www. ">Terms of Use</Typography.Link>

            <MailOutlined />
            <Typography.Link href="tel: www@gmail.com">Email Us</Typography.Link>
        </div>
  )  
}
export default AppFooter;