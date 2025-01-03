export const Post = (post) => {
  return (
    <div className="post mx-2">
      <div className="img-post"></div>
      <h5>{post.category}</h5>
      <h3>{post.title}</h3>
      <p>{post.resume}</p>
      <div className="flex pt-2">
        <div className="img-profile"></div>
        <div className="desc-profile ml-2">
          <h6 className="name-profile color-blue">{post.author}</h6>
          <p>{post.date}</p>
        </div>
      </div>
    </div>
  );
};
