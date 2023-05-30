import throttle from 'lodash.throttle';

const refs = {
  from: document.querySelector('.feedback-form'),
  emailEL: document.querySelector('.feedback-form input'),
  textArea: document.querySelector('.feedback-form textarea'),
  
}




const FEED_BACK_FORM = 'feedback-form-state';

const formData = {};

document.addEventListener('DOMContentLoaded', checkedLocalStorage);
refs.from.addEventListener('submit', onFormSubmit);




refs.from.addEventListener('input', throttle(function (event) {
  formData[event.target.name] = event.target.value;
  const messageJSON = JSON.stringify(formData);
  localStorage.setItem(FEED_BACK_FORM, messageJSON);
}, 2000)); 


function checkedLocalStorage(){
  const checkLocal = localStorage.getItem(FEED_BACK_FORM);
  
  if(checkLocal){
    const parsedData = JSON.parse(checkLocal);
   
    const {email, message} = parsedData;
    
    refs.emailEL.value = email;
    refs.textArea.value = message;
    formData.email = email;
    formData.message = message;
  return {email, message}
    
  }
}





function onFormSubmit(evt){
  evt.preventDefault();
  console.log(formData);
  localStorage.removeItem(FEED_BACK_FORM)
  refs.from.reset();
}

  
  
    













