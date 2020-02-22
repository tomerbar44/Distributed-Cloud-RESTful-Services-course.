import React from 'react';
import { MdEdit, MdDelete } from "react-icons/md"


// load component level css

import './Post.css';


class Post extends React.Component {

    render() {
        const { title, body, id } = this.props.post;
        const { deletePost, showEdit } = this.props
        return (
            <div className='Post' >
                <h4 className='title'>{title} {id} </h4>
                <div className="buttonsArea">
                    <button className="deleteButton" onClick={() => deletePost(id)}><MdDelete style={{ width: "25px", height: "25px" }} /></button>
                    <button className="editButton" onClick={() => showEdit(id, title)}><MdEdit style={{ width: "25px", height: "25px" }} /></button>
                </div>
                <hr />
            </div>
        )
    }
}

export default Post;