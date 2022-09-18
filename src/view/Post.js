import "./Post.css";
import display from "../assets/avatar2.png";
import image from "../assets/image1.jpeg";
import likes from "../assets/icons/likesIcon.png";
import comment from "../assets/icons/commentIcon.png";
import message from "../assets/icons/messagesIcon.png";
import savePost from "../assets/icons/savePostIcon.png";
import smile from "../assets/icons/smileIcon.png";
import Username from "../components/Username";
import Comment from "../components/Comment.js";

const Post = () => {
    return     <div className="card-container">
        <div className="card">
            <div className="top-card">
            <img className="display-pic" src={display} alt="Avatar"/>
                <Username />
            <h3 className="three-dot"><b> ...</b></h3>
            </div>
            <img src={image} alt="postImage"/>
            <div className="actions-post-header">
                <div className="post-actions">
                    <img src={likes} alt="like-icon"/>
                    <img src={comment} alt="comment-icon"/>
                    <img src={message} alt="messsage-icon"/>
                </div>
                <div className="save-post">
                    <img src={savePost} alt="save-post"/>
                </div>
            </div>
            <div className="post-likes">
                <h3 className="likes"><b>100 likes</b></h3>
            </div>
            <div className="post-title"><Username /><h5>Omg look at this...</h5>
            </div>
            <div className="post-bottom">
                <p>View all 4,000 comments</p>
                <p className="time">15 HOURS AGO</p>
            </div>
            <div>
                <hr className="new"/>
                <div className="smile-comment-btn">
                    <img src={smile} alt="smile-icon"/>
                    <Comment />
                </div>
            </div>
        </div>
    </div>
};

export default Post;