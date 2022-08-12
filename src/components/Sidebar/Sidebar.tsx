// sass
import React, { useState } from "react";
import "./Sidebar.scss";

type TestItems = {
  id: string; // must be unique
  name: string;
  age: number;
};

type SidebarProps = {
  title: string;
  items: TestItems[];
  children?: React.ReactNode;
  subTitle?: string;
};

function Sidebar({ items, title, subTitle }: SidebarProps) {
  const [count, setCount] = useState<number>(100);

  return (
    <div className="test-class">
      <p>{title}</p>
      <p>{subTitle}</p>
      {items.map((element) => (
        <p key={element.id}>
          <span>Id: {element.id}</span>
          <span>Name: {element.name}</span>
          <span>Age: {element.age}</span>
        </p>
      ))}

      <div>
        <p>Counter: {count}</p>
        <hr />
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default Sidebar;

