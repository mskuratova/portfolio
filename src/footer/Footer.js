import React from "react";
import style from "./Footer.module.css"
import Nav from "../nav/Nav";

function Footer() {
    return (
        <div className={style.footer}>
            <h5 className={style.h5}>Maria Skuratova</h5>
            <div className={style.icons}>
                <p className={style.icon}></p>
                <p className={style.icon}></p>
                <p className={style.icon}></p>
                <p className={style.icon}></p>
            </div>
        </div>
    )
}

export default Footer