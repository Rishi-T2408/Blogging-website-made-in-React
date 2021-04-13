import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch" 
const BlogDetail = () => {
    const { id } = useParams()    //This allow ous to route parameters or grab parameter from the route
    //So now the route parameter i want i will take it using usepram
    const {data: blog, isloading, err}= useFetch(' http://localhost:8000/blogs/'+id)  //So this is the endpoint from which iam grabbing the particular blog
    //As I have taken the dynamic variable from the router link so and as it is id of specific blog that I wanted to see so I can display it's content
    const History=useHistory();
    const handleClick=()=>{
        fetch('http://localhost:8000/blogs/'+id,{
            method: 'DELETE'

        })
        .then(()=>{
            History.push('/')
        }
        )
    }


    return (
        <div className="Details">
            <h2>Let's dive into this blog!!</h2>
            {err  &&   <div className="Error">{ err }</div>}
            {isloading   && <div className="Loading">Loading Content!!!</div> }
            {blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <h3>Written by - {blog.author}</h3>
                    <div><p className="Effect">{blog.body}</p></div>
                </article>
            )}
            <button onClick={handleClick}>Delete this blog</button>
            
                      
        </div>
 );
}
 
export default BlogDetail;