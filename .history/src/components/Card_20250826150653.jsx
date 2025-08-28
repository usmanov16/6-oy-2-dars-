
import React from "react";

function SayHello({ism, children}) {
    return(
        <div>
            <h1>
                Salom {ism}

            </h1>
                {children}
        </div>
    )
}

export default SayHello();
