var btnTranslate = document.querySelector("#btn-translate");
var txtInput  = document.querySelector("#text-input");
var outputDiv =document.querySelector("#output");
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
  return serverURL+"?"+"text="+text;
  }

function errorHandler(error){
  console.log("error occured",error);
  alert("something went wrong with server, try again after some time")
}


function clickHandler(){
  // outputDiv.innerText ="ikuj"+txtInput.value;
  var inputTxt = txtInput.value;

  fetch(getTranslationURL(inputTxt))
  .then(response=>response.json())
  .then(json=>{
    var translatedText =json.contents.translated;
    outputDiv.innerText=translatedText;
  })
  .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickHandler);
    