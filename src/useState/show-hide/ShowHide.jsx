import { useState } from "react";

export default function ShowHide() {
    const [show, setShow] = useState(true);

    return (
        <div>
            <h1> This a Show and Hide challenge</h1>


            <button onClick={() => setShow((show) => !show)}> Show / Hide</button>
            {show ? <h1>Welcome to React Challenges</h1> : null}
        </div>
    )
}
