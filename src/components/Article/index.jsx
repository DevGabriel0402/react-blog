import { Post } from "../Post";

export const Article = () => {
  return (
    <section className="container">
      <h6>Article</h6>
      <div className="container-posts flex mt-5">
        <Post title="O guia definitivo para o Blog" badge="Tecnologia" />
        <Post title="Câmeras essenciais em 2025" badge="Fotografia" />
        <Post title="Os 10 filmes de maior bilheteria" badge="Cinema" />
      </div>
    </section>
  );
};
