 const Button = (props)=>{


    if(props.disabled)
    {
        return(<> <h1>disabled btn</h1></>)
        
    }
    return( <> <h1>Not disabled btn</h1></> )


 }

 export default Button

