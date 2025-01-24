import { useState } from "react";

function About(){
    const About = ()=>{
        var[text,setText]=useState("GuruVishal");
        function handleText(e){
            setText(e.target.value);
        }
        return(
            <div>
                <h2>Hello all I am GuruVishal!</h2>
                <h2> This is about componenet</h2>
                <h2>Text area:</h2>
                {/* <textarea value={text} onChange={(event=>setText(event.target))}/> */}
                <textarea value={text} onChange={(handleText)}/>
                <p> Hi {text}</p>
            </div>
        );
    };
};

export default About;