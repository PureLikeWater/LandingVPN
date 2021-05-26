import styles from "./Footer.module.css";

import logo from "./../../images/Logo.png";
import facebook from "./../../images/facebook.png";
import twitter from "./../../images/twitter.png";
import instagram from "./../../images/instagram.png";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.logoNets}>
                <div className={styles.logo}><img src={logo} alt="" /></div>
                <div className={styles.textFooterLogo}>
                    is a private virtual network that has unique features and has high security.
                    </div>
                <div className={styles.Nets}>
                    <div><img src={facebook} alt="" /></div>
                    <div><img src={twitter} alt="" /></div>
                    <div><img src={instagram} alt="" /></div>
                </div>
                <div className={styles.copyright}>©2020LaslesVPN</div>
            </div>
            <div className={styles.product}>
                <div>Product</div>
                <div>Download</div>
                <div>Pricing</div>
                <div>Locations</div>
                <div>Server</div>
                <div>Countries</div>
                <div>Blog</div>
            </div>
            <div className={styles.Engage}>
                <div>Engage</div>
                <div>LaslesVPN ?</div>
                <div>FAQ</div>
                <div>TUtorials</div>
                <div>AboutUs</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
            </div>
            <div className={styles.EarnMoney}>
                <div>Earn Money</div>
                <div>Affiliate</div>
                <div>Become Partner</div>
            </div>
        </div>
    );
}
export default Footer;