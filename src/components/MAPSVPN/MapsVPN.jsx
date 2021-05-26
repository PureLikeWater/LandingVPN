import mapsVPN from "./../../images/Huge_Global.png";

import styles from "./MapsVPN.module.css";

const MapsVPN = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer_1}>Huge Global Network of Fast VPN</div>
            <div className={styles.textContainer_2}>See <span>LaslesVPN</span> everywhere to make it easier for you when you move locations.</div>
            <div><img src={mapsVPN} alt="" /></div>
        </div>
    );
}

export default MapsVPN;