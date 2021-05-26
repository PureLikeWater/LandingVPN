import styles from "./SubscribeContainer.module.css";

const SubscribeContainer = () => {
    return (
        <div className={styles.subscContainer}>
            <div className={styles.textContainer}>
                <div>Subscribe Now for Get Special Features!</div>
                <div>Let's subscribe with us and find the fun.</div>
            </div>

            <div className={styles.buttonContainer}>
                <div className={styles.Button}>Subscribe Now</div>
                <div className={styles.ShadowButton}></div>
            </div>

        </div>
    );
}
export default SubscribeContainer;