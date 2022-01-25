import React from "react";
// useParm para obtener el id por enlace y Navigate para redireccionar la pagina
import { useParams, Navigate} from "react-router-dom";
// arreglo con los articulos dentro
import posts from "../data/posts";

const Post = () => {
    // ejecutamos el hook
    const {id} = useParams();
    return ( 
        <div>
            {posts[id-1]?
            <>
           <h1>{posts[id-1].titulo}</h1>
           <p>{posts[id-1].texto}</p>
           </>
           :<Navigate replace to={'/blog'}/>
            }
        </div>
     );
}
 
export default Post;