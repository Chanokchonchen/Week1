import React from "react";
import axios from 'axios';
function Home() {
    const [time ,setTime] = React.useState('');
    function getTime() {
        axios.get(`http://localhost:3000/courses/time`)
      .then(res => {
        setTime(res.data.time);
      })
    }
    React.useEffect(()=> {
        console.log("Update")
    },[time])
    // function getTime() {
    //     fetch("http://localhost:3000/courses/time",{method : "GET"})
    //     .then(res => res.json())
    //     .then(res => {
    //         console.log(res);
    //     })
    // }
    return (<div>
        <h1>{time}</h1>
        <button onClick={getTime}>Get time</button>
    </div>)
}
export default Home;