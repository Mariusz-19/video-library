import { home, kids, library, favorite } from "../../assets/icons";
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
    url: "/home",
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
  return (
    <div className="left-bar">
      {menuItems.map((element) => (
        <a key={element.id} className="menu-item" href={element.url}>
          <span className="wrapper">
            <img src={element.icon} alt="" className="item-icon" />
          </span>
          {element.title}
        </a>
      ))}
    </div>
  );
}

export default LeftBar;
