export default function Button(props){
    return (
        <button className={`${props.className} + btn btn-outline-dark`} style={props.style}>{props.children}</button>
    );
}