
import React from "react";

function SayHello({ism, children}) {
    return(
        <div>
            <h1>
                Salom {children}
                
            </h1>
        </div>
    )
}

export default SayHello();
