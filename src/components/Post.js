import React from "react";
// hook use param para obtener el id por enlace
import { useParams } from "react-router-dom";
// arreglo con los articulos dentro
import posts from "../data/posts";

const Post = () => {
    // ejecutamos el hook
    const {id} = useParams();
    return ( 
        <div>
           <h1>{posts[id-1].titulo}</h1>
           <p>{posts[id-1].texto}</p>
        </div>
     );
}
 
export default Post;