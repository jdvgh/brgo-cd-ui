'use client'
import React from 'react';
export default function LikeButton(){
const [likeCounter, setLikes] = React.useState(0);

function handlePress() {
  setLikes(likeCounter + 1);
}

return(
<div>
<button onClick={handlePress}>Likes: {likeCounter}</button>
</div>

)
}
