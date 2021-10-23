
import React from 'react';
// import './components/Login'
import './App.css';
import Home from './components/Home.jsx';
import login from './components/login.jsx';
import register from './components/register.jsx';
import employee from './components/employee.jsx';
import{BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar'

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLogginActive: true
//     };
//   }

//   componentDidMount() {
//     //Add .right by default
//     this.rightSide.classList.add("right");
//   }

//   changeState() {
//     const { isLogginActive } = this.state;

//     if (isLogginActive) {
//       this.rightSide.classList.remove("right");
//       this.rightSide.classList.add("left");
//     } else {
//       this.rightSide.classList.remove("left");
//       this.rightSide.classList.add("right");
//     }
//     this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
//   }

//   render() {
//     const { isLogginActive } = this.state;
//     const current = isLogginActive ? "Register" : "Login";
//     const currentActive = isLogginActive ? "login" : "register";
//     return (
//       <div className="App">
//         <div className="login">
//           <div className="container" ref={ref => (this.container = ref)}>
//             {isLogginActive && (
//               <Login containerRef={ref => (this.current = ref)} />
//             )}
//             {!isLogginActive && (
//               <Register containerRef={ref => (this.current = ref)} />
//             )}
//           </div>
//           <RightSide
//             current={current}
//             currentActive={currentActive}
//             containerRef={ref => (this.rightSide = ref)}
//             onClick={this.changeState.bind(this)}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// const RightSide = props => {
//   return (
//     <div
//       className="right-side"
//       ref={props.containerRef}
//       onClick={props.onClick}
//     >
//       <div className="inner-container">
//         <div className="text">{props.current}</div>
//       </div>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <NavBar />
    <div >
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={login} />
      <Route exact path="/register" component={register} />
      <Route exact path="/employee" component={employee} />
      {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
    </Router>
  );
}


export default App;



