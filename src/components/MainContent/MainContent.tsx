import { Navigate, Route, Routes } from "react-router-dom";
import {
  CreateAccount,
  Home,
  Login,
  SearchResults,
  VideoDetails,
} from "../../pages";
import "./MainContent.scss";

function MainContent() {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<VideoDetails />} />
        <Route path="/results/*" element={<SearchResults />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="*" element={<span>Page not found</span>} />
      </Routes>
    </div>
  );
}

export default MainContent;
