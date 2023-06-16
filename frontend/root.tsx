import React from "react";
import NavBar from "./components/NavBar";

export default function Root({ children } : React.PropsWithChildren){
    return (
        <React.Fragment>
            <NavBar/>
            {children}
        </React.Fragment>
    )
}