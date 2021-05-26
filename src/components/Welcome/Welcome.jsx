import img_1 from "./../../images/Illustration_1.png"
import styles from "./Welcome.module.css";

const Welcome = () => {
    return (
        <div className={styles.container}>
                <div className={styles.textContainer}>
                    <div>
                    Want anything to be easy with
                    </div>
                    <div>
                    Provide a network for all your needs with ease and fun using 
                    <span className={styles.spanText}> LaslesVPN </span> 
                    discover interesting features from us.
                    </div>
                    <div>Get Started</div>
                    <div></div>
                </div>
                <div><img src={img_1} alt=""/> </div>
            </div>
    );
}

export default Welcome;