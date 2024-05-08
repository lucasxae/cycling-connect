import React from "react";
import Card from "../Card/Card";
import IconedListItem from "../IconedListItem/IconedListItem";
import { RiDashboardFill } from "react-icons/ri";
import { IoPeople, IoHelp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { LuCalendarCheck, LuMessagesSquare } from "react-icons/lu";
import { MdOutlineDirectionsBike } from "react-icons/md";

const Sidebar: React.FC = () => {
  return (
    <div style={cardContainerStyle}>
      <Card>
        <ul style={listStyle}>
          <IconedListItem
            Icon={RiDashboardFill}
            text="Dashboard"
          ></IconedListItem>
          <IconedListItem Icon={IoPeople} text="Atletas" />
          <IconedListItem Icon={FaClipboardList} text="Planilhas" />
          <IconedListItem Icon={LuCalendarCheck} text="Eventos" />
          <IconedListItem Icon={MdOutlineDirectionsBike} text="Training" />
          <IconedListItem Icon={LuMessagesSquare} text="Feedbacks" />
          <IconedListItem Icon={IoHelp} text="Ajuda" />
        </ul>
      </Card>
    </div>
  );
};

const cardContainerStyle: React.CSSProperties = {
  padding: "1rem",
};

const listStyle: React.CSSProperties = {
  listStyleType: "none",
  padding: "0",
  margin: "0",
};

export default Sidebar;
