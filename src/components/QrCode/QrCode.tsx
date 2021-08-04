import * as React from 'react';
import styles from "./qrCode.module.css"
import qr from "../../image/qr2.png";

const QrCode = (): JSX.Element => {
    return(
        <>
        <p>Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ</p>
       <div className={styles.qrCode}><img src={qr}/></div>
        </>
    );
}

export default QrCode;