import api from "./axiosPublic";

const createBlog = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.get("/posts", data, config);

  return response.data.post;
};



const getBlog = async (blogId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.get(`/posts/${blogId}`, config);

  return response.data.post;
};

const getBlogs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.get("/posts", config);

  return response.data.posts;
};

const deleteBlog = async (blogId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = api.delete(`/posts/${blogId}`, config);

  return response.data.post;
};

const blogService = {
  createBlog,
  getBlog,
  getBlogs,
  deleteBlog
};

export default blogService;
