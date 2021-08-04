import * as React from 'react';
import styles from "./qrCode.module.css"
import qr from "../../image/qr2.png";

const QrCode = (): JSX.Element => {
    return(
        <div className={styles.qrBlock}>
        <p className={styles.qrText}>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
        <img className={styles.qrCode} src={qr}/>
        </div>
    );
}

export default QrCode;