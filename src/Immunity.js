import Bloglist from "./Bloglist";
import useFetch from "./useFetch"
const Immunity = () => {
    const {data, isloading, err}= useFetch(' http://localhost:8000/blogs')
    return (
        <div>  
         {err  &&   <div className="Error">{ err }</div>}
        {isloading   && <div className="Loading">Loading blogs!!!</div> }
        {data && <Bloglist blogs={data.filter(blog => blog.category === 'Immunity booster')}  title="Immunity booster"/>  }
        </div>
    );
}
 
export default Immunity;