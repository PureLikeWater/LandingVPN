import user from "./../../images/user.png";
import location from "./../../images/location.png";
import Server from "./../../images/Server.png";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.blocks}>
                <span><img src={user} alt="" /></span>
                <span>
                    <div>90+</div>
                    <div>Users</div>
                </span>
            </div>
            <div className={styles.blocks}>
                <span><img src={location} alt="" /></span>
                <span>
                    <div>30+</div>
                    <div>Location</div>
                </span>
            </div>
            <div className={styles.blocks}>
                <span><img src={Server} alt="" /></span>
                <span>
                    <div>50+</div>
                    <div>Servers</div>
                </span>
            </div>
        </div>
    );
}
export default AboutUs;