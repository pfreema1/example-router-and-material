import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import DocumentIcon from 'material-ui/svg-icons/file/folder';
import FormIcon from 'material-ui/svg-icons/action/description';
import StatementsIcon from 'material-ui/svg-icons/editor/monetization-on';
import Dialog from 'material-ui/Dialog';

const wrapperStyle = {
  width: '100vw',
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
};

const dataObj = [
  {
    title: 'foo',
    icon: DocumentIcon
  },
  {
    title: 'bar',
    icon: FormIcon
  },
  {
    title: 'baz',
    icon: StatementsIcon
  }
];

class MainContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDialogTitle: null,
      open: false
    };
  }

  handleClick = title => {
    console.log('title passed in:  ', title);
    this.setState({
      currentDialogTitle: title,
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    return (
      <div style={wrapperStyle}>
        {dataObj.map(data => {
          let Icon;

          if (data.title === 'foo') Icon = DocumentIcon;
          else if (data.title === 'bar') Icon = FormIcon;
          else if (data.title === 'baz') Icon = StatementsIcon;
          else Icon = null;

          return (
            <RaisedButton
              label={data.title}
              icon={<Icon />}
              onClick={this.handleClick.bind(null, data.title)}
            />
          );
        })}
        <Dialog
          title={this.state.currentDialogTitle}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        />
      </div>
    );
  }
}

export default MainContainer;
