import React from "react";
import style from "./Contacts.module.css"
import Nav from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.css";

function Contacts () {
    return (
        <div className={`${styleContainer.container} ${style.contacts}`}>
            <h4>Contact</h4>
            <form className={style.form}>
                <input type="text"/>
                <input type="text"/>
                <textarea/>
                <button type="submit">Send</button>
            </form>



        </div>
    )
}
export default Contacts