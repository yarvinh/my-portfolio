import { forwardRef } from "react"

const Dialog = forwardRef((props,ref)=>{
    return (
        <dialog ref={ref} className="dialog">
            <p>
                <strong>
                    Testing Dialog
                </strong></p>
                <form method="dialog">
                   <button>OK</button>
                </form>
        </dialog>
    )
})


export default Dialog