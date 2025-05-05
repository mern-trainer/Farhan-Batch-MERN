const PopUp = (props) => {
    return <div className="vw-100 text-light bg-dark vh-100 position-fixed top-0 start-0">
        {props.value}
    </div>
}

export default PopUp