import { dbService, storageService } from "../fbase";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Nweet = ({nweetObj, isOwner }) => { 
    const [editing, setEditing] = useState(false);
    const [newNweet, setNewNweet] = useState(nweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("정말 삭제하겠습니까?");
            if (ok) {
                await dbService.doc(`nweets/${nweetObj.id}`).delete();
                await storageService.refFromURL(nweetObj.attachmentUrl).delete();
            }    
        };
        const toggleEditing = () => setEditing((prev) => !prev);
        const onSubmit = async(event) => {
            event.preventDefault();
            await dbService.doc(`nweets/${nweetObj.id}`).update({
                text:newNweet
            });
            setEditing(false);
        };
        const onChange = (event) => {
            const {
                target: {value},
            } = event;
            setNewNweet(value);
        };
        return (
            <div className="nweet">
                {editing ? (
                    <>
                <form onSubmit={onSubmit} className="container nweetEdit">
                    <input type="text" placeholder="수정할 내용을 적으세요." value ={ newNweet } required               
                    autoFocus
                    onChange={onChange}
                    className="formInput"
                    /> 
                <input type="submit" value="수정" className="formBtn" />
                </form> 
                <span onClick={toggleEditing} className="formBtn cancelBtn">
                    취소
                </span>
                    </>
                    ):( 
                    <>
                    {nweetObj.attachmentUrl && <img src={nweetObj.attachmentUrl} />}
                    <h4>{nweetObj.text}</h4>
                    {isOwner && (
                    <div class="nweet__actions">
                    <span onClick={onDeleteClick}>
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                    <span onClick={toggleEditing}>
                      <FontAwesomeIcon icon={faPencilAlt} />
                    </span>
                    </div>
                    )}
                    </>
                    )}
            </div>
            );
        };

export default Nweet;