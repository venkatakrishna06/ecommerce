import './App.css';

import HomePage from "./pages/HomePage/HomePage";
import {Switch,Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Shop from "./pages/Shop/Shop";
import SignInUp from "./pages/Sign-in-up/Sign-in-up";
import {auth,createUSerProfileDocument} from "./firebase/firebase-utils";
import {Component,} from "react";

class App extends Component {
    constructor() {
        super();
        this.state={
            currentUser:null
        };
    }

    unSubscribeFromAuth=null;
componentDidMount() {
       this.unSubscribeFromAuth =  auth.onAuthStateChanged(async userAuth=>{

if (userAuth) {
    const userRef = createUSerProfileDocument(userAuth);
    (await userRef).onSnapshot(snapShot=>{
    this.setState({
        currentUser:{
            id : snapShot.id,
            ...snapShot.data()
        }
    });
    console.log(this.state)
 });


}
this.setState({
    currentUser:userAuth
});

       });
}
componentWillUnmount() {
    this.unSubscribeFromAuth();
}


    render() {
    return (
        <div className="App">
            <Header currentUser={this.state.currentUser}/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/shop' component={Shop}/>
                <Route path='/signin' component={SignInUp}/>
            </Switch>
        </div>
    );
}
}
export default App;
