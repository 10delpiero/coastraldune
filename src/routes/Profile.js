import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { authService } from "../fbase";
import icon8 from "../components/icons/icon8.jpg";

export default ({ refreshUser, userObj }) => {
    const history = useHistory();
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const onLogOutClick = () => {
        authService.signOut();
        history.push("/");
};
    const onChange = (event) => {
        const {
          target: { value },
        } = event;
        setNewDisplayName(value);
      };
      const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
          await userObj.updateProfile({
            displayName: newDisplayName,
          });
          refreshUser();
          history.push("/");
        }
      };

    return(
    <div className="container">
      <div className="pageTitleBack">
        <div className="pageTitle">
            <div className="in">
                <div style={{float: "left"}}><img width="100px" height="100px" src={icon8}></img></div>
                <div style={{float: "left", textAlign:"center", marginTop:"40px"}}>나의 프로필</div>
            </div>
        </div>
      </div>
      <form onSubmit={onSubmit} className="profileForm">        
      <input
          onChange={onChange}
          type="text"
          autoFocus
          placeholder="프로필을 적어주세요."
          value={newDisplayName}
          className="formInput"
        />
        <input
          type="submit"
          value="프로필 바꾸기"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />

      </form>
      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        로그아웃
      </span>
    </div>
    );
};