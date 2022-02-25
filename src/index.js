import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";



import "./sass/main.scss";

const render = () => {
  // import(`./assets/css/sass/themes/gogo.${color}.scss`).then(() => {
  require("./AppRenderer");
  // });
};
render();
