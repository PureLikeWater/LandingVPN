import styles from './Header.module.css'
import logo from './../../images/Logo.png';
const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}><img src={logo} alt="" /></div>
            <div className={styles.nav}>
                <div>About</div>
                <div>Features</div>
                <div>Pricing</div>
                <div>Testimonails</div>
                <div>Help</div>
            </div>
            <div className={styles.sign}>
                <div>Sign In</div>
                <div>Sign Up</div>
            </div>
        </div>
    );
}
export default Header;