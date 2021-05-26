import netflix from "./../../images/Netflix.png";
import reddit from "./../../images/reddit.png";
import amazon from "./../../images/amazon.png";
import discord from "./../../images/discord.png";
import spotify from "./../../images/spotify.png";

import styles from "./Companies.module.css";

const Companies = () => {
    return (
        <div className={styles.container}>
                <div className={styles.netflix}>
                    <img src={netflix} alt="" />
                </div>
                <div><img src={reddit} alt="" /></div>
                <div><img src={amazon} alt="" /></div>
                <div><img src={discord} alt="" /></div>
                <div><img src={spotify} alt="" /></div>
            </div>
    );
}
export default Companies;