import { api } from "../../services/api";
import { Post } from "../../components/Post";
import { useState, useEffect } from "react";

export const Main = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    api.get("/posts").then((response) => {
      setPost(response.data);
    });
  }, []);

  return (
    <>
      <section className="container">
        <h1>Pagina Inicial</h1>
        <div className="container-posts flex mt-5">
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                category={post.category}
                title={post.title}
                resume={post.resume}
                author={post.author}
                date={post.date}
              ></Post>
            );
          })}
        </div>
      </section>
    </>
  );
};
