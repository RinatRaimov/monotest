var FIELDSCOUNTER = 7;

function validateField(field) {
  // console.log(field);  

  switch(field.id) {
    case 'fio': checkTextField(field); break;
    case 'company-name': checkTextField(field); break;
    case 'city': checkTextField(field); break;        
    case 'address': checkTextField(field); break;        
    case 'zipcode': checkNumberField(field); break;        
    case 'phone': checkNumberField(field); break;        
    case 'email': checkEmailField(field); break;
  }     
}

function checkTextField(field) {
  var regexpTextField = "^[а-яА-ЯёЁa-zA-Z]+$";
  if(field.value.match(regexpTextField) != null) {
    removeFieldName(field.id);
    setCookie(field.id, field.value);
  }
  else {
    console.log("Not match")
  }
}

function checkNumberField(field) {
  var regexpNumberField = "[0-9]";
  if(field.value.match(regexpNumberField) != null) {
    removeFieldName(field.id);
    setCookie(field.id, field.value);
  }
  else {
    console.log("Not match")
  }
}

function checkEmailField(field) {
  var regexpEmailField = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$";
  if(field.value.match(regexpEmailField) != null) {
    removeFieldName(field.id);
    setCookie(field.id, field.value);
  }
  else {
    console.log("Not match")
  }
}

function removeFieldName(id) {  
  FIELDSCOUNTER = FIELDSCOUNTER - 1;  
  console.log(FIELDSCOUNTER)  
  var field = document.getElementById("f-"+id);
  console.log(field)
  field.remove();      
}

var interval = window.setInterval(checkFieldsCounter, 500);


function checkFieldsCounter() {
 console.log(FIELDSCOUNTER)
  if(FIELDSCOUNTER == 0) {
    var btn = document.getElementById("next");
    var hint = document.getElementById("hint");
    hint.innerHTML = "Все необходимые поля заполнены, спасибо!";

    btn.style.border = "1px solid #c0382f";
    btn.style.color = "#c0382f";
    btn.removeAttribute('disabled');
    btn.addEventListener("mouseover", function() {
      btn.style.backgroundColor = "#c0382f";
      btn.style.color = "#ffffff";
    });
    btn.addEventListener("mouseout", function() {
      btn.style.backgroundColor = "#eaeaea";
      btn.style.color = "#c0382f";
      btn.style.borderColor = "#c0382f";
    });
    clearInterval(interval);
  }
}  

function chooseCountry(country) {   
  var defaultValue = document.getElementById("defaultchoice");
  var countries = document.getElementsByClassName("order-form__select-list");
  console.log(country)
  defaultValue.innerHTML = country.textContent; 
  countries[0].style.display = "none"; 
  event.stopPropagation();   
  removeFieldName(country.attributes[2].nodeValue);
  setCookie(country.attributes[2].nodeValue, country.innerText);
}

function showCountry() {
  var countries = document.getElementsByClassName("order-form__select-list");
 
  countries[0].style.display = "block";  
}

function setCookie(name, value) {
  document.cookie = name + "=" + value;
}

function getCookie(name) {
  var r = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  if (r) return r[2];
  else return "";
}


  

     
      
    