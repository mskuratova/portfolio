import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={'${styleContainer.container} ${style.skillsContainer}'}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"React"} description={"Hhhhhhhh"}/>
                    <Skill title={"JS"} description={"Hoooooooooo"}/>
                    <Skill title={"TS"} description={"Hnnnnnnnnn"}/>
                </div>
            </div>
        </div>
    )
}

export default Skills