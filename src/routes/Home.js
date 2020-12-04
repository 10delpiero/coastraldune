import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../components/icons/icon1.jpg"
import icon2 from "../components/icons/icon2.jpg"
import icon3 from "../components/icons/icon3.jpg"
import icon4 from "../components/icons/icon4.jpg"
import Leaves from "../components/leaves.jpg"

const Navigation = ( {userObj} ) => (
<div className="homeNav" style={{  width: "100%", height: "100%",
marginTop: "-90px",
  padding: "0px",
  border: "0px" }}>
  <div className="titleback">
    <div className="titleImage"><img width="50px" height="70px" src={Leaves}></img></div>
    <div className="title">
      <p>해안사구</p>
      <p>식물</p>
    </div>
    <div className="title-sub">이야기</div>
  </div>
  <div style={{ paddingTop: 10, textAlign: "center"}}>
    <span>
          {userObj.displayName
            ? `${userObj.displayName}님 환영합니다.`
            : "프로필"}
    </span>
  </div>
  <div>
  <nav>
  <ul>
    <div style={{display: "flex", justifyContent: "center", marginTop: 20, width: "100%"}}>
    <li>
      <Link 
        to="/diary" 
        style={{ 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin:"10px"
          }}>
        <img src={icon1} width="130px" height="200px"></img>
      </Link>
      </li>
      <li>
      <Link 
        to ="/DunesExpedition" 
        style={{ 
          margin:"10px", 
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          }}>
          <img src={icon2} width="130px" height="200px"></img>
      </Link>
      </li>
      </div>

      <div style={{ display: "flex", justifyContent: "center", marginTop: 10, marginBottom: 10, width: "100%" }}>
      <li>
        <Link 
          to ="/Explain" 
          style={{ 
            margin: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            }}>
          <img src={icon3} width="130px" height="200px"></img>
        </Link>
      </li>
      <li>
        <Link
        to="/profile"
        style={{
          margin: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
          }}>
        <img src={icon4} width="130px" height="200px"></img>
      </Link>
      </li>
      </div>
    </ul>
  </nav>
</div>
</div>
);
export default Navigation;