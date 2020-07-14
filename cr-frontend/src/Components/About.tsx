import React from "react"
import { type } from "os"

type Props = {
    firstname : string,
    surname : string,
    age? : number
}
function About(props : Props) {
return <h1>{props.firstname} {props.surname} {props.age}</h1>
}

export default About;