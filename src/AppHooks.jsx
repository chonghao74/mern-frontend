import React, { useEffect, useState } from "react";
import "./style/app-hooks.css";
import { Button } from "reactstrap";
import Loading from "./component/Loading";
import TitleNameNotUseMemo from "./component/testReactMemo/TitleNameNotUseMemo";
import TitleNameUseMemo from "./component/testReactMemo/TitleNameUseMemo";
import HeaderItem from "./component/hooksHeader/HeaderItem";
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
import { Collapse, CardBody, Card } from "reactstrap";

const TitleIN1 = React.memo((props) => {
  console.log("TitleIN1 used memo.");
  return (
    <div>
      <h3>TitleIN1 {props.title}</h3>
    </div>
  );
});

const TitleIN2 = (props) => {
  //console.log("TitleIN2 did not used memo.");
  return (
    <div>
      <h3>TitleIN2 {props.title}</h3>
    </div>
  );
};

function AppHooks() {
  //useState
  //Loading
  let [loading, setLoading] = useState(false);
  //SlideMenu
  const [offcanvas, setOffcanvas] = useState(false);
  //Test count
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Tim");
  //Test useSate updater 作法
  const [countDefault, setCountDefault] = useState(0);
  const [countUpdater, setCountUpdater] = useState(0);
  //Section Collapse
  const [s1Collapse, setS1Collapse] = useState(false);
  const [s2Collapse, setS2Collapse] = useState(false);

  //useEffect
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

  const setSlideMenu = (e) => {
    if (e) e.preventDefault();

    setOffcanvas(!offcanvas);
  };

  //Media
  const mediaMatch = window.matchMedia("(min-width: 701px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addEventListener("change", (e) => {
      setMatches(e.matches);
      if (offcanvas) {
        setSlideMenu();
      }
    });
    return () => mediaMatch.removeEventListener("change", handler);
  });

  //Test useSate updater 作法
  const testUseStateNonUpdater = (e) => {
    if (e) e.preventDefault();

    setCountDefault(countDefault + 1);
    setCountDefault(countDefault + 1);
    setCountDefault(countDefault + 1);
  };

  const testUseStateUseUpdater = (e) => {
    if (e) e.preventDefault();

    setCountUpdater((newCount) => newCount + 1);
    setCountUpdater((newCount) => newCount + 1);
    setCountUpdater((newCount) => newCount + 1);
  };

  return (
    <div id="img_set">
      <div>
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
          <Offcanvas
            direction="end"
            isOpen={offcanvas}
            toggle={(e) => {
              setSlideMenu(e);
            }}
          >
            <OffcanvasHeader
              toggle={(e) => {
                setSlideMenu(e);
              }}
            >
              Offcanvas
            </OffcanvasHeader>
            <OffcanvasBody>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button
                  style={{ marginBottom: "10px" }}
                  onClick={() => {
                    setLoading(!loading);
                  }}
                >
                  Store
                </Button>
                <Button
                  style={{ marginBottom: "10px" }}
                  onClick={() => {
                    setLoading(!loading);
                  }}
                >
                  Mac
                </Button>
              </div>
            </OffcanvasBody>
          </Offcanvas>
        </div>
      </div>
      <header>
        <HeaderItem
          loading={loading}
          setLoading={setLoading}
          setSlideMenu={setSlideMenu}
        />
      </header>
      <main>
        <section>
          <div>
            <h1
              style={{ color: "red" }}
              onClick={() => {
                setS1Collapse(!s1Collapse);
              }}
            >
              Test memo {s1Collapse ? "Open" : "Close"}
            </h1>
          </div>
          <div>
            <Collapse isOpen={s1Collapse}>
              <Card>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life
                  accusamus terry richardson ad squid. Nihil anim keffiyeh
                  helvetica, craft beer labore wes anderson cred nesciunt
                  sapiente ea proident.
                  <div>
                    <div>
                      <TitleNameUseMemo count={count} />
                      <TitleNameNotUseMemo count={count} />
                    </div>
                    <div>
                      <TitleIN1 title={title} />
                      <TitleIN2 title={title} />
                    </div>
                  </div>
                  <div>
                    <div>
                      <Button
                        color="info"
                        onClick={function () {
                          setCount(count + 1);
                        }}
                      >
                        add Count
                      </Button>
                      <Button
                        color="info"
                        onClick={function () {
                          count % 2 === 0
                            ? setTitle(String(count))
                            : setTitle("Tim");
                        }}
                      >
                        title Change
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </section>
        <section>
          <div>
            <h1 style={{ color: "red" }}>Test useMemo</h1>
          </div>
          <div>
            <Button
              style={{ marginBottom: "10px" }}
              onClick={(e) => {
                testUseStateNonUpdater(e);
              }}
            >
              testUseStateNonUpdater {countDefault}
            </Button>
            <Button
              style={{ marginBottom: "10px" }}
              onClick={(e) => {
                testUseStateUseUpdater(e);
              }}
            >
              testUseStateUseUpdater {countUpdater}
            </Button>
          </div>
        </section>
        <section>
          <div style={{ width: "100%", height: "1200px" }}></div>
        </section>
      </main>
    </div>
  );
}

export default AppHooks;
