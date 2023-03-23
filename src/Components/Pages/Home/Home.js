import React from 'react'
import './Home.css'
import { Link } from "react-router-dom"
import { useRecoilState } from "recoil";
import { Data, Data2, Data3 } from '../../Atom/Atom';
import { useState } from "react";

const Home = () => {

    const [show, setShow] = useState(false);
    const [data, setData] = useRecoilState(Data);
    const [sub, setSub] = useRecoilState(Data2);
    const [sub1, setSub2] = useRecoilState(Data3);



    return (
        <div className="HomeContainer">
            <img className="HomeImage" src="http://trumpwallpapers.com/wp-content/uploads/Workout-Wallpaper-03-1920-x-1080.jpg" alt="description" />
            <div className="HomeImageText">
                "Take care of your <span style={{ color: 'red' }}>body</span>. It's the only place you have to  <span style={{ color: 'red' }}>live</span>."
            </div>
            {sub1 ? (
                <>
                    {" "}
                    <Link style={{ textDecoration: 'none' }} className="HomeGo2ActivityButton" to="/activity1">
                        <span>Activity</span>{" "}
                    </Link>{" "}

                </>
            ) : (
                <>
                    {sub ? (
                        <>
                            <Link style={{ textDecoration: 'none' }} className="HomeGo2ActivityButton" to="/activity">
                                <span>Activity</span>
                            </Link>{" "}

                        </>
                    ) : (
                        <>
                            {data ? (
                                <>
                                    <Link to="/aboutus">
                                        <button className="HomeGetStartedButton">
                                            Get Started
                                        </button>
                                    </Link>{" "}

                                </>
                            ) : (
                                <>
                                    {show ? (
                                        <>
                                            <Link to="/register">
                                                {" "}
                                                <button className="HomeRegisterButton">
                                                    Register
                                                </button>
                                            </Link>
                                            <Link to="/login">
                                                {" "}
                                                <button className="HomeLoginButton">Login</button>
                                            </Link>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => setShow(true)}
                                            className="HomeJoinUsButton"
                                        >
                                            Join Us
                                        </button>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default Home