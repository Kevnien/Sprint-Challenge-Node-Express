import React from 'react';

export default class Post extends React.Component{
    render(){
        return(
            <div>
                <div className='project'>
                    <div className='name'>
                        <h2>Project name:</h2> "{this.props.post.name}"
                    </div>
                    <div className='description'>
                        <h3>description:</h3> {this.props.post.description}
                    </div>
                    <div className='completed'>
                        <h3>completed:</h3>{this.props.post.completed}
                    </div>
                </div>
            </div>
        )
    }
}