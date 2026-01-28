import React from 'react'

const Post = React.memo(({value})=>{
    console.log("Post Re-Render");
    return (

        <div>
            <h1>Your Name is {value.name} and your Age is {value.age}</h1>
        </div>
    )
})

export default Post;