import Health from "./Health";
import Category from "./Category";
const Home = () => {
    return (
         <div className="home"> 
            <Health />
            <h2 className="allblog1">Categories</h2>  
            <Category />     
        </div>
      );
}
 
export default Home;
