import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

interface Post {
  post_id: number;
  title: string;
  desc: string;
  img: string;
  category: string;
  user_id: string;
  username: string;
  user_img: string;
  date: Date;
}
export default function Post() {
  const [post, setPost] = useState<Post | null>(null);
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/posts/${id}`);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [id, post]);

  const deletePost = async () => {
    try {
      await axios.delete(`http://localhost:8000/api/posts/${id}`);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      alert(err.message)
    }
  };
  return (
    <div className="max-w-screen-lg mx-auto mt-24 mb-10 flex gap-6">
      <div className="basis-2/3">
        <div className="content h-[350px] mb-4">
          <img
            className="w-full h-full object-cover"
            src={post?.img}
            alt="Image"
          />
        </div>

        <div className="user-info flex gap-4 w-full mb-2">
          <div className="flex gap-3">
            <div className="user">
              <img
                src={post?.img}
                alt="Image"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            <div className="info">
              <span className="text-lg font-bold">{post?.username}</span>
              <p className="text-xs font-light">
                Posted {moment(post?.date).fromNow()}
              </p>
            </div>
          </div>
          {user && user.username === post?.username && (
            <div className="action_btns flex gap-3 text-xs font-bold">
              <button>
                <Link to={`/write/?edit=2`} className="text-blue-500">
                  Edit
                </Link>
              </button>
              <button onClick={deletePost} className="text-red-500">
                Delete
              </button>
            </div>
          )}
        </div>
        <h1 className="font-bold text-gray-900 text-3xl mb-4">{post?.title}</h1>
        <div className="flex flex-col gap-4 text-justify leading-7 text-gray-500">
          {post?.desc}
        </div>
      </div>
      <Menu />
    </div>
  );
}
