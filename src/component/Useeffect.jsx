import React, { useEffect, useState } from 'react'

const Useeffect = () => {
       const[resourse,setResourse]=useState("users")
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resourse}`)
  .then(response => response.json())
  .then(json => console.log(json))
    },[resourse])
  return (
    <div><div>
<button onClick={()=>{
    setResourse("users")
}}>Users</button>
<button onClick={()=>{
setResourse("posts")
}}>Post</button>
<button onClick={()=>{
    setResourse("comments")
}}>Comment</button>
</div>
<div>
{
    resourse
}
</div>
    </div>
  )
}

export default Useeffect