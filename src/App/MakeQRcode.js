import React from "react";
import QRCode from "react-qr-code";

function MakeQrCode() {
  return (
    <div>
      <h1>출석체크 QR</h1>
      <h2>벙주하넽 아래 QR코드를 보여주세요</h2>
      <QRCode
        size={500} //QR코드 사이즈
        style={{ height: "100%", width: "100%" }}
        //아래 value 값 데이터를 담아서 QR코드를 만들어준다.
        value='{age:24, name:alex}'
      />
    </div>
  );
}

export default MakeQrCode;
