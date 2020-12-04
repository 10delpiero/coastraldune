import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { authService, firebaseInstance } from "../fbase";
import AuthForm from "../components/AuthForm";
import Leaves from "../components/leaves.jpg"

const Auth= () => {
    const onSocialClick = async (event) => {
        const {
            target: { name },
        } = event;
        let provider;
        if(name === "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if (name === "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        await authService.signInWithPopup(provider);
        }; 
    return (
        <div>
            <div className="titleback">
                <div className="titleImage"><img width="50px" height="70px" src={Leaves}></img></div>
                <div className="title">
                    <p>해안사구</p>
                    <p>식물</p>
                </div>
                <div className="title-sub">이야기</div>
            </div>
        <div className="authContainer">
        <AuthForm />
        <div className="authBtns">
        <button onClick={onSocialClick} name="google" className="authBtn">
          구글로 가입하기 <FontAwesomeIcon icon={faGoogle} /> </button>
        <button onClick={onSocialClick} name="github" className="authBtn">
          깃허브로 가입하기 <FontAwesomeIcon icon={faGithub} /> </button>
        </div>
        </div>
    </div>
    );
};

export default Auth;