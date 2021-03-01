 
import React from 'react'
import EachNote from './EachNote'
import Button from './Button'

class TO_DO extends React.Component{

constructor(props)
{
  super(props)
 this.state = {Note:[],start:1,end:0}
 this.index = 0
 this.add = this.add.bind(this)
 this.Delete = this.Delete.bind(this)
 this.Update = this.Update.bind(this)
 this.Next =this.Next.bind(this)
 this.Prev = this.Prev.bind(this)
 this.Edit = this.Edit.bind(this)
 this.onblur = this.onblur.bind(this)
}


//  ADD METHOD 

add(){
  
  this.note = document.getElementById('note').value;

     this.setState( (prevstate)=> {
       return  { 
         Note:[...prevstate.Note,this.note], 
         start:prevstate.start ,
         end:prevstate.end+ 1}      
          })
         document.getElementById('note').value = ""
      }
     
  
 // Next Method     

      Next(){
 
         if(this.state.Note.length >5 && this.state.end >= this.state.start + 5 )
         {
           this.setState((prevstate)=>(            
             {...prevstate,start:prevstate.start + 5 }
             
             ))
            }
          }
        

  // Prev Method

         Prev(){
console.log(this.state);
   if(this.state.start >5)
         {
        
     console.log("prev working");
        
        // this.diff = this.state.end - this.state.start 
         this.setState((prevstate)=>(   

             {...prevstate,start:prevstate.start - 5 }
             
             ))
             
            }
         } 
          
 
  // Update Method  

          Update(){
            
  if(this.state.Note == null ||this.state.Note.length == 0 )
  {
    this.result = <p> Not Found any Notes....</p> 
    return this.result
  }
  else
  {
    this.element = this.state.Note.map((val,index)=>
    { 
    if(index >= this.state.start -1 && index <= this.state.start + 3)
    {     
     return  <EachNote key={index} val={val} id={index} Delete={this.Delete} Edit={this.Edit}/>
      }
      
  })
  return this.element
  }
}


// Delte Method

 Delete(e)
 { 
    
  if(parseInt(e.target.id)+ 1 === this.state.start && this.state.start != 1 && this.state.end === this.state.start )
      { 
        this.setState((prevstate)=>(            
          {...prevstate,start:prevstate.start - 5}
          
          ))
       }

      
         
  this.RES= this.state.Note.filter(function(item,index) {
  return index !==  parseInt(e.target.id)
  })
this.setState((prevstate)=> ({ ...prevstate, Note:this.RES,end:prevstate.end-1}))
  }
// Lets Edit our data on real time

Edit(e){
 
  console.log("editing click");
  this.elem = document.getElementById('parent'+e.target.id)
  this.elem.childNodes[0].style.display= "none"
  this.inputelem = document.createElement('input')
  this.inputelem.value = this.elem.childNodes[0].innerText 
  this.inputelem.setAttribute('id','edit')
  this.inputelem.onblur = this.onblur
  this.elem.childNodes[0].after(this.inputelem)
  this.inputelem.focus()
  console.log(this.elem.childNodes[0].innerText);
}

onblur(e){
this.elem.childNodes[0].style= "block"
this.elem.childNodes[0].innerText = this.inputelem.value
e.target.remove()

}


  render(){
  return (
    <>
    <div className="App">
    <section className="first">  
      <input id="note" type="text" className="form-control"  placeholder=" Note here"/>
      <button className="btn" onClick={this.add} >ADD </button>
      <hr/>
       </section>
       <section className="second">
      {this.Update()}    
        </section>
<footer>
<Button Prev={this.Prev} Next={this.Next} length={this.state.end}/>

</footer>    

  </div>
</>
  )
    
}
}
export default TO_DO