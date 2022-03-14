import React from "react";
import CalHead from "./CalHead";
import DateArea from "./DateArea";
import NavBar from "./NavBar";

function Calender() {
    return (
        <>
            <NavBar />
            <div className="my-3">
                <CalHead />
                <DateArea />
            </div>
        </>
    );
}

export default Calender;
