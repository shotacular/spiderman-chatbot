import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import NoProfile from "../assets/img/no-profile.png";
import Spiderman from "../assets/img/spiderman.png";

const Chat = (props) => {
  // 左右どちらに詰めるか
  const isQuestion = props.type === "question";
  const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return (
    <ListItem className={classes}>
      <ListItemAvatar>
        {isQuestion ? (
          <Avatar alt="icon" src={Spiderman} />
        ) : (
          <Avatar alt="icon" src={NoProfile} />
        )}
      </ListItemAvatar>
      {isQuestion ? (
      <div className="p-chat-left__bubble">{props.text}</div>
      ) : (
        <div className="p-chat-right__bubble">{props.text}</div>
      )}
    </ListItem>
  );
};

export default Chat;
