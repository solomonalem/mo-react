import React from "react";

class Like extends React.Component{

 

    render(){
        let name = 'Like';
        let font='font-weight-normal'
        if(this.props.liked) {
            name +='d';
            font ='font-weight-bold';
        }
               
        return  (<i className={font} aria-hidden="true" onClick={this.props.onClick} style={{cursor:"pointer"}}>{name}</i>)
        
    }

}

export default Like;