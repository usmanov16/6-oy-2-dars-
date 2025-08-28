
import React from "react";
import 

function SayHello({ism, children}) {
    return(
        <div>
            <h1>
                Salom {ism}
                {children}

            </h1>
        </div>
    )
}

export default SayHello();
