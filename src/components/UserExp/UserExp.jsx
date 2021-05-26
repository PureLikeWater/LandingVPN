import React from 'react';
import styles from "./UserExp.module.css";
import Swiper from "react-id-swiper";
import { connect } from 'react-redux';
import star from "./../../images/Star.png";

const Slide = (props) => {
    return (
        <div className={styles.feedback}>
            <div className={styles.userInfo}>
                <div><img src={props.user.photo} alt="" /></div>
                <div>
                    <div>{props.user.name}</div>
                    <div>{props.user.city}, {props.user.country}</div>
                </div>
                <div>
                    <span>{props.user.rating}</span>
                    <span><img src={star} alt="" /></span>
                </div>
            </div>
            <div>{props.user.feedback}</div>
        </div>
    );

}

const Slides = (props) => {
    
    return (
        <div className={styles.feedbackContainer}>
            {

                props.users.map((user, id) => (
                    <div className={styles.slideContainer} key={id}>
                        <Slide key={id} user={user} />
                    </div>

                ))
            }
        </div>
    );
}

const UsersExp = (props) => {




    const params = {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    }

    return (
        <Swiper {...params}>
            <Slides users={props.users} />
            {/* {

                props.users.map((user, id) => (
                    <div className={styles.slideContainer} key={id}>
                        <Slide key={id} user={user} />
                    </div>

                ))
            } */}
        </Swiper>


    );

}

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}
export default connect(mapStateToProps, null)(UsersExp);