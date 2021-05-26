import ill from "./../../images/Illustr.png";
import ok from "./../../images/circleOK.png";

import styles from "./InfoFeatures.module.css";

const InfoFeatures = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={ill} alt="" />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.f}>
                    We Provide Many Features You Can Use
                    </div>
                <div className={styles.s}>
                    You can explore the features that we provide with fun and have their own functions each feature.
                    </div>
                <div className={styles.ulContainer}>
                    <div>
                        <span><img src={ok} alt="" /></span>
                        <span>Powerfull online protection.</span>
                    </div>
                    <div>
                        <span><img src={ok} alt="" /></span>
                        <span>Internet without borders.</span>
                    </div>
                    <div>
                        <span><img src={ok} alt="" /></span>
                        <span>Supercharged VPN</span>
                    </div>
                    <div>
                        <span><img src={ok} alt="" /></span>
                        <span>No specific time limits.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default InfoFeatures;