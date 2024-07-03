// import * as D from "./data";

// export default function App() {
//   return (
//     <div>
//       <p>
//         {D.randomName()}, {D.randomJobTitle()}, {D.randomDayMonthYear()}
//       </p>
//       <img src={D.randomAvatar()} height="50" />
//       <img src={D.randomImage()} height="300" />
//     </div>
//   );
// }

// import { Component } from "react";
// import ClassComponent from "./ClassComponent";

// export default class App extends Component {
//   render() {
//     return (
//       <ul>
//         <ClassComponent href="http://www.google.com" text="go to google" />
//         <ClassComponent href="http://www.x.com" text="go to x(twitter)" />
//       </ul>
//     );
//   }
// }

import { Component } from "react";
import ClassComponent from "./ClassComponent";
import ArrowComponent from "./ArrowComponent";
import P from "./P";

// export default function App() {
//   return <div>Hello function-keyword component!</div>;
// }

// const App = () => {
//   return (
//     <ul>
//       <ClassComponent href="http://www.google.com" text="go to google" />
//       <ArrowComponent href="http://www.X.com" text="go to X(twitter)" />
//     </ul>
//   );
// };

const App = () => {
  // refactoring map 함수 사용
  // [...].map((item, index)=> <tag>)
  // const texts = [<p key="1">hello</p>, <p key="2">world</p>];
  // const texts = ["hello", "world"].map((item, index) => (<p key={index} >{item}</p>));
  // const texts = ["hello", "world"].map((item, index) => (
  //   <p key={index} children={item} />
  // ));
  const texts = ["hello", "world"].map((item, index) => (
    <P key={index} children={item} />
  ));
  return <div children={texts} />;
};

export default App;
