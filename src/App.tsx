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
        <Route path="/tworld/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/tworld/about" element={<About />} />
          <Route path="/tworld/blog" element={<Blog />} />
          <Route path="/tworld/blog/:id" element={<BlogPage />} />
          <Route path="/tworld/careers" element={<Careers />} />
          <Route path="/tworld/cases" element={<Cases />} />
          <Route path="/tworld/contact" element={<Contact />} />
          <Route path="/tworld/services" element={<Services />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </Provider>
  );
}

export default App;
