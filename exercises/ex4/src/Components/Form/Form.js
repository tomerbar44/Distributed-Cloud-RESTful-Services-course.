import React from 'react';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add'
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function StateTextFields(props) {

  function addPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
    setTitle('');
    setBody('');
    setDesc('');
    const post = {
      userId: 1,
      id: 101,
      title: title,
      body: body,
    }
    // add only for display
    props.addPostToList(post)

  }

  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [desc, setDesc] = React.useState('');
  const handleChangeTitle = event => {
    setTitle(event.target.value);
  };
  const handleChangeBody = event => {
    setBody(event.target.value);
  };
  const handleChangeDesc = event => {
    setDesc(event.target.value);
  };


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField label="Title" value={title} onChange={handleChangeTitle} style={{ background: "white", width: "327px", height: "48px", marginTop: 18, marginLeft: 17, marginRight: 18, boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)", boxSizing: "border-box" }} />
        <TextField label="Body" value={body} onChange={handleChangeBody} style={{ background: "white", width: "327px", height: "48px", marginTop: 18, marginLeft: 17, marginRight: 18, boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)", boxSizing: "border-box" }} />
        <TextField label="Description" rows="5" multiline value={desc} onChange={handleChangeDesc} style={{ background: "white", width: "327px", height: "118px", marginTop: 18, marginLeft: 17, marginRight: 18, boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.15)", boxSizing: "border-box" }} />
      </div>
      <Tooltip title="Add" aria-label="add" placement="top-start">
        <Fab color="secondary" style={{ marginTop: 50, marginLeft: 154, background: "#FD5842" }} >
          <AddIcon
            onClick={addPost}
          />
        </Fab>
      </Tooltip>
    </form>
  );
}
