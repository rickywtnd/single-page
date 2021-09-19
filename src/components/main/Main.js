import "./Main.css"
import { MoreHoriz , Search } from '@material-ui/icons';
import avatar from "../../assets/noimagee.png";

export default function Main() {
    return (
        <><div className="Main">
            <h1>Personnel List</h1>
            <a>List of all personnels</a>
            <div className="search">
                <label>
                    <input type="text" placeholder="Find Personnel"/>
                </label>
            </div>           
        </div>
        <div className="recent-grid">
            <div className="grid-single">
                <h4>Personnel ID : 
                <MoreHoriz/></h4>    
                <img width="150" src={avatar} alt="avatar" />
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Name</td>
                        </tr>
                        <tr> 
                            <td>Telephone</td>
                        </tr>
                        <tr>   
                            <td>Birthday</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                        </tr>    
                    </thead>
                </table>
            </div>
            <div className="grid-single">
                <h4>Personnel ID : 
                <MoreHoriz/></h4>    
                <img width="150" src={avatar} alt="avatar" />
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Name</td>
                        </tr>
                        <tr> 
                            <td>Telephone</td>
                        </tr>
                        <tr>   
                            <td>Birthday</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                        </tr>    
                    </thead>
                </table>
            </div>
            <div className="grid-single">
                <h4>Personnel ID : 
                <MoreHoriz/></h4>    
                <img width="150" src={avatar} alt="avatar" />
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Name</td>
                        </tr>
                        <tr> 
                            <td>Telephone</td>
                        </tr>
                        <tr>   
                            <td>Birthday</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                        </tr>    
                    </thead>
                </table>
            </div>
            <div className="grid-single">
                <h4>Personnel ID : 
                <MoreHoriz/></h4>    
                <img width="150" src={avatar} alt="avatar" />
                <table >
                    <thead>
                        <tr>
                            <td>Name</td>
                        </tr>
                        <tr> 
                            <td>Telephone</td>
                        </tr>
                        <tr>   
                            <td>Birthday</td>
                        </tr>
                        <tr>
                            <td>Email</td>
                        </tr>    
                    </thead>
                </table>
            </div>
        </div>            
        </>
    );
}