import React from "react";
import "../style/article.css";
import "../style/footer.css";
import "../style/card.css";

function ArticleItem(props) {
  return (
    <div
      className="article_div"
      style={
        props.index % 2 === 0
          ? { backgroundColor: "antiquewhite" }
          : { backgroundColor: "gray" }
      }
    >
      <div>{props.title}</div>
      <div>{props.content}</div>
      <div>{props.date}</div>
      <img
        className="card_img"
        alt="Sample"
        src="https://picsum.photos/300/200"
      />
    </div>
  );
}

export default ArticleItem;
