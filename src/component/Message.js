import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Chip from 'material-ui/Chip';
import { blue900 } from "material-ui/styles/colors";


const styles = {
  chip: {
    margin: 4,
  },
  name: {
    color: blue900,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
};

const style = {margintop: -5};

export default class Message extends React.Component {
  render() {
    return (
      <div className="Message">
      <List>
        <ListItem disabled="true">
          <div className="">
            <span style={styles.name}>{this.props.message.user_name}さん</span>
            <Chip style={styles.chip} >
              {this.props.message.text}
            </Chip>
          </div>
        </ListItem>
      </List>
      </div>
    );
  }
}