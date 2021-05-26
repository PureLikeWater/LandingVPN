import free from "./../../images/Free.png";
import standard from "./../../images/Standard.png";
import premium from "./../../images/Premium.png";
import ok from "./../../images/ok_green.png";

import styles from "./Plans.module.css";

const Plans = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer_1}>Choose Your Plan</div>
            <div className={styles.textContainer_2}>Let's choose the package that is best for you and explore it happily and cheerfully.</div>
            <div className={styles.containerPlans}>
                <div className={styles.free}>
                    <div className={styles.picture}><img src={free} alt="" /></div>
                    <div className={styles.plan}>Free Plan</div>
                    <div className={styles.features}>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Unlimited Bandwitch</span>

                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Encrypted Connection</span>
                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>No Traffic Logs</span>
                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Works on All Devices</span>
                        </div>
                    </div>
                    <div className={styles.selectCost}>
                        <div className={styles.cost_free}>Free</div>
                        <div className={styles.select}>Select</div>
                    </div>

                </div>
                <div className={styles.standard}>
                    <div className={styles.picture}><img src={standard} alt="" /></div>
                    <div className={styles.plan}>Standard Plan</div>
                    <div className={styles.features}>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Unlimited Bandwitch</span>

                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Encrypted Connection</span>
                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>No Traffic Logs</span>
                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Works on All Devices</span>
                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Connect Anyware</span>
                        </div>
                    </div>
                    <div className={styles.selectCost}>
                        <div className={styles.cost_standard}>/ mo</div>
                        <div className={styles.select}>Select</div>
                    </div>

                </div>
                <div className={styles.premium}>
                    <div className={styles.picture}><img src={premium} alt="" /></div>
                    <div className={styles.plan}>Premium Plan</div>
                    <div className={styles.features}>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Unlimited Bandwitch</span>

                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Encrypted Connection</span>
                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>No Traffic Logs</span>
                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Works on All Devices</span>
                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Connect Anyware</span>
                        </div>
                        <div className={styles.features_container}>
                            <span><img src={ok} alt="" /></span>
                            <span>Get New Features</span>
                        </div>
                    </div>
                    <div className={styles.selectCost}>
                        <div className={styles.cost_premium}>/ mo</div>
                        <div className={styles.select_unusual}>Select</div>
                    </div>

                </div>
            </div>
        </div>
    );
}
export default Plans;