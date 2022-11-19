import "./App.css";
import React from "react";
import Html5QrcodePlugin from "../components/Html5QrcodePlugin.jsx";
import ResultContainerPlugin from "../components/ResultContainerPlugin.jsx";
import HowToUse from "../components/HowToUse.jsx";

class ScanQRcode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      decodedResults: [],
    };
    // This binding is necessary to make `this` work in the callback.
    this.onNewScanResult = this.onNewScanResult.bind(this);
  }

  render() {
    return (
      <div className='App'>
        <section className='App-section'>
          <div className='App-section-title'> QR 코드 출석체크기 </div>
          <br />
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={this.onNewScanResult}
          />
          <ResultContainerPlugin results={this.state.decodedResults} />
          <HowToUse />
        </section>
      </div>
    );
  }

  onNewScanResult(decodedText, decodedResult) {
    console.log("App [result]", decodedResult);
    this.setState((state, props) => {
      state.decodedResults.push(decodedResult);
      return state;
    });
  }
}

export default ScanQRcode;
