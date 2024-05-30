import React from "react";
import { Link } from "react-router-dom";
import CardItem from "./component/CardItem";
import "./style/app.css";

function AppReactstrap() {
  const myFriends = [
    { title: 1, subtitle: "Tim", content: 38 },
    { title: 2, subtitle: "Ivy", content: 39 },
    { title: 3, subtitle: "Oliver", content: 5 },
  ];

  return (
    <div id="img_set">
      <header>
        <a href="http://google.com" target="_self" rel="noopener noreferrer">
          Google
        </a>
      </header>
      <main>
        <section className="section-style">
          <div id="div-card-style">
            {myFriends.map((data, index) => {
              return (
                <CardItem
                  title={data.title}
                  subtitle={data.subtitle}
                  content={data.content}
                ></CardItem>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default AppReactstrap;
