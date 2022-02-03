import React, { useImperativeHandle, useRef } from "react";


// <Input containerClassName=""  label="" />
const Input = React.memo(React.forwardRef((props, ref) => {

    const inpRef = useRef(null)
    useImperativeHandle(ref, () => {

        return{
            inputRef: inpRef,
            focus: () => {
                inpRef.current.focus();
            }
        }
    })

    const {containerClassName, label, ...otherProps} = props

    return (
        <div className={containerClassName ? containerClassName : 'form-group'}>
            <label>{label}</label>
            <input ref={inpRef} className="form-control" {...otherProps} />
        </div>
    )
}));

export default Input;