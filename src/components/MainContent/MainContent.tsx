import { Route, Routes } from "react-router-dom";
import {
  CreateAccount,
  Home,
  Login,
  SearchResults,
  VideoDetails,
} from "../../pages";
import Favorites from "../../pages/Faavorites/Favorites";
import { AuthRoute } from "../AuthRoute/AuthRoute";
import { UnAuthRoute } from "../UnAuthRoute/UnAuthRoute";
import "./MainContent.scss";

function MainContent() {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<VideoDetails />} />
        <Route path="/results/*" element={<SearchResults />} />
        <Route
          path="/favorite"
          element={
            <AuthRoute>
              <Favorites />
            </AuthRoute>
          }
        />
        <Route
          path="/login"
          element={
            <UnAuthRoute>
              <Login />
            </UnAuthRoute>
          }
        />
        <Route
          path="/create-account"
          element={
            <UnAuthRoute>
              <CreateAccount />
            </UnAuthRoute>
          }
        />
        <Route path="*" element={<span>Page not found</span>} />
      </Routes>
    </div>
  );
}

export default MainContent;
