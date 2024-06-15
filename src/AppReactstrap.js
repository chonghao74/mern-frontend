import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import CardItem from "./component/CardItem";
import "./style/app.css";
import axios from "axios";
import Users from "./dto/Users";
import Loading from "./component/Loading";
import Courses from "./dto/Courses";

function AppReactstrap() {
  let [loading, setLoading] = useState(false);
  let [courses, setCourses] = useState([]);
  let [users, setUsers] = useState(null);
  let userToken;
  const searchSubUrl = "/api/course/search";
  const loginSubUrl = "/api/user/login";

  const myFriends = [
    { title: 1, subtitle: "Tim", content: 38 },
    { title: 2, subtitle: "Ivy", content: 39 },
    { title: 3, subtitle: "Oliver", content: 5 },
  ];

  const axiosAPIClient = axios.create({
    baseURL: `${process.env.REACT_APP_MERNJWT_API_URL}`,
    headers: { Authorization: `${process.env.REACT_APP_PREFIX} ${userToken}` },
    timeout: 1000,
  });

  const getUserData = async (e, account, password) => {
    const loginData = {
      email: account,
      password: password,
    };
    setLoading(true);
    try {
      const userData = await axiosAPIClient.post(loginSubUrl, loginData);

      if (userData) {
        userToken = userData.data.data.token;
        setUsers(new Users(userData.data.data.user));
        console.log(users);
      } else {
        alert("Fail");
      }
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  const getCourse = async (e) => {
    e.preventDefault();
    setLoading(true);
    //資料擷取完成時

    try {
      const coursesData = await axiosAPIClient.get("/api/course/search");
      if (coursesData) {
        let dataArray = [];
        console.log(coursesData.data);
        coursesData.data.data.message.forEach((data) => {
          const Data = new Courses(data);
          dataArray.push(Data);
        });
        // console.log(dataArray);
        // setCourses(userData.data.data.message);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let loading_container = document.querySelector("#loading_container");
    if (loading_container) {
      if (loading) {
        document.body.style.overflow = "hidden";
        loading_container.style.display = "block";
      } else {
        document.body.style.overflow = "auto";
        loading_container.style.display = "none";
      }
    }
  }, [loading]);

  return (
    <div id="img_set">
      <div
        id="loading_container"
        style={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: "1000000",
        }}
      >
        <img
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: 0.3,
            zIndex: "-1000000",
          }}
        />
        <Loading setLoading={setLoading}></Loading>
      </div>
      <header>
        <a href="http://google.com" target="_self" rel="noopener noreferrer">
          Google
        </a>
        {users ? (
          <Button id="user" type="button">
            {users.name}
          </Button>
        ) : (
          <Button id="user" type="button">
            無
          </Button>
        )}
      </header>
      <navigator>
        <div style={{ backgroundColor: "white", paddingLeft: "20px" }}>
          <Button
            outline
            color="secondary"
            style={{ marginRight: "10px" }}
            onClick={(e) => {
              getUserData(e, "TimIns01@gmail.com", "12345678");
            }}
          >
            Login by Instructor
          </Button>
          <Button
            outline
            color="success"
            style={{ marginRight: "10px" }}
            onClick={(e) => {
              getUserData(e, "timStu01@gmail.com", "12345678");
            }}
          >
            Login by Student
          </Button>
          <Button
            outline
            color="info"
            style={{ marginRight: "10px" }}
            onClick={(e) => {
              getCourse(e);
            }}
          >
            getCourse
          </Button>
        </div>
      </navigator>
      <main>
        <section className="section-style">
          <div id="div-card-style">
            {courses.map((data, index) => {
              return (
                <CardItem
                  title={data.title}
                  subtitle={data.price}
                  content={data.description}
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
