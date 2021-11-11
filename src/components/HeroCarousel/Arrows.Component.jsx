import React from 'react'

export function NextArrow(props)
{
    props = {
       className: "",
       style: "",
       onClick:""

    }
    return(<>
    <div className={props.className} style={{...props.style, backgroundColor: "black"}} onClick={props.onClick}/>
    </>);
}
export function PrevArrow(props)
{
    return(<>
    <div className={props.className} style={{...props.style, backgroundColor: "black"}} onClick={props.onClick}/>
    </>);
}