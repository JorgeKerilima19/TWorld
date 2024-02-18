import "./styles/index.css";
import { Routes, Route } from "react-router-dom";

import store from "./store";
import { Provider } from "react-redux";

import Layout from "./majorComponents/Layout";
import { Error } from "./routes/Error";
import {
  HomePage,
  About,
  Blog,
  Careers,
  Contact,
  Services,
  Cases,
} from "./routes";
import { BlogPage } from "./routes/BlogPage";

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/TWorld/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/TWorld/about" element={<About />} />
          <Route path="/TWorld/blog" element={<Blog />} />
          <Route path="/TWorld/blog/:id" element={<BlogPage />} />
          <Route path="/TWorld/careers" element={<Careers />} />
          <Route path="/TWorld/cases" element={<Cases />} />
          <Route path="/TWorld/contact" element={<Contact />} />
          <Route path="/TWorld/services" element={<Services />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Provider>
  );
}

export default App;
