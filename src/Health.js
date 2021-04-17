import allblog from './Images/allblog.svg'
import WeightG from "./Images/WeightG.svg"
import ProteinG from "./Images/ProteinG.svg";
import { Link } from 'react-router-dom';
const Health = () => {
    return ( 
        <div className="Hcontainer">
            <div className="firstimg">
                <Link to="/Allblogs"><img src={allblog} alt="Read all blogs" className="RLB"/></Link>
            </div>
            <div className="secondimg">
                <Link to="/Weightloss"><img src={WeightG} alt="Weight loss tips" className="SI"/></Link>
                <Link to="/Proteins"><img src={ProteinG} alt="Read about medicated plants" className="SI2"/></Link>
            </div>
        </div>
     );
}
 
export default Health;
