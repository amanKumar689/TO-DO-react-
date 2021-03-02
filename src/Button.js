const Button =(props)=>{


   return props.length>5?(<>

<button className="btn  prev " onClick={props.Prev}> Prev </button>
<button className="btn  next" onClick={props.Next}>Next </button>

</>) : null

}
export default Button