import Bloglist from "./Bloglist";
import useFetch from "./useFetch"
const Fruitbene = () => {
    const {data, isloading, err}= useFetch(' http://localhost:8000/blogs')
    return (
        <div>  
         {err  &&   <div className="Error">{ err }</div>}
        {isloading   && <div className="Loading">Loading blogs!!!</div> }
        {data && <Bloglist blogs={data.filter(blog => blog.category === 'Fruit benfits')}  title="Fruit benfits"/>  }
        </div>
    );
}
 
export default Fruitbene;