import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import "./sass/main.scss";

const render = () => {
  // import(`./assets/css/sass/themes/gogo.${color}.scss`).then(() => {
  require("./AppRenderer");
  // });
};
render();
