import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Post from '../Post/Post';
import Form from '../Form/Form'

import './App.css';

class App extends React.Component {

    state = {
        id: '',
        title: '',
        body: '',
        posts: [],
        showEdit: false,
    }
    showEdit = (id, title) => {
        this.setState({
            showEdit: true,
            id: id,
            title: title
        })
    }
    closeEdit = () => {
        this.setState({
            showEdit: false
        })
    }
    deletePost = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
        this.setState({
            posts: this.state.posts.filter(post => post.id !== id)
        })
    }
    // only for display
    addPostToList = (post) => {
        this.state.posts.push(post)
        this.setState({
            posts: this.state.posts
        })
    }
    updatePost = (id, title) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: title
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then(response => response.json())
        let index = this.state.posts.findIndex(post => post.id == id);
        this.state.posts[index].title = title;
        this.setState({
            showEdit: false,
            posts: this.state.posts
        })
    }

    onChange = event => {
        const { value, name } = event.target; // event target = HTML element  that fire event
        this.setState({
            // dynamic key 
            [name]: value
        })
    }

    // run after FIRST render of component
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    posts: json.slice(0, 6) // get only first 6 items
                })
            })

    }
    render() {
        // render laoder before get posts from server
        if (this.state.posts.length == 0) {
            return 'loading....'
        }

        return (
            <div className='App' >
                <h1>POSTS PROJECT</h1>
                <div className="mainBackground">
                    <div className="flex-container">
                        <div className="form">
                            {
                                <Form addPostToList={this.addPostToList} />
                            }
                        </div>
                        <img className="imgBox" src="https://www.newspost.live/en/wp-content/uploads/2016/10/news-logo-300x281.png" />
                        <div className="list">
                            <div>
                                <Dialog open={this.state.showEdit} onClose={this.closeEdit} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Update post</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            To update post , you can enter new title.
                                        </DialogContentText>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label={this.state.title}
                                            type="name"
                                            fullWidth
                                            multiline
                                            rows="2"
                                            onChange={this.onChange}
                                            name="title"
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.closeEdit} color="primary">
                                            Cancel
                                        </Button>
                                        <Button onClick={() => this.updatePost(this.state.id, this.state.title)} color="primary">
                                            Update
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                            {this.state.posts.map((post, index) => {
                                return <Post key={index} post={post} deletePost={this.deletePost} showEdit={this.showEdit} />
                            })}
                        </div>
                        {}
                    </div>
                </div>
            </div>
        );
    }
}


export default App;

