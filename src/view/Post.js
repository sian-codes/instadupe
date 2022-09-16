import "./Post.css";
import display from "../assets/icons/displayPic.png";
import image from "../assets/image1.jpeg";

const Post = () => {
    return     <div className="card-container">
        <div className="card">
            <div className="top-card">
            <img className="display-pic" src={display} alt="Avatar"/>
            <h3><b>Username</b></h3>
            <h3 className="three-dot"><b> ...</b></h3>
            </div>
            <img src={image} alt="postImage"/>
            <div className="container">
                <h3>100 likes</h3>
                <p><h4><b>Username</b>omg look at this...</h4></p>
            </div>
        </div>
    </div>
};

export default Post;