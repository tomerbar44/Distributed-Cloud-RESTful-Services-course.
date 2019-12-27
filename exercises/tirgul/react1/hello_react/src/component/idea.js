import React, { Component } from "react";
import { MdDelete, MdEdit, MdSave } from 'react-icons/md';
class Idea extends Component {
    render() {
        return ( < div className = "idea" > < p > Tripper Application < /p> <
            span >
            <
            button > < MdEdit / > Edit < /button > <
            button > < MdDelete / > Delete < /button> < /
            span > < /div > );

        }
    }
    export default Idea;