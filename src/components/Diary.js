import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { dbService } from "../fbase";
import Nweet from "../components/Nweet";
import NweetFactory from "../components/NweetFactory";
import icon5 from "../components/icons/icon5.jpg";



const Diary =  ({userObj}) => {
    const [nweets, setNweets] = useState([]);
    useEffect(() => {
        dbService.collection("nweets").orderBy('createdAt', "desc").onSnapshot(snapshot => {
            const nweetArray = snapshot.docs.map(doc => ({
                id:doc.id,
                ...doc.data(),
            }));
            setNweets(nweetArray);
        });
    }, [])
    
    return(
      <div className="page">
                <div>
        <nav>
          <ul>
            <li>
              <Link to="/" 
              style={{ 
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            marginLeft: "30px",
            marginBottom: "10px",
            fontSize: 12,}}>
          <FontAwesomeIcon icon={faHome} color={"#ffffff"} size="3x" />
        </Link>
        </li>
        </ul>
        </nav>
        </div>
        <div className="pageTitleBack">
          <div className="pageTitle">
            <div className="in">
              <div style={{float: "left"}}><img width="100px" height="100px" src={icon5}></img></div>
              <div style={{float: "left", textAlign:"center", marginTop:"40px"}}>사구 식물 관찰 기록장</div>
            </div>
          </div>
        </div>
        <div className="pageExplain">나의 관찰기록 등록하기</div>
        <div className="container">
          <NweetFactory userObj={userObj} />
            <div style={{ marginTop: 30, height: 40}}>
                {nweets.map(nweet => (
                    <Nweet key={nweet.id} nweetObj={nweet} isOwner={nweet.creatorId === userObj.uid}/>
                ))}
            </div>
        </div>
      </div>
    );
};
export default Diary;