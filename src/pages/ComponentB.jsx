const ComponentB = (props) => {
    return <div>
        Component B - {props.value}
        <button onClick={props.handleClick}>Click</button>
    </div>
}

export default ComponentB