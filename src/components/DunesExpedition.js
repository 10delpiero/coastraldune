import * as tmImage from '@teachablemachine/image';
import React, {useState} from 'react';
import icon6 from "../components/icons/icon6.jpg";
import Empty from "../components/icons/empty.jpg";
import $ from 'jquery';
window.$ = $;



const DunesExpedition = () => {
  
  const [imgBase64, setImgBase64] = useState(Empty); // 파일 base64
  const [imgFile, setImgFile] = useState(null);	//파일	
  
  const handleChangeFile = (event) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    }
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  }

  
      const URL = "https://teachablemachine.withgoogle.com/models/wY73i_ESl/";
  
      let model, labelContainer, maxPredictions, Message, Messagetwo;
      Message = "AI가 사구식물을 찾는 중 입니다."
      Messagetwo = ""

      
      // Load the image model and setup the webcam
      async function init() {
        $('.Message').html(Message)
          const modelURL = URL + "model.json";
          const metadataURL = URL + "metadata.json";
          // load the model and metadata
          // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
          // or files from your local hard drive
          // Note: the pose library adds "tmImage" object to your window (window.tmImage)
          model = await tmImage.load(modelURL, metadataURL);
          maxPredictions = model.getTotalClasses();
  
          // Convenience function to setup a webcam

  
          labelContainer = document.getElementById("label-container");
          for (let i = 0; i < maxPredictions; i++) { // and class labels
            var element = document.createElement("div")
            element.classList.add("d-flex");
              labelContainer.appendChild(element);
          }
      }
  
  
      // run the webcam image through the image model
      async function predict() {
          // predict can take in an image, video or canvas html element
          const modelURL = URL + "model.json";
          const metadataURL = URL + "metadata.json";
          model = await tmImage.load(modelURL, metadataURL);
          maxPredictions = model.getTotalClasses();
          var imageUp = document.getElementById("goimage")
          const prediction = await model.predict(imageUp, false);
          prediction.sort((a,b)=> parseFloat(b.probability) - parseFloat(a.probability));
          var resultMessege;
          switch(prediction[0].className){
            case "mae":
              resultMessege = "이 식물은 갯메꽃과 일치할 확률이 " + Math.round(prediction[0].probability.toFixed(2) * 100) + "% 입니다."
              break;
            case "tong":
              resultMessege = "이 식물은 통보리사초와 일치할 확률이 " + Math.round(prediction[0].probability.toFixed(2) * 100) + "% 입니다."
              break;
            case "reed":
              resultMessege = "이 식물은 갈대와 일치할 확률이 " + Math.round(prediction[0].probability.toFixed(2) * 100) + "% 입니다."
              break;
            case "zom":
              resultMessege = "이 식물은 좀보리사초와 일치할 확률이 " + Math.round(prediction[0].probability.toFixed(2) * 100) + "% 입니다."
              break;
            case "haedanghwa":
              resultMessege = "이 식물은 해당화와 일치할 확률이 " + Math.round(prediction[0].probability.toFixed(2) * 100) + "% 입니다."
              break;
            case "bigi":
              resultMessege = "이 식물은 순비기나무와 일치할 확률이 " + Math.round(prediction[0].probability.toFixed(2) * 100) + "% 입니다."
              break;
          };
          $('.result-message').html(resultMessege) 
          var barWidth;
          for (let i = 0; i < maxPredictions; i++) {
              if (prediction[i].probability.toFixed(2) > 0.1) {
                  barWidth = Math.round(prediction[i].probability.toFixed(2) * 100) + "%";
              } else if (prediction[i].probability.toFixed(2) >= 0.01) {
                  barWidth = "4%"
              } else {
                  barWidth = "2%"
              } 
            var labelTitle;
                switch (prediction[i].className) {
                    case "mae":
                        labelTitle = "갯메꽃"
                        break;
                    case "tong":
                        labelTitle = "통보리사초"
                        break;
                    case "reed":
                        labelTitle = "갈대"
                        break;
                    case "zom":
                        labelTitle = "좀보리사초"
                        break;
                    case "haedanghwa":
                        labelTitle = "해당화"
                        break;
                    case "bigi":
                        labelTitle = "순비기나무"
                        break;
                }
                $('.Message').html(Messagetwo)
          var label = "<div class='animal-label d-flex'>" + labelTitle + "</div>"
          var bar = "<div class='bar-container'><div class='" + prediction[i].className + "-box'></div><div class='d-flex " + prediction[i].className + "-bar' style='width: " + barWidth + "'><span class='percent-text'>" + Math.round(prediction[i].probability.toFixed(2) * 100) + "%</span></div></div>"
                    labelContainer.childNodes[i].innerHTML = label + bar;
      }
    }
return(
<div>
<div className="page">
        <div className="pageTitleBack">
          <div className="pageTitle">
            <div className="in">
              <div style={{float: "left"}}><img width="100px" height="100px" src={icon6}></img></div>
              <div style={{float: "left", textAlign:"center", marginTop:"40px"}}>사구 식물 검색하기</div>
            </div>
          </div>
        </div>
        </div>
<div className="preview">
      <div><p class="Message"></p></div>
      <div><p class="result-message"></p></div>
            <div className="imgFileContainer">
      <img className="goimage" id="goimage" src={imgBase64}>
      </img>
        <input type="file" name="imgFile" id="imgFile" onChange={handleChangeFile} onclick=           
          {
            imgFile === null
            ? null
            : init().then(predict())
          }/>
      </div>
    </div>
  <div id="label-container" class="d-flex"></div>
  </div>
);
}


export default DunesExpedition;