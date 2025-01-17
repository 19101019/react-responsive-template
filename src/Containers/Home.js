import React,{Component} from 'react';
import classes from './Home.module.css';
import {Route,Link} from 'react-router-dom';
// import {Container,Row,Col} from 'react-bootstrap';
import Landing from './Landing';
import Dashboard from './Dashboard';
import About from '../Components/Aboutus';
import logo from "../Resources/Images/logo.svg";

class Home extends Component{

state={
    overlaywidth:0,
}

openOverlay=()=>{
    this.setState({overlaywidth:100})
}
closeOverlay=()=>{
    this.setState({overlaywidth:0})
}

render(){
return(
<React.Fragment>
<div style={{width:this.state.overlaywidth + '%'}} className={classes.overlay}>
  <span className={classes.closebtn} onClick={this.closeOverlay}>&times;</span>
  <div className={classes.overlaycontent}>
    <ul>
        <li onClick={this.closeOverlay}><Link to="/dashboard">Dashboard</Link></li>
        <li onClick={this.closeOverlay}><Link to="/about">About Us</Link></li>
        <li onClick={this.closeOverlay}><Link to="/contact">Contact Us</Link></li>
     </ul>
  </div>
</div>

<div className={classes.Container}>
    <div fluid className={classes.navbarcontainer}>
        <div  className={classes.logocol} ><Link to=""><img src={logo} alt="companay-logo" width="30" height="30" /> <span></span></Link></div>
        <div  className={classes.navlist}>
            <ul>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </div>
        <span className={classes.hamburger} onClick={this.openOverlay}>&#9776;</span>
    </div>
    <div className={classes.contentcontainer}>
    <Route path='/' exact render={() => <Landing/>} />
    <Route path='/dashboard' exact render={() => <Dashboard/>} />
    <Route path='/about' exact render={() => <About/>} />
    </div>
{/* <Route path='/dash' exact render={() => <Dashboard/>} /> */}
</div>
</React.Fragment>
);
}
}

export default Home;