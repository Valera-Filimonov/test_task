import * as React from 'react';
import style from "./applicationAccepted.module.css"


const ApplicationAccepted = (): JSX.Element => {
    return (
        <>
            <p className={style.applicationComplete}>ЗАЯВКА<br/>ПРИНЯТА</p>
            <p className={style.textManagerCall}>Держите телефон под рукой.<br/> Скоро с Вами свяжется наш
                менеджер.</p>
        </>
    );
}

export default ApplicationAccepted;