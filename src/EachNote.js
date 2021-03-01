


const EachNote = (props)=> {


    return(
       <>

   <div className="eachNote" id={'parent' +props.id}>               
  <div className="noteBox"> <p> {props.val}</p></div>
  <div className="note-controller">
      <button className="btn" id={props.id} onClick={props.Edit}><i className="far fa-edit" id={props.id} ></i>  </button>
      <button className="btn" id={props.id} onClick={props.Delete}> <i className="far fa-trash-alt" id={props.id}></i> </button>
  </div>    
</div>
       </>
        ) 
}

export default EachNote 