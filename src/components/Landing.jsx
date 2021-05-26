import Header from "./Header/Header";
import Welcome from "./Welcome/Welcome";
import AboutUs from "./AboutUs/AboutUs";
import InfoFeatures from "./InfoFeatures/InfoFeatures";
import Plans from "./Plans/Palns";
import MapsVPN from "./MAPSVPN/MapsVPN";
import Companies from "./Companies/Companies";

import styles from "./Styles.module.css";
import Footer from "./Footer/Footer";
import SubscribeContainer from "./SubscribeContainer/SubscribeContainer";
import UsersExp from "./UserExp/UserExp";



const Landing = () => {
    return (
        <div>
            <Header />
            <Welcome />
            <AboutUs />
            <InfoFeatures />
            <Plans />
            <MapsVPN />
            <Companies />
            <div className={styles.container}>
                <div>Trusted by Thousands of Happy Customer</div>
                <div>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</div>
                <div className={styles.prob}>
                    <UsersExp />
                </div>
                <div></div>
            </div>

            <SubscribeContainer />
            <Footer />
            
        </div>
    );
}

export default Landing;