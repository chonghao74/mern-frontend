//import styles_app from "./scss/app.scss";
import "./style/app.css";
import { Button } from "reactstrap";
import React, { useMemo, useState } from "react";

const Title = React.memo(() => {
  console.log("Add Title   ddd");
  return (
    <div>
      <h1>Title</h1>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [stateGo, setStateGo] = useState(true);
  const [data, setData] = useState([{ name: "1" }, { name: "2" }]);
  const [myName, setMyName] = useState("Tim");
  const [myName2, setMyName2] = useState("Tim222");

  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    // var confirmationMessage = "你還沒有完成你的文章，就這樣離開了嗎？";

    // e.returnValue = confirmationMessage; //Gecko + IE
    // return confirmationMessage; //Webkit, Safari, Chrome
  });

  const showTitle = () => {
    console.log(myName);
    return myName;
  };

  const Title2 = useMemo(() => {
    console.log(myName2);
    return (
      <div>
        <h1>{myName2}</h1>
      </div>
    );
  }, [myName2]);

  return (
    <div id="img_set">
      <div>
        <div>
          {data ? (
            data.map((data) => {
              return <label htmlFor="">{data.name}</label>;
            })
          ) : (
            <label htmlFor="">No</label>
          )}
          ;
          <Title />
          <div>{Title2}</div>
          <div>{showTitle()}</div>
        </div>
        <Button
          color="secondary"
          outline
          onClick={function () {
            setCount(count + 1);
            setData([...data, { name: "Ivy" }]);
            setStateGo(!stateGo);
          }}
        >
          add Count
        </Button>
        <Button
          color="secondary"
          outline
          onClick={function () {
            setCount(count + 1);
            setMyName2(count + 1);
          }}
        >
          add Count2
        </Button>
      </div>
    </div>
  );
}

export default App;
