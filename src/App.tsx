import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import "./App.css";

type RouteData = {
  path: string;
  element: JSX.Element;
};

function App() {
  const routes: RouteData[] = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> }
  ];

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
