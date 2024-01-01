function Man(props){
    return (
        <>
        <h1>{props.mname} {props.age} year, Hello I am a Man</h1>
        </>
    )
}
function Women(props){
    return (
        <>
        <h2> {props.wname} {props.age}Hello I am a Women</h2>
        </>
    )
}
export {Man,Women};