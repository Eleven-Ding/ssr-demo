// import React from "react";
// import { Route, Routes, Router, Link } from "react-router-dom";
import About from "./pages/About";
import Index from "./pages/Index";

// export default function App() {
//   const [counter, setCounter] = React.useState(0);

//   return (
//     <div>
//       <Routes>
//         <Route path="/" exact element={<Index />}></Route>
//         <Route path="/about" exact element={<About />}></Route>
//       </Routes>

//       <div>
//         <h1>SSR ElevenDing</h1>
//         <div>
//           <Link to="/" parent="button">
//             Index
//           </Link>
//           <Link to="/about">About</Link>
//         </div>

//         <span>{counter}</span>
//         <button
//           onClick={() => {
//             setCounter((counter) => {
//               return counter + 1;
//             });
//           }}
//         >
//           +1按钮
//         </button>
//       </div>
//     </div>
//   );
// }

export default  [
  {
    path: "/",
    component: Index,
    exact: true,
    key: "index",
  },
  {
    path: "/about",
    component: About,
    exact: true,
    key: "about",
  },
];
