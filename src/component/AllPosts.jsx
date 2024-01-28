import  { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
// import AllpostsShimmer from "./AllpostsShimmer";

const AllPosts = () => {
  const [loginedUser, setLoginedUser] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authData = localStorage.getItem("auth");
        const parsedAuthData = authData ? JSON.parse(authData) : {};
        setLoginedUser(parsedAuthData.user);

        const { data } = await axios.get("https://dbph-server2.onrender.com/post/getall-post");
        setPosts(data.posts);
      } catch (error) {
        console.error(error);
        toast.error("Cannot get all posts");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-full w-full p-4 rounded-xl bg-white">
      {posts.length === 0 ? (
        <>
        <h1>Loading...</h1>
          {/* <AllpostsShimmer /> */}
          {/* <AllpostsShimmer /> */}
        </>
      ) : (
        <>
          {posts.map((post) => (
            <div key={post._id} className="flex border-2 border-black p-4 rounded-xl gap-3 mb-12 flex-col">
              <div className="h-16 flex gap-4 items-center w-full">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-black">
                  
                </div>
                {loginedUser._id === post.userId ? (
                 
                    <div className="flex hover:underline flex-col">
                      <h1 className=" uppercase">{`${post.firstname} ${post.lastname}`}</h1>
                      <p className="text-xs">{post.createdAt}</p>
                    </div>
                 
                ) : (
                  
                    <div className="flex hover:underline flex-col">
                      <h1>{`${post.firstname} ${post.lastname}`}</h1>
                      <p className="text-xs">{post.createdAt}</p>
                    </div>
                  
                )}
              </div>

              <div className="h-full flex flex-col w-full">
                <h1>{post.caption}</h1>
          
                <div className="my-2">
                  <img
                    className="h-full w-full overflow-hidden"
                    src={`https://dbph-server2.onrender.com/post/post-photo/${post._id}`}
                    alt=""
                  />
                </div>
              </div>

             

              <hr />
            </div>
          ))}
        </>
      )}

      <div className={` justify-center flex-row gap-2 ${posts ? "hidden" : "flex"}`}>
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]" />
        <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]" />
      </div>
    </div>
  );
};

export default AllPosts;
