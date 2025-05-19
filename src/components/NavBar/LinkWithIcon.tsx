import type React from "react";
import "./LinkWithIcon.css";
import { NavLink } from "react-router-dom";

interface LinkWithIconProps {
  title: string;
  link: string;
  emoji: string;
  sidebar?: boolean;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  title,
  link,
  emoji,
  sidebar = false,
}) => {
  return (
    <NavLink
      to={link}
      className={sidebar ? "align_center sidebar_link" : "align_center"}
    >
      {title} <img src={emoji} alt="" className="link_emoji" />
    </NavLink>
  );
};

export default LinkWithIcon;
