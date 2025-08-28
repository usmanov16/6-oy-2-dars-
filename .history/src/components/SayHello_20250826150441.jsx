
import React from "react";
import Ao

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
