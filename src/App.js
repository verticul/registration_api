import React, { useState } from "react";
import {QrReader} from "react-qr-reader";

export default function App() {
  const [result, setResult] = useState("No result");
  let handleScan = data => {
    if (data) {
      setResult(data);
    }
  };

  let handleError = err => {
    // alert(err);
  };
  
  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        constraints={{
          facingMode: 'environment'
      }}
      />
      <p>{result}</p>
    </div>
  );
}
