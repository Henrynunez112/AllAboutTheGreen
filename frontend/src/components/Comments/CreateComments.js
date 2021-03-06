import React, { useState, useEffect } from "react";
import { useInput } from '../../util/useInput';
import { apiURL } from '../../util/apiURL';
import axios from 'axios';
import '../../css/createcomment.css'



const CreateComments = ({uploadId}) => {
  const API = apiURL();
  // const [uploadId, setUploadId] = useState("");
  const commentUsername = useInput("");
  const commentUsertext = useInput("");
  // const grabUploadId = useInput("")
  const [allComments, setAllComments] = ([])


// Client: send the data in the request body (not using formData)
  const handleNewComments = async (e) => {
    try {
      e.preventDefault();
      const data = {
        username: commentUsername.value,
        user_comment: commentUsertext.value,
        upload_id: uploadId
      };
      debugger
      let newComment = await axios.post(`${API}/comments`, data);
      console.log(newComment.data);
      alert('Your comment was successfully created.');
      setTimeout(function () {
        window.location = '/open-forum';
      }, 1000);
    } catch (err) {
      alert(err);
    }
  };

    // const displayNewComment = allComments.map(userComments => {
    //     return (
    //         <PostComment key={userComments.id} commentId={userComments.id} uploadId={userComments.upload_id} userName={userComments.username} singleComment={userComments.user_comment}/>
    //     )
    // })



    return (
      <div className="commentDiv">
        <div className="commentSectionDiv">
          <h2 className="commentHeading">Comment Section </h2>
        </div>


        <div className="formDiv">
          <form className="sub-form-div" onSubmit={handleNewComments}>
            {/* <div className="upload-id-div"> 
              <label className="username-label" for="name"> Post Id: </label>
                <input className="add-username-style" type="text" placeholder="Enter id" {...grabUploadId}/> 
            </div> */}
            {/* <br/> */}
            <div className="username-div-yup"> 
              <label className="username-label" for="name"> Username: </label>
                <input className="add-username-style" type="text" placeholder="Enter a username" {...commentUsername}/> 
            </div>
            <br/>
            <div className="comment-div-yup"> 
              <label className="commentLabel" for="name"> Comment: </label>
                <textarea rows="3" cols="90" className="add-comment-style" type="textarea" placeholder="Feedback welcomed..." {...commentUsertext}/> 
            </div>
            {/* <br /> */}
          
            <div className="buttonDiv">
              <button className="commentButton" type="submit" value="Add comment">
                Submit Banter
              </button>
            </div>
          </form>

          <div>

          </div>


        <div className="comment-div-style-yeah" >
          <div className="individual-comment">
              {/* {displayNewComment} */}
              <p> username: xoxoGG</p>
              <p> comment: This is such a cool plant</p>
          </div>
          <br/>

          <div className="individual-comment">
              {/* {displayNewComment} */}
              <p> username: yoHenry</p>
              <p> comment: whats the name of this plant?</p>
          </div>
            <br/>
          <div className="individual-comment">
              {/* {displayNewComment} */}
              <p> username: darsuChats</p>
              <p> comment: I need the plug? Where can I get this</p>
          </div>
        </div>
          
        </div>
      </div>
    );
}

export default CreateComments