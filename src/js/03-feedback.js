import throttle from 'lodash.throttle';
const refs = {
    form : document.querySelector('.feedback-form'),
    email : document.querySelector('.feedback-form input'),
    message : document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('input', throttle(onFormData, 500));
refs.form.addEventListener('submit', onSubmitForm);

const formData = {};

populateFornData();

function onFormData(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateFornData() {
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (data) {
    refs.email.value = data.email;
    refs.message.value = data.message;
  }
}
function onSubmitForm(evt) {
    console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  }