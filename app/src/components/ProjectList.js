import React from 'react';
import Post from './Project';
import PropTypes from 'prop-types';

export default class ProjectList extends React.Component{
    render(){
        return(
            <div>
                {this.props.projects.map((post)=>{
                    return(
                        <Post key={post.id} post={post} />
                    )
                })}
            </div>
        )
    }
}

ProjectList.propType = {
    projects: PropTypes.arrayOf({
        post: PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            description: PropTypes.string,
            completed: PropTypes.bool
        })
    })
}