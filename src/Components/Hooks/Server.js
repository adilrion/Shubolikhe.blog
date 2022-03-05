import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Server = () => {
  const [blog, setBlog] = useState([]);
  const [readBlog, setReadBlog] = useState([]);
  const [tagBlog, setTagBlog] = useState([]);
  console.log(tagBlog);
  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => {
        // setIsLoading(false);
        setBlog(data);
      });
  }, []);

  const HandleReadBlog = (id) => {
    useEffect(() => {
      fetch(`http://localhost:5000/read-blog/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // setIsLoading(false);
          setReadBlog(data);
        });
    }, [id]);
  };
  const HandleTagBlog = (query) => {
    useEffect(() => {
      fetch(`http://localhost:5000/tag-blog/${query}`)
        .then((res) => res.json())
        .then((data) => {
          // setIsLoading(false);
          setTagBlog(data);
        });
    }, [query]);
  };

  return {
    blog,
    readBlog,
    HandleReadBlog,
    HandleTagBlog,
    tagBlog,
  };
};

export default Server;