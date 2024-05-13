import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Home() {
  const [posts, setPosts] = useState([]);
  const category = useLocation().search;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/posts${category}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, [category]);

  return (
    <div className="max-w-screen-xl mx-auto mt-32 mb-10">
      <div className="flex items-center flex-col gap-40 max-w-screen-lg mx-auto">
        {posts.map(({ title, desc, img, post_id }, i) => (
          <div
            key={i}
            className=" grid-cols-5 gap-12 flex even:flex-row-reverse"
          >
            <div className="img basis-1/2 relative">
              <img
                src={img}
                alt={title}
                className="h-auto max-h-[350px] object-cover w-full rounded-md"
              />
              <div className="absolute top-20 h-auto max-h-[350px] w-full rounded-md bg-blue-300" />
            </div>
            <div className="basis-1/2">
              <Link to={`/post/${post_id}`}>
                <h1 className="font-bold text-3xl text-gray-900 mb-3">
                  {title}
                </h1>
                <p className="text-gray-700 text-md mb-2">{desc}</p>
                <button
                  className="text-sm font-semibold p-2 border mt-2 
                  border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
                >
                  Read More...
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
