import { useContext, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { home, kids, library, favorite } from "../../assets/icons";
import { AuthContext } from "../AuthProvider/AuthProvider";
import "./LeftBar.scss";

type MenuItem = {
  id: string;
  title: string;
  url: string;
  icon: string;
};

const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Główna",
    url: "/",
    icon: home,
  },
  {
    id: "2",
    title: "Ulubione",
    url: "/favorite",
    icon: favorite,
  },
  {
    id: "3",
    title: "Biblioteka",
    url: "/lib",
    icon: library,
  },
  {
    id: "4",
    title: "Dla dzieci",
    url: "/kids",
    icon: kids,
  },
];

function LeftBar() {
  const { user } = useContext(AuthContext);

  const menuItemsMemo = useMemo(() => {
    if (user) {
      return menuItems;
    }
    return menuItems.filter((item) => item.title !== "Ulubione");
  }, [user]);

  return (
    <div className="left-bar">
      {menuItemsMemo.map((element) => (
        <NavLink key={element.id} className="menu-item" to={element.url}>
          <span className="wrapper">
            <img src={element.icon} alt="" className="item-icon" />
          </span>
          {element.title}
        </NavLink>
      ))}
    </div>
  );
}

export default LeftBar;
