import React from "react";
import style from "./Contacts.module.css"
import Nav from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.css";

function Contacts () {
    return (
        <div className={`${styleContainer.container} ${style.contacts}`}>
            <h4>Contact</h4>
            <form className={style.form}>
                <input/>
                <input/>
                <textarea/>
            </form>
            <button>Send</button>


        </div>
    )
}
export default Contacts