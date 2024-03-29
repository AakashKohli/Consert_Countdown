import React from "react";
import { scroller } from "react-scroll";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const SideDrawer = props => {
  const scrollToElements = element => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offSet: -150
    });
    props.onClose(false);
  };

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => scrollToElements("Event starts In")}>
          Event starts In
        </ListItem>
        <ListItem button onClick={() => scrollToElements("Venue Info")}>
          Venue Info
        </ListItem>
        <ListItem button onClick={() => scrollToElements("Highlights")}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrollToElements("Pricing")}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrollToElements("Location")}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
