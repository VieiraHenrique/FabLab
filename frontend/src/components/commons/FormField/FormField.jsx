import React from "react";
import "./formField.css";

export function FormField(props,{data}) {
    // props.label props.type props.name props.value
    let field;
    let required = (props.required !== undefined) ? props.required : false;

    if (props.type === "textarea") {
        field = <div style={props.style} className={props.className}>
                    <label htmlFor={props.label}>{props.label}</label>
                    <textarea name={props.label} placeholder={props.placeholder} onChange={e => props.callback(e.target.value)} />
                </div>
    } else if (props.type === "submit") {
        field = <div style={props.style}>
                    <input name={props.label} type={props.type} value={props.label} onChange={e => props.callback(e.target.value)}/>
                </div>
    } else if (props.type === "button") {
            field = <div style={props.style} className={props.className} id={props.id}>
                    <button onClick={props.callback} className="ff-button">
                        {props.children}
                    </button>
                </div>
    } else if (props.type === "radio") {
        field = <div style={props.style}>
                    <label htmlFor={props.label}>{props.label}</label>
                    <input id={props.label} type={props.type} value={props.label} name={props.name} onChange={e => props.callback(e.target.value)}/>
                </div>
    } else  {
        field = <div style={props.style}>
                    <label htmlFor={props.label}>{props.label}</label>
                    <input value={props.value} name={props.label} type={props.type} required={required} placeholder={props.placeholder} onChange={e => props.callback(e.target.value)}/>
                </div>
    }

 
    return (
        field
    )
}