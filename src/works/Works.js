import React from "react";
import style from "./Works.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Work from "./work/Work";

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={'${styleContainer.container} ${style.worksContainer}'}>
                <h2>Works</h2>
                <div className={style.works}>
                    <Work title={"Hi"} description={"H"}/>
                    <Work title={"Hello"} description={"H"}/>
                </div>
            </div>
        </div>
    )
}
export default Works;