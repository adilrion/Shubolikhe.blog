import Home from "./Components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutMe from "./Components/Pages/About/AboutMe";
import Contact from "./Components/Pages/Contact/Contact";
import BlogRead from "./Components/Pages/BlogRead/BlogRead";
import Blogs from "./Components/Pages/Blogs/Blogs";
import Tag from "./Components/Pages/Tags/Tag";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="blog" element={<Tag />} />
          <Route path="contact" element={<Contact />} />
          <Route path="read-blog/:id" element={<BlogRead />} />
          <Route path="tag-blog/:query" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
