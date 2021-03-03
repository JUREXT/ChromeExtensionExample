import React, { useEffect } from "react";
import "./Popup.scss";

export default function Popup() {

  useEffect(() => {
    // Example of how to send a message to eventPage.ts.
    //  chrome.runtime.sendMessage({ popupMounted: true });

    const url = "https://www.avto.net/Ads/results.asp?znamka=SAME&model=&modelID=&tip=&znamka2=&model2=&tip2=&znamka3=&model3=&tip3=&cenaMin=0&cenaMax=999999&letnikMin=0&letnikMax=2090&bencin=&starost2=999&oblika=44&ccmMin=&ccmMax=&mocMin=&mocMax=&kmMin=&kmMax=&kwMin=&kwMax=&motortakt=&motorvalji=&lokacija=0&sirina=&dolzina=&dolzinaMIN=&dolzinaMAX=&nosilnostMIN=&nosilnostMAX=&lezisc=&presek=&premer=&col=&vijakov=&EToznaka=&vozilo=&airbag=&barva=&barvaint=&EQ1=1000000000&EQ2=1000000000&EQ3=1000000000&EQ4=100000000&EQ5=1000000000&EQ6=1000000000&EQ7=1110100120&EQ8=1010000004&EQ9=100000000&KAT=1040000000&PIA=&PIAzero=&PSLO=&akcija=&paketgarancije=&broker=&prikazkategorije=&kategorija=4417&ONLvid=&ONLnak=&zaloga=10&arhiv=&presort=&tipsort=&stran="

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.update(tabs[0].id, { url: url });
    });


  }, []);

  return <div className="popupContainer">Zadnjih 100 - Kmetijska mehanizacija SAME</div>;
}
