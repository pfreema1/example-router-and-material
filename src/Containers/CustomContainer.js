import React, { Component } from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText
} from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";

class CustomContainer extends Component {
  render() {
    const { cardTitle } = this.props;

    return (
      <div>
        <Card>
          <CardTitle
            title={this.props.cardTitle}
            subtitle={this.props.cardSubtitle}
          />
          {this.props.buttonTextArr.map(buttonText => {
            return <RaisedButton label={buttonText} />;
          })}
        </Card>
      </div>
    );
  }
}

export default CustomContainer;
