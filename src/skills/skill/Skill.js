import React from "react";
import style from "./Skill.module.css"

function Skill(props) {
    return (
        <div className={style.skill}>
            {/*<div className={style.icon}></div>*/}
            <h3>{props.title}</h3>
            <br/>
            <div className={style.progress}>
                <progress className="progressbar" role="progressbar"
                   value="80" min="0" max="100">
                    <span className={style.span}>Hi</span>
                </progress>
            </div>
            {/*{<span className={style.description}>{props.description}</span>}*/}
            </div>
            )
            ;
        }

            export default Skill;