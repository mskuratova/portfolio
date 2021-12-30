import React from "react";
import style from "./Works.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Work from "./work/Work";

function Works() {
    return (
        <div className={style.worksBlock}>
            <div className={'${styleContainer.container} ${style.worksContainer}'}>
                <h2>My projects_</h2>
                <div className={style.works}>
                    <Work title={"OLLLLL"} description={"Hkgvkuvyjyxtrhrzsgzrwsxtr"}/>
                    <Work title={"Hello"} description={"Houlctjtxedhzwsjyrfbilmp;k'op["}/>
                </div>
            </div>
        </div>
    )
}
export default Works;