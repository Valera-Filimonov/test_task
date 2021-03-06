import * as React from 'react';
import style from './panel.module.css';
import vector from "./../../image/Vector.svg";
import {ChangeEvent} from "react";
import NumberFormat from 'react-number-format';
import fetchJsonp from 'fetch-jsonp';
import {ACCESS_KEY} from "../../config/apiKey";
import ApplicationAccepted from "../ApplicationAccepted/ApplicationAccepted";
import Warning from "../Warning/Warning";

enum Server {
    true,
    false,
    undefined
}

const ARRAY_BUTTON = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Panel = (): JSX.Element => {
/*=============Хук состояния кнопки подтверждения персональных данных==============*/
    const [personalData, setPersonalData] = React.useState(false);
/*=============Хук состояния поля ввода номера телефона============================*/
    const [input, setInput] = React.useState('');
/*=============Хук состояния работы API по проверке номера=========================*/
    const [valid, setValid] = React.useState(Server.undefined)
/*=============Функция обработчик поля ввода номера телефона=======================*/
    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(value);
    };
/*=============Функция обработчик кнопки подтверждения персональных данных=========*/
    const acceptPersonalData = () => {
        setPersonalData(!personalData);
    };
/*============Функция обработчик кнопок панели по вводу номера телефона============*/
    const buttonClickHandler = (value: number) => {
        setInput((prevState) => prevState + value)
    };
/*============Функция обработчик кнопки очистки панели по вводу номера телефона====*/
    const clearHandler = () => setInput((prevState) => prevState.substr(0, prevState.length - 1));
/*============Функция обработчик для работы с API по проверке номера===============*/
    const validNumber = () => {
        fetchJsonp('http://apilayer.net/api/validate?access_key=' + ACCESS_KEY + '&number=' + input, {})
            .then(response => response.json())
            .then(data => {
                if (data.valid) {
                    setValid(Server.true);
                } else {
                    setValid(Server.false);
                }
            })
    }
/*=================================================================================*/
    return (
        <article className={style.panel}>
            {((valid === Server.undefined || valid === Server.false)) && (
                <>
                    <p className={style.headingPanel}>Введите ваш номер мобильного телефона</p>
                    <NumberFormat className={valid === Server.false ? style.errorPhone : style.inputPhone}
                                  format="+7 (###) ###-####" allowEmptyFormatting mask="_" onChange={inputHandler}
                                  value={input}/>
                    <p className={style.textManager}>и с Вами свяжется наш менеждер для<br/> дальнейшей консультации</p>

                    <div style={{paddingTop: 36}}>
                        <div className={style.gridContainer}>

                            {
                                ARRAY_BUTTON.map((el) => (
                                    <button key={el} className={style.buttonPhone}
                                            onClick={() => buttonClickHandler(el)}>{el}</button>
                                ))
                            }

                            <button className={style.buttonPhone} style={{height: 52, gridColumn: 'span 2'}}
                                    onClick={clearHandler}>стереть
                            </button>
                            <button className={style.buttonPhone} onClick={() => buttonClickHandler(0)}>0</button>
                        </div>
                    </div>

                    {
                        (valid === Server.undefined) &&
                        <div style={{display: "flex", paddingTop: 36}}>
                            <button className={style.checkboxButton} onClick={acceptPersonalData}>
                                {
                                    personalData &&
                                    <img src={vector} alt="Подтверждение согласия на обработку персональных данных"/>
                                }
                            </button>
                            <p className={style.textPersonalData}>
                                Согласие на обработку<br/> персональных данных
                            </p>
                        </div>
                    }

                    {
                        valid === Server.false &&
                        <Warning/>
                    }

                    <button disabled={!personalData} className={style.buttonConfirmation}
                            onClick={validNumber}>ПОДТВЕРДИТЬ НОМЕР
                    </button>
                </>
            )
            }

            {
                personalData && valid === Server.true && (
                    <ApplicationAccepted/>
                )
            }
        </article>
    );
};

export default Panel;