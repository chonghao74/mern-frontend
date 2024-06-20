import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import CardItem from "./component/CardItem";
import AlertItem from "./component/AlertItem";
import "./style/app.css";
import axios from "axios";
import Users from "./dto/Users";
import Loading from "./component/Loading";

import Courses from "./dto/Courses";

function AppReactstrap() {
  let [loading, setLoading] = useState(false);
  let [courses, setCourses] = useState([]);
  let [users, setUsers] = useState(null);

  let [userToken, setUserToken] = useState("");
  let [modal, setModal] = useState(false);

  let [modalContent, setModalContent] = useState("");
  let [modalTitle, setModalTitle] = useState("Tip");
  let [btnText, setbtnText] = useState("close");

  const showOrCloseModal = (e, modalTitle, modalContent, btnText) => {
    if (e) e.preventDefault();

    if (!modal) {
      if (modalTitle) {
        setModalTitle(modalTitle);
      }

      if (modalContent) {
        setModalContent(modalContent);
      }

      if (btnText) {
        setbtnText(btnText);
      }
    }

    setModal(!modal);
  };

  const searchSubUrl = "/api/course/search";
  const loginSubUrl = "/api/user/login";

  const myFriends = [
    { title: 1, subtitle: "Tim", content: 38 },
    { title: 2, subtitle: "Ivy", content: 39 },
    { title: 3, subtitle: "Oliver", content: 5 },
  ];

  let datalist = [1, 2, 3, 4, 5, 10, 20];

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
        setUserToken(userData.data.data.token);
        setUsers(new Users(userData.data.data.user));
        console.log(`Call Login is ${userData.data.data.result}`);
      } else {
        alert("Fail");
      }
    } catch (e) {
      showOrCloseModal(null, "Get User Data", `${e.message}`, "Yes");
    } finally {
      setLoading(false);
    }
  };

  const getCourse = async (e) => {
    e.preventDefault();
    setLoading(true);
    //資料擷取完成時

    try {
      const coursesData = await axiosAPIClient.get(searchSubUrl);
      if (coursesData) {
        if (coursesData.data.code === 200) {
          console.log(coursesData.data.data.message);

          setCourses(coursesData.data.data.message);
        } else {
          showOrCloseModal(
            null,
            "Get Course Data",
            `${coursesData.data.data.result}`,
            "True"
          );
        }
        console.log(`Call Get Courses is ${coursesData.data.data.result}`);
      }
    } catch (e) {
      showOrCloseModal(null, "Get Course Data", `${e.message}`, "True");
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
        <AlertItem
          isOpen={modal}
          setModal={setModal}
          title={modalTitle}
          content={modalContent}
          btnText={btnText}
        ></AlertItem>
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
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <div id="div-card-style">
              {courses.map((data, index) => {
                console.log(data);
                return (
                  <CardItem
                    title={data.title}
                    subtitle={data.price}
                    content={data.description}
                  ></CardItem>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-style" style={{ fontSize: "500px" }}>
          1
        </section>
      </main>
    </div>
  );
}

export default AppReactstrap;
