


const EachNote = (props)=> {


    return(
       <>

   <div className="eachNote" id={'parent' +props.id}>               
  <div className="noteBox"> {props.val} </div>
  <div className="note-controller">
      <button className="btn"><i className="far fa-edit"></i>  </button>
      <button className="btn" id={props.id} onClick={props.Delete}> <i className="far fa-trash-alt" id={props.id}></i> </button>
  </div>    
</div>
       </>
        ) 
}

export default EachNote 