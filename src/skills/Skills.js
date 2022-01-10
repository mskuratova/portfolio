import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={'${styleContainer.container} ${style.skillsContainer}'}>
                <h2 className={style.title}>GENERAL SKILLS</h2>
                <div className={style.skills}>
                    <Skill title={"React"} description={""}/>
                    <Skill title={"JS"} description={""}/>
                    <Skill title={"TS"} description={""}/>
                </div>
            </div>
        </div>
    )
}

export default Skills