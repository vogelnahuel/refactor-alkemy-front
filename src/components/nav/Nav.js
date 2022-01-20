import React from 'react'
import {Link,useParams} from 'react-router-dom'
import "./nav.scss"
export const Nav = () => {
    let Location =useParams()
    Location = Location.id;

    return (
        <nav className="navAdmin ">
            <div className="tamScroll scroll">
                <ul>
                    <h3>Reportes</h3>
                    <li>
                        {window.location.pathname === "/dashboard" ? <div className="circle"></div> : null}  <Link  to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        {window.location.pathname === "/operations"
                            || window.location.pathname === `/operations/${Location}`
                            || window.location.pathname === `/createOperations`
                            ? <div className="circle"></div> : null
                        } <Link  to="/operations">Operations</Link>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
