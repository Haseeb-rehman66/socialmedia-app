import React, { useState } from 'react';
import "./Post.css";
import tree from "../../Assets/tree.jpg";
import likes from "../../Assets/like.jpg";
import heart from "../../Assets/heart.jpg";
import {MoreVert} from "@material-ui/icons";
import {users} from "../../Components/Dummydata/Dummydata";

export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [islike, setIslike] = useState(false);

    const likecounter =() => {
        setLike(islike ? like-1 : like + 1);
        setIslike(!islike);
    }
   

    
    
  return (
    <div className="Post">
        <div className="Postwrapper">
            <div className="Posttop">
                <div className="posttopleft">
                    <img className="profileimg" src={users.filter((u) => u.id===post?.userid)[0].profilepicture} alt="tree" />
                    <span className="username">{users.filter((u) => u.id===post?.userid)[0].username}</span>
                    <span className="time">{post.date}</span>
                    


                </div>
                
                <div className="posttopright">
                    <MoreVert/>

                </div>

            </div>
            <div className="Postcenter">
                <span className="posttext">{post.desc}</span>
                <img className="postimg" src={post.photo} alt="tree" />
            </div>

            <div className="Postbottom">
                <div className="postbottomleft">
                    <img src={heart} alt="" className="likeicon" onClick={likecounter}/>
                    <img src={likes} alt="" className="likeicon" onClick={likecounter} />
                    <span className="postlikecounter">{like} people liked it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcommenttext">{post.comment} comments</span>
                </div>
            </div>

        </div>
    </div>
  )
}
