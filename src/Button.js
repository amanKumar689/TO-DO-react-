const Button =(props)=>{


   return props.length>5?(<>

<button className="btn btn-primary prev " onClick={props.Prev}> Prev </button>
<button className="btn btn-primary next" onClick={props.Next}>Next </button>

</>) : null

}
export default Button