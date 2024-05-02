import { Link } from "react-router-dom";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
      img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div className="max-w-screen-xl mx-auto mt-32 mb-10">
      <div className="flex items-center flex-col gap-40 max-w-screen-lg mx-auto">
        {posts.map(({ id, title, desc, img }, i) => (
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
              <Link to={`/post/${id}`}>
                <h1 className="font-bold text-3xl text-gray-900 mb-3">
                  {title}
                </h1>
                <p className="text-gray-700 text-md mb-2">{desc}</p>
                <button className="text-sm font-semibold p-2 border mt-2 
                  border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
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
