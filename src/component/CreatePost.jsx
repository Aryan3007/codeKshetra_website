import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaImage } from "react-icons/fa6";
import { IoVideocamSharp } from "react-icons/io5";
import { Modal } from "antd";

const CreatePost = () => {
  const [userId, setUserId] = useState("");
  const [caption, setCaption] = useState("");
  const [photo, setPhoto] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [posts, setPosts] = useState([]); 
  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");

    if (storedAuth) {
      const parsedAuth = JSON.parse(storedAuth);
      const id = parsedAuth?.user?._id;

      if (id) {
        setUserId(id);
      } else {
        console.error("User ID not found in stored data");
      }
    } else {
      console.error("Authentication data not found in local storage");
    }


  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setCaption("");
  };

  const getAllPosts = useCallback(async () => {
    try {
      const { data } = await axios.get("https://dbph-server2.onrender.com/post/getall-post");
      setPosts(data.posts);
    } catch (error) {
      console.error(error);
      toast.error("Cannot get all posts");
    }
  }, []);

  const handelCreatePost = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("caption", caption);
      formData.append("photo", photo);
      formData.append("userId", userId);

      const { data } = await axios.post(
        "https://dbph-server2.onrender.com/post/create-post",
        formData
      );

      if (data?.success) {
        toast.success("Post created successfully");
        setCaption("");
        setPhoto(null);
        getAllPosts();
      } else {
        toast.error(data?.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong while creating post");
    }
  };

  return (
    <form
      onSubmit={handelCreatePost}
      className="w-full bg-white border-2 overflow-hidden border-black rounded-xl flex flex-col items"
    >
      <div className="h-20 w-full  flex justify-evenly flex-row gap-4 items-center px-4 py-2">
        <div className="h-16 w-16 rounded-full flex justify-center items-center overflow-hidden">
          <img
            className="h-16 w-16"
            src="https://images.unsplash.com/photo-1670272504471-61a632484750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>

        <Modal
          title="Post Caption"
          width={800}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            type="text"
            placeholder="Whats in your mind..."
            className="h-44 w-11/12 p-4 bg-zinc-200"
          />
        </Modal>

        <div
          onClick={showModal}
          type="text"
          placeholder="Whats in your mind..."
          className="h-12 w-11/12 text-nowrap overflow-hidden flex items-center px-4 bg-zinc-200 rounded-full"
        >
          {caption ? (
            <>
              <p className="text-zinc-600">{caption}</p>
            </>
          ) : (
            <h1 className="text-zinc-600">Create a post</h1>
          )}
        </div>
      </div>
      <hr />
      <div className="h-20 w-full flex justify-between flex-row gap-6 items-center px-8 py-2 my-1">
        <h1 className="font-semibold text-xl">Attach Media : </h1>

        <div className="flex  items-centerz px-4 py-2 rounded-xl hover:bg-zinc-200 gap-2">
          <label className="rounded-full text-xs font-bold flex  items-center after: gap-2 flex-row">
            <FaImage className="text-xl" />
            {photo ? photo.name : "Image"}
            <input
              type="file"
              name="photo"
              accept="image/*"
              onChange={(e) => setPhoto(e.target.files[0])}
              hidden
            />
          </label>
        </div>

        <div className="flex items-centerz px-4 py-2 rounded-xl hover:bg-zinc-200 gap-2">
          <IoVideocamSharp className="text-xl" />
          <p className="text-xs font-bold">Clip</p>
        </div>
        <button className="post">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Post</span>
        </button>
      </div>
      <hr />
    </form>
  );
};

export default CreatePost;
