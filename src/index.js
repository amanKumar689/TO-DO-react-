import React from 'react';
import ReactDOM, { render } from 'react-dom';


//   function Greeting(props)
// {
 
//    if (props.Islogin)
//    {
//      return (<h1>Welcome to my Login Page </h1>)
//     }
//     else
//     {
//      return (<h1>I think you are a guest !  </h1>)

//    }

// }

// function Signout(props){
   
// return (<a href="#" onClick={props.click}> Log Out</a>)
// }
// function Signin(props){
   
// return (<a href="#" onClick={props.click}>Log in</a>)
// }

// class LoginApp extends React.Component {

// constructor(props){
//   super(props)
//   this.state = {Islogin:false}
//   this.BtnHandler =this.BtnHandler.bind(this)
//   this.Loginhander = this.Loginhander.bind(this)
//   this.LogoutHandler = this.LogoutHandler.bind(this)
// }

// Loginhander()
// {

//   this.setState((prev)=>({Islogin:true}))
  
// }

// LogoutHandler(){
  
//   this.setState((prev)=>({Islogin:false}))

// }
// BtnHandler(){

//   const elem = this.state.Islogin ? <Signout Islogin={this.state.Islogin}  click={this.LogoutHandler}/> : 
//  <Signin Islogin={this.state.Islogin} click={this.Loginhander}/> 
//  return elem
// }


// render(){

//   return ( <div><Greeting Islogin={this.state.Islogin}/>{this.BtnHandler()}</div>)

// }


// }


// // render list of name to my 

// function Names(name){

//  var fullList = name.person.map((person,index)=>{ return <li key={person}>{person}</li>})

//  fullList = <ul> {fullList}</ul>
//   return fullList

// }


// Form Management

// class Form extends React.Component{


//  GetData(e){
  
//   console.log(e.target.value);


// }

//   render(){

//     return (
//     <form> 
//     <input type="text" placeholder="good one" onChange={this.GetData}/>
//      <input type="submit" value="Send" />
    
//      <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//     </form>)
//   }
// }


//  Celcius and farnheit management(Exchanger)

// function Inputhandle(props)
// {  
  
//   if(props.type == 'c')
//   {
//     return ( 

//       <div> 
//             <input type="number" placeholder={props.type}  value={props.celvalue} onChange={props.func.far}/>
//           </div>
//     ) 
//   }

//   else
//   {
//     return ( 

//       <div> 
//             <input type="number" placeholder={props.type}  value={props.farvalue} onChange={props.func.cel}/>
//           </div>
//     ) 

//   }
     
// }

// function Outputhandle(props)
// { 

//    if(props.type =='c')
//    { 
// return ( 
  
//       <div> 
//             <input type="text" placeholder='f' defaultValue={props.farvalue}/>
//           </div>
//     )  
//    }
//    else
//    {

//     return ( 

//       <div> 
//             <input type="text" placeholder='c' defaultValue={props.celvalue}/>
//           </div>
//     )  
//    }

// }


// class Converter extends React.Component {


//   constructor(props)
//   {
//     super(props)
//     this.state = {type:'c',celvalue:"",farvalue:""}
//     this.handlecelcius = this.handlecelcius.bind(this)
//     this.handlefarnheit = this.handlefarnheit.bind(this)
//     this.valUpdatefar = this.valUpdatefar.bind(this)
//     this.valUpdatecel = this.valUpdatecel.bind(this)
//    }

//   handlecelcius(){
//     this.setState({type:"c",farvalue:"",celvalue:""}) 
//   }
//   handlefarnheit(){
//     this.setState(({type:"f" , farvalue:"",celvalue:""})) 
//   }
  
//   valUpdatefar(e){
    
//     //  celcius into farnheit 
//     const cel = parseInt(e.target.value);
//     const far = (cel * 9/5 ) + 32
    
//     this.setState(prev=> ({type:"c" , farvalue:far,celvalue:cel}) )
    
    
//   } 
//   valUpdatecel(e){
    
//     //  farnheit into celcius
//     const far = parseInt(e.target.value);
//     const cel = (far - 32 ) * 5/9
//     this.setState(prev=> ({type:"f" , celvalue:cel,farvalue:far}) )
   
//         } 


//   render() {

//  return (
//    <div> 
   
//    {  <Inputhandle type={this.state.type} celvalue={this.state.celvalue} farvalue={this.state.farvalue} func={{cel:this.valUpdatecel,far:this.valUpdatefar}}/>  } 
//    {<Outputhandle type={this.state.type} celvalue={this.state.celvalue} farvalue={this.state.farvalue} />}
   
//    <button className="btn" onClick={this.handlecelcius}> C </button>
//    <button className="btn" onClick={this.handlefarnheit}> F </button>
   
   
//    </div>

//  )

   
//   }
// }



// function FormField(props){

  
//   return (

//     <>
// <form onSubmit={props.onSubmit}>
//    <input type="text" placeholder="FirstName" onKeyUp={props.onKeyUp}  />
//    <input type="text" placeholder="LastName" ref={props.REF}/>
//    <button className="btn" > Submit</button>





//    </form>

//     </>
//   )

// }


// class InputFocus extends React.Component{

//   constructor(props)
//   {
//          super(props)
//          this.lastName = React.createRef();
//          this.keyPress = this.keyPress.bind(this)
//        this.state = {open:false}     
//   }
 
//   showData(){}
//   keyPress(e){
//     console.log(e.keyCode)
//     if(e.keyCode === 13)
//     {
//       this.lastName.current.focus();
//     }
//   }
//   prevent(e){  e.preventDefault();console.log('submitted')  }
//   render(){

//      return(
//      <>
 
//  {/* <form onSubmit={this.prevent}>
//    <input type="text" placeholder="FirstName" onKeyUp={this.keyPress}  />
//    <input type="text" placeholder="LastName" ref={this.lastName}/>
//    <button className="btn" onClick={this.showData}> Submit</button>
//    </form> */}
// <FormField open={this.state.open} onSubmit={this.prevent} onKeyUp={this.keyPress} REF={this.lastName}/>

//      </> 
//      )
      
//   }
import Button from './component'

// }

// IF STATE UPDATE THEN RENDER
// class App extends React.Component{

// constructor(props)
// {
//   super(props)
//  this.state= {val:10}
//  this.run = this.run.bind(this)
// }
// run(){

//   this.setState((prevstate)=>({val:10}))

// }
// shouldComponentUpdate( nextprops,nextstate){ 

//   const result =this.state.val === nextstate.val 
//     return result ? false : true 

// }

// render(){
//   return (
//     <> 
    
//     {console.log('renderning')}
//     <button onClick={this.run}>Click me</button>
//      </>
//   )
// }
// }

// class PureApp extends React.PureComponent{

//   constructor(props)
//   {
//     super(props)
//    this.state= {val:10 ,name:"aman kumar"}
//    this.run = this.run.bind(this)
//   }
//   run(){
  
//     this.setState((prevstate)=>({...prevstate,name:"aman kuma"}))
  
//   }
//   // shouldComponentUpdate( nextprops,nextstate){ 
  
//   //   const result =this.state.val === nextstate.val 
//   //     return result ? false : true 
//   // }
  
//   render(){
//     return (
//       <> 
      
//       {console.log('renderning')}
//       <button onClick={this.run}>Click me</button>
//        </>
//     )
//   }

// }




 // To Do APP  WElcome
 
import TO_DO from './TO_DO.js'
import './app.css'



  ReactDOM.render(
<> <TO_DO/></>
    ,document.getElementById('root')
  );


