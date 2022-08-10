import Nav from "./Nav"
import { Outlet} from "react-router-dom";
import { useState } from "react";

function Section(){
    const [user, setUser] = useState([]);
    return (
        <section >
            <Nav />
            <div style={{background: 'white',height: '700px'}}>
                <Outlet context={[user, setUser]}/>
            </div>
            
        </section>
    )
}

export default Section;