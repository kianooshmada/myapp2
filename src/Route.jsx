// // import { renderRoutes } from "react-router-config";

// // const routes = [
// //   {
// //     component: Root,
// //     routes: [
// //       {
// //         path: "/",
// //         exact: true,
// //         component: Home,
// //       },
// //       {
// //         path: "/child/:id",
// //         component: Child,
// //         routes: [
// //           {
// //             path: "/child/:id/grand-child",
// //             component: GrandChild,
// //           },
// //         ],
// //       },
// //     ],
// //   },
// // ];

// // const Root = ({ route }) => (
// //   <div>
// //     <h1>Root</h1>
// //     {renderRoutes(route.routes)}
// //   </div>
// // );

// // const Home = ({ route }) => (
// //   <div>
// //     <h2>Home</h2>
// //   </div>
// // );

// // const Child = ({ route }) => (
// //   <div>
// //     <h2>Child</h2>
// //     {renderRoutes(route.route, { someProp: "these extra props are optional" })}
// //   </div>
// // );

// // const GrandChild = ({ someProp }) => (
// //   <div>
// //     <h3>Grand Child</h3>
// //     <div>{someProp}</div>
// //   </div>
// // );

// // ReactDom.render(
// //   <BrowserRoute>{renderRoutes(routes)}</BrowserRoute>,
// //   document.getElementById("root")
// // );

// // export default Route;

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import reportWebVitals from "./reportWebVitals";

// import { renderRoutes } from "react-router-config";
// import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

// const Root = ({ route }) => (
//   <div>
//     <h1>Root</h1>
//     {renderRoutes(route.routes)}
//   </div>
// );

// const Home = ({ route }) => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );

// const Child = ({ route }) => (
//   <div>
//     <h2>Child</h2>
//     {renderRoutes(route.routes, { someProp: "these extra props are optional" })}
//   </div>
// );

// const GrandChild = ({ someProp }) => (
//   <div>
//     <h3>Grand Child</h3>
//     <div>{someProp}</div>
//   </div>
// );

// const routes = [
//   {
//     component: Root,
//     routes: [
//       {
//         path: "/",
//         exact: true,
//         component: Home,
//       },
//       {
//         path: "/child/:id",
//         component: Child,
//         routes: [
//           {
//             path: "/child/:id/grand-child",
//             component: GrandChild,
//           },
//         ],
//       },
//     ],
//   },
// ];

// ReactDOM.render(
//   <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
//   document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
