 
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


///////.................   ADD METHOD 

// here when we click add then a notes will add or render to notebox(simply in a section tag)

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
     
  
 //////...................... Next Method
 

  // it will render next (max - 5) element from list of Note(stored in this.state.Note)  

      Next(){
          if(this.state.Note.length >5 && this.state.end >= this.state.start + 5 )
         {
           this.setState((prevstate)=>(            
             {...prevstate,start:prevstate.start + 5 }
             
             ))
            }
          }
        

  /////////...........................Prev Method

  // it will render previous 5 element  (next and prev will only work when notes is greater than 5 otherwise it will be disabled)
         Prev(){
   if(this.state.start >5)
         {
           this.setState((prevstate)=>(   
             {...prevstate,start:prevstate.start - 5 }
                  ))
             }
         } 
          
 
  ///////////................... Update Method  

// On every action we perform on our app cause state change so  it will run on every time we make changes in state  

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


///////////......................... Delete Method

// it will delete specific note and onclick delete icon it will get that notebox id and it  will match with our Note index  if id(that would going to be delete)  and note index match then it will be removed from our Note state 
// and we will give new collection of note to state  


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

// I think this is where i having fun in coding  
// Onclick edit icon it will going to be run

//     my text container i.e,div.noteBox will going to display: none and it will be replaced with input tag with old text and here we can write new value so after that its value will transfer to text container back and ofcourse we have to change in state too so it can reflect after rendering otherwise on render it will be as previous value    

Edit(e){
 
  this.elem = document.getElementById('parent'+e.target.id)
  this.elem.childNodes[0].style.display= "none"
  this.inputelem = document.createElement('input')
  this.inputelem.value = this.elem.childNodes[0].innerText 
  this.inputelem.setAttribute('id', e.target.id.toString())
  this.inputelem.setAttribute('class','edit' )
  this.inputelem.onblur = this.onblur
  this.elem.childNodes[0].after(this.inputelem)
  this.inputelem.focus() 
  }

  // it is handled by onblur event

onblur(e){
this.elem.childNodes[0].style= "block"
 this.RES_2 =this.state.Note.map(function(item,index) {
   
  return index !==  parseInt(e.target.id) ? item : e.target.value
})
  e.target.remove()
  this.setState((prevstate)=> ({ ...prevstate, Note:this.RES_2}))
}


  render(){
  return (
    <>
    <div className="App">
    <section className="first">  
      <input id="note" type="text" className="form-control"  placeholder=" Note here" required/>
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