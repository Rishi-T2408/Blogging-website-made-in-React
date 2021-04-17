
import fruit from './Images/fruit.svg'
import immune from './Images/immune.svg'
import weight from './Images/weight.svg'
import protein from './Images/protein.svg'
import { Link } from 'react-router-dom'
const Category = () => {

    return (
    <div className="Griddy">
        <div className="one">
        <Link to="/Fruitsbenefits">
           <img src={fruit} alt="One of the categroy" className="catimg"/> 
        </Link>
           <p className="catp">Fruits benefits</p>    
        </div>
    
        <div className="two">
        <Link to='/Immunityboosters'><img src={immune} alt="One of the categroy" className="catimg"/>
        </Link> <p className="catp">Immunity booster</p>
        </div>

        <div className="three">
        <Link to='/Weightloss'><img src={weight} alt="One of the categroy" className="catimg"/>
        </Link><p className="catp">Weight killer</p>
        </div>

        <div className="four">
        <Link to='/Proteins'><img src={protein} alt="One of the categroy" className="catimg"/>
        </Link>  <p className="catp">Natural protein</p>
        </div>
    </div>    

    );
}
 
export default Category;