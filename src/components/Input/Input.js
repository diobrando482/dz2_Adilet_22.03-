const Input = (placeholder,name )=>{
    return(
        <div>
            <span>{name}</span>
            <input type="text" placeholder={placeholder}/>
        </div>
    )
}
export default Input