//import styles_app from "./scss/app.scss";
import "./style/app.css";
function App() {
  window.addEventListener("beforeunload", function (e) {
    e.preventDefault();
    // var confirmationMessage = "你還沒有完成你的文章，就這樣離開了嗎？";

    // e.returnValue = confirmationMessage; //Gecko + IE
    // return confirmationMessage; //Webkit, Safari, Chrome
  });

  return <div id="img_set"></div>;
}

export default App;
