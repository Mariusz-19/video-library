import { ReactNode } from "react";
import "./PageButton.scss";

type PageButtonProps = {
  children: ReactNode;
  active: boolean;
};
function PageButton({ children, active }: PageButtonProps) {
  return <button className="page-buttons">{children}</button>;
}

export default PageButton;
