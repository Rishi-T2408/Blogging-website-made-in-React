import { Link } from "react-router-dom";

const Category = () => {

    return (
    <div className="Griddy">
        <div className="one">
           <img src="/" alt="One of the categroy" className="catimg"/> 
           <p className="catp">Fruits benefits</p>    
        </div>
        <div className="two">
            <img src="/" alt="One of the categroy" className="catimg"/>
            <p className="catp">Immunity booster</p>
        </div>
        <div className="three">
            <img src="/" alt="One of the categroy" className="catimg"/>
            <p className="catp">Weight killer</p>
        </div>
        <div className="four">
            <img src="/" alt="One of the categroy" className="catimg"/>
            <p className="catp">Natural protein</p>
        </div>
    </div>    

    );
}
 
export default Category;