import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/sass/main.scss';

const render = () => {
    // import(`./assets/css/sass/themes/gogo.${color}.scss`).then(() => {
    require('./AppRenderer');
    // });
};
render();
