import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import UIProvider from "./context/UIProvider";
import Home from "./pages/Home";

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const GalleryPage = lazy(() => import("./pages/GalleryPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const Donate = lazy(() => import("./pages/Donate"));
const BaitulRehma = lazy(() => import("./pages/BaitulRehma"));
const BaitulRehmaDonate = lazy(() => import("./pages/BaitulRehmaDonate"));
const Volunteer = lazy(() => import("./pages/Volunteer"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  return (
    <UIProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectDetail />} />
          {/* Old URLs from the previous site */}
          <Route path="service" element={<Navigate to="/projects" replace />} />
          <Route path="services" element={<Navigate to="/projects" replace />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
          <Route path="baitul-rehma" element={<BaitulRehma />} />
          <Route path="baitul-rehma/donate" element={<BaitulRehmaDonate />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UIProvider>
  );
}
