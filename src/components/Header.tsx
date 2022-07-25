import React from "react";

interface Props {
  children: JSX.Element;
}

const Header: React.FC<Props> = ({ children }) => {
  return <header>{children}</header>;
};

export default Header;
