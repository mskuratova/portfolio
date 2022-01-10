import React from "react";
import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"

function Main () {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.photo}></div>
                <div className={style.text}>
                    {/*<span>Hi</span>*/}
                    <h1>Maria Skuratova_</h1>
                    <p><span className={style.bold}>AGE:</span> 43</p>
                    <p><span className={style.bold}>PHONE:</span> +7 (960) 990-55-65</p>
                    <p><span className={style.bold}>EMAIL:</span> m.p.skuratova@gmail.com</p>
                    <p><span className={style.bold}>ADDRESS:</span> Russia Omsk city</p>

                </div>
            </div>
        </div>
    )
}

export default Main