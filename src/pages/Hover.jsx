import { useState } from "react"

const Hover = () => {
    const [isShow, setShow] = useState(false)
    return <div>
        <div className="positon-relative d-flex">
            <button onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>Hover Me</button>
            {
                isShow && <div onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)} className="position-absolute bg-dark text-light p-3" style={{
                    top: "30px",
                    left: "40px"
                }}>
                    Hello
                </div>
            }
        </div>
    </div>
}

export default Hover