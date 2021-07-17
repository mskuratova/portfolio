import React from "react";
import style from "./DistantWork.module.css"
import styleContainer from "../common/styles/Container.module.css"

function DistantWork() {
    return (
        <div className={style.distantBlock}>
            <h3>Рассматриваю варианты удаленной работы</h3>
            <button>Нанять меня</button>
        </div>
    );
}
export default DistantWork;