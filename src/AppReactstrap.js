import React, { useEffect, useState } from "react";
import { Button } from "reactstrap";
import CardItem from "./component/CardItem";
import AlertItem from "./component/AlertItem";
import "./style/app.css";
import axios from "axios";
import Users from "./dto/Users";
import Loading from "./component/Loading";

import Courses from "./dto/Courses";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";

function AppReactstrap() {
  //Loading
  let [loading, setLoading] = useState(false);
  //API
  let [courses, setCourses] = useState([]);
  let [users, setUsers] = useState(null);
  let [userToken, setUserToken] = useState("");
  //Alert
  let [modal, setModal] = useState(false);
  let [modalContent, setModalContent] = useState("");
  let [modalTitle, setModalTitle] = useState("Tip");
  let [btnText, setbtnText] = useState("close");
  //SlideMenu
  const [offcanvas, setOffcanvas] = useState(false);
  //Test useState
  let [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5, 10, 20]);
  const [student, setStudent] = useState({ name: "Tim", gender: "male" });

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

  const axiosAPIClient = axios.create({
    baseURL: `${process.env.REACT_APP_MERNJWT_API_URL}`,
    headers: { Authorization: `${process.env.REACT_APP_PREFIX} ${userToken}` },
    timeout: 1000,
  });

  const searchSubUrl = "/api/course/search";
  const loginSubUrl = "/api/user/login";

  const getUserData = async (e, account, password) => {
    e.preventDefault();

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

  const updateCourse = async (e, _id, title, description, price) => {
    e.preventDefault();
    setLoading(true);

    const updateData = {
      _id: _id,
      title: title,
      description: description,
      price: price,
    };
    //資料擷取完成時

    try {
    } catch (e) {
      showOrCloseModal(null, "Update Course", `${e.message}`, "True");
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

  const addCount = (e) => {
    e.preventDefault();
    setCount(count + 1);

    console.log(`addCount ${count}`);
  };

  useEffect(() => {
    console.log(`useEffect ${count}`);
  }, [count]);

  const addDataToArray_One = (e, data) => {
    e.preventDefault();
    const newDataList = [1, 2, 3, 4, 5, 10, 20, data];
    setItems(newDataList);
  };

  const addDataToArray_Two = (e, data) => {
    e.preventDefault();
    setItems([...items, data]);
  };

  useEffect(() => {
    console.log(`useEffect ${items}`);
  }, [items]);

  const addDataToObject_One = (e) => {
    e.preventDefault();
    const newObject = { name: "Ivy", gender: "Female" };
    setStudent(newObject);
  };

  const addDataToObject_Two = (e) => {
    e.preventDefault();
    setStudent({ ...student, name: "Oliver" });
  };

  useEffect(() => {
    console.log(`useEffect ${student.name}`);
  }, [student]);

  const ShowCardItem = React.memo(
    (props) => {
      return props.courses.map((data, index) => {
        console.log(1);
        return (
          <CardItem
            title={data.title}
            subtitle={data.price}
            content={data.description}
          ></CardItem>
        );
      });
    },
    (prevProps, nextProps) => {
      console.log(prevProps !== nextProps);
      if (prevProps !== nextProps) {
        return false;
      }
      return true;
    }
  );

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
        <Offcanvas
          isOpen={offcanvas}
          toggle={function noRefCheck() {
            setOffcanvas(!offcanvas);
          }}
        >
          <OffcanvasHeader
            toggle={function noRefCheck() {
              setOffcanvas(!offcanvas);
            }}
          >
            Offcanvas
          </OffcanvasHeader>
          <OffcanvasBody>
            <strong>This is the Offcanvas body.</strong>
          </OffcanvasBody>
        </Offcanvas>
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
          <div>
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
          <div>
            <Button
              outline
              color="danger"
              style={{ marginRight: "10px" }}
              onClick={function noRefCheck() {
                setOffcanvas(!offcanvas);
              }}
            >
              SliderMenu
            </Button>
          </div>
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
              <ShowCardItem courses={courses} />
            </div>
          </div>
        </section>

        <section
          className="section-style"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            color="secondary"
            onClick={(e) => {
              addCount(e);
            }}
          >
            Test useState Aync Add Count
          </Button>
          <Button
            color="success"
            onClick={(e) => {
              addDataToArray_One(e, 30);
            }}
          >
            Test useState Add Data to Array One
          </Button>
          <Button
            color="success"
            onClick={(e) => {
              addDataToArray_Two(e, 40);
            }}
          >
            Test useState Add Data to Array Two
          </Button>
          <Button
            color="danger"
            onClick={(e) => {
              addDataToObject_One(e);
            }}
          >
            Test useState Add Data to Array One
          </Button>
          <Button
            color="danger"
            onClick={(e) => {
              addDataToObject_Two(e);
            }}
          >
            Test useState Add Data to Array Two
          </Button>
        </section>
        <section></section>
      </main>
    </div>
  );
}

export default AppReactstrap;
