/* @jsx A.createElement */

import A from './ANDREW.js';
import app from './app.js';


const container = document.createElement("div");
document.body.appendChild(container)

const element = <h1>hej</h1>;
A.render(element, container);
