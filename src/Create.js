import { useState } from "react";
import {useHistory} from 'react-router-dom';
const Create = () => {
    const [title,setTitle]=useState('Add title to your blog') 
    const [body,setBody]=useState('')
    const [author,setAuthor]=useState('Rishi Raj Tiwari')  //So by changing the state and using it i have the tite data
    const [isPending,setIsPending]=useState(false)
    const history=useHistory();
    const handleSubmit = (e) =>{
        setIsPending(true);
        e.preventDefault();
        const blog={title, body, author}
        fetch('http://localhost:8000/blogs',
        {
            method: 'Post',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)  //Whatever data iam adding iam converting it into JSON string

        }).then(()=>{
            console.log('new blog added'); 
            setIsPending(false);
            history.push('/')
        })

    }  //In while using handleSubmit do not give () nhi tohh vohh function kaam nhi krega

    return (
        <div className="create">
            <h2 className="Create">Add an New blog here</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    required
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                >
                  </input>

                <label>Blog body:</label>
                <textarea
                required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}>
                </textarea>

                <label>Blog's author:</label>
                <select
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}>
                    <option value="Deepak">Deepak</option>
                    <option value="Rishi">Rishi</option>
                    <option value="Kunal">Kunal</option>
                    <option value="Anshima">Anshima</option>
                    <option value="Ankit">Ankit</option>
        
                </select>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding new blog...</button>}

                <h2 className="Pre1">Preview your blog here</h2>
                <div className="Pcover">
                <div className="P1">
                    <p><span>Title-</span> {title}</p></div>
                <div className="P2"><p><span>Body-</span> {body}</p></div>
                <div className="P3"><p><span>Author-</span> {author}</p></div>
                </div>
            </form>
        </div>
      );
}
 
export default Create;
