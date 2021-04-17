import Bloglist from "./Bloglist";
import useFetch from "./useFetch"
const Weightloss = () => {
    const {data, isloading, err}= useFetch(' http://localhost:8000/blogs')
    return (
        <div>  
         {err  &&   <div className="Error">{ err }</div>}
        {isloading   && <div className="Loading">Loading blogs!!!</div> }
        {data && <Bloglist blogs={data.filter(blog => blog.category === 'Weight loss')}  title="Weight loss"/>  }
        </div>
    );
}
 
export default Weightloss;