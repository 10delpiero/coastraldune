import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import { faStore } from "@fortawesome/free-solid-svg-icons";
import {HashRouter as Router, Route, Switch} from "react-router-dom";

const Navigation = ( {userObj} ) => (
  <div>
  { <Route path='../routes/Home'/>
    ? null
    :
<nav>
    <ul style={{display: "flex", justifyContent: "center", marginTop: 50 }}>
        <li>
        <Link to="/" style={{ 
          marginRight: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,}}>
          <FontAwesomeIcon icon={faComment} color={"#505050"} size="2x" />
          <span style={{ marginTop: 10 }}>홈</span>
        </Link>
        </li>
        <li>
        <Link to="/diary" style={{ 
          marginRight: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,}}>
          <FontAwesomeIcon icon={faComment} color={"#505050"} size="2x" />
          <span style={{ marginTop: 10 }}>홈</span>
        </Link>
        </li>
        <li>
        <Link
          to="/profile"
          style={{
            marginLeft: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <FontAwesomeIcon icon={faUser} color={"#505050"} size="2x" />
          <span style={{ marginTop: 10 }}>
            {userObj.displayName
              ? `${userObj.displayName}`
              : "프로필"}
          </span>
        </Link>
        </li>
        <li>
            <Link to ="/DunesExpedition" style={{ 
              marginLeft: 10, 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 12,
            }}>
            <FontAwesomeIcon icon={faCameraRetro} color={"#505050"} size="2x" />
            <span style={{ marginTop: 10 }}>사구생물검색</span>
            </Link>
        </li>
        <li>
            <Link to ="/Explain" style={{ 
              marginLeft: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              fontSize: 12, 
              }}>
            <FontAwesomeIcon icon={faStore} color={"#505050"} size="2x" />
            <span style={{ marginTop: 10 }}>사구지식</span>
            </Link>
        </li>
    </ul>
</nav>
            }
</div>
);
export default Navigation;