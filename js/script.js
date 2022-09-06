


let step = document.getElementsByClassName('step');
let prevBtn = document.getElementById('prev-btn');
let nextBtn = document.getElementById('next-btn');
let submitBtn = document.getElementById('submit-btn');
let form = document.getElementsByTagName('form')[0];
let preloader = document.getElementById('preloader-wrapper');
let bodyElement = document.querySelector('body');
let succcessDiv = document.getElementById('success');
let current_step = 0;
let stepCount = 4

// ========================= Setting variables for options ===========================================
let q1_question = document.querySelector('#q1_box');
let q1_options = document.getElementsByName('q_1');
let q1_labels = q1_question.getElementsByTagName('label')
let q1_value = null;

let q2_question = document.querySelector('#q2_box');
let q2_options = document.getElementsByName('q_2');
let q2_others = document.getElementById("q_2_others")
let q2_labels = q2_question.getElementsByClassName('question__label')
let q2_value = null;
let q2_othersVal = null;

let q3_question = document.querySelector('#q3_box');
let q3_options = document.getElementsByName('q_3');
let q3_labels = q3_question.getElementsByTagName('label')
let q3_value = null;

let q4_question = document.querySelector('#q4_box');
let q4_options = document.getElementsByName('q_4');
let q4_others = document.getElementById("q_4_others")
let q4_labels = q4_question.getElementsByClassName('question__label')
let q4_value = null;
let q4_othersVal = null;

let q1_error = document.querySelector('.q1_error')
let q2_error = document.querySelector('.q2_error')
let q3_error = document.querySelector('.q3_error')
let q4_error = document.querySelector('.q4_error')
let q5_error = document.querySelector('.q5_error')

let q5_nameVal = null;
let q5_companyVal = null;
let q5_companyURLVal = null;
let q5_phoneVal = null;
let q5_emailVal = null;

// ========================= Event listener to prev button click =======================================
prevBtn.addEventListener('click', () => {
  prevStep()
});

// ========================  Event listener to next button click ======================================
nextBtn.addEventListener('click', (event) => {

  // step 1 =============
  if (form.dataset.step === "step1") {
    //Test if something was checked
    if (q1_options[0].checked || q1_options[1].checked) {
      for (var i = 0; i < q1_labels.length; i++) {
        q1_labels[i].classList.remove('error__label');
      }
      q1_error.classList.add('d-none');
      q1_value = document.querySelector('input[name="q_1"]:checked').value; //Get the value of the checked.
      nextStep()
    } else {
      // nothing was checked
      for (var i = 0; i < q1_labels.length; i++) {
        q1_labels[i].classList.add('error__label');
      }
      q1_error.classList.remove('d-none');
      event.preventDefault()
      event.stopPropagation()
    }
  }

  // step 2 ==============
  else if (form.dataset.step === "step2") {
    if (q2_options[0].checked || q2_options[1].checked || q2_options[2].checked || q2_options[3].checked || q2_options[4].checked || (q2_others.value !== "")) {
      for (var i = 0; i < q2_labels.length; i++) {
        q2_labels[i].classList.remove('error__label');
      }
      q2_error.classList.add('d-none');
      q2_others.classList.remove('error__label');
      var q2_checked = document.querySelectorAll('input[name="q_2"]:checked');
      q2_value = [...q2_checked].map(option => option.value);
      q2_othersVal = q2_others.value;
      nextStep()

    } else {
      for (var i = 0; i < q2_labels.length; i++) {
        q2_labels[i].classList.add('error__label');
      }
      q2_others.classList.add('error__label');
      q2_error.classList.remove('d-none');
      event.preventDefault()
      event.stopPropagation()
    }
  }

  // step 3 =============
  else if (form.dataset.step === "step3") {
    //Test if something was checked
    if (q3_options[0].checked || q3_options[1].checked || q3_options[2].checked) {
      for (var i = 0; i < q3_labels.length; i++) {
        q3_labels[i].classList.remove('error__label');
      }
      q3_error.classList.add('d-none');
      q3_value = document.querySelector('input[name="q_3"]:checked').value; //Get the value of the checked.
      nextStep()
    } else {
      // nothing was checked
      for (var i = 0; i < q3_labels.length; i++) {
        q3_labels[i].classList.add('error__label');
      }
      q3_error.classList.remove('d-none');
      event.preventDefault()
      event.stopPropagation()
    } 
  }

  // step 4 ==============
  else if (form.dataset.step === "step4") {
    if (q4_options[0].checked || q4_options[1].checked || q4_options[2].checked || q4_options[3].checked || q4_options[4].checked || (q4_others.value !== "")) {
      for (var i = 0; i < q4_labels.length; i++) {
        q4_labels[i].classList.remove('error__label');
      }
      q4_others.classList.remove('error__label');
      q4_error.classList.add('d-none');
      var q4_checked = document.querySelectorAll('input[name="q_4"]:checked');
      q4_value = [...q4_checked].map(option => option.value);
      q4_othersVal = q4_others.value;
      nextStep()

    } else {
      for (var i = 0; i < q4_labels.length; i++) {
        q4_labels[i].classList.add('error__label');
        q4_others.classList.add('error__label');
      }
      q4_error.classList.remove('d-none');
      event.preventDefault()
      event.stopPropagation()
    }
  }

});

// ======================== Form on submit function =============================================
form.onsubmit = () => { return false }
step[current_step].classList.add('d-block');
if (current_step == 0) {
  prevBtn.classList.add('d-none');
  submitBtn.classList.add('d-none');
  nextBtn.classList.add('d-inline-block');
}

// ======================== Progress bar update function =========================================
const progress = (progressVal, stepCount, current_step) => {
  document.getElementsByClassName('progress-bar')[0].style.width = `${progressVal}%`;
  document.getElementsByClassName('progress-bar')[0].innerText = `${current_step + 1}` + `/` + `${stepCount + 1}`;
}

// ======================== Next step button click function =========================================
const nextStep = () => {
  current_step++;
  let previous_step = current_step - 1;
  form.setAttribute('data-step', 'step' + `${current_step + 1}`);
  if ((current_step > 0) && (current_step <= stepCount)) {
    prevBtn.classList.remove('d-none');
    prevBtn.classList.add('d-inline-block');
    step[current_step].classList.remove('d-none');
    step[current_step].classList.add('d-block');
    step[previous_step].classList.remove('d-block');
    step[previous_step].classList.add('d-none');
    if (current_step == stepCount) {
      submitBtn.classList.remove('d-none');
      submitBtn.classList.add('d-inline-block');
      nextBtn.classList.remove('d-inline-block');
      nextBtn.classList.add('d-none');
    }
  } else {
    if (current_step > stepCount) {
      form.onsubmit = () => { return true }
    }
  }
  progress(((100 / stepCount) * current_step), stepCount, current_step);
}

// ===================== Previous step button click function =========================================
const prevStep = () => {
  form.setAttribute('data-step', 'step' + `${current_step}`);
  if (current_step > 0) {
    current_step--;
    let previous_step = current_step + 1;
    prevBtn.classList.add('d-none');
    prevBtn.classList.add('d-inline-block');
    step[current_step].classList.remove('d-none');
    step[current_step].classList.add('d-block')
    step[previous_step].classList.remove('d-block');
    step[previous_step].classList.add('d-none');
    if (current_step < stepCount) {
      submitBtn.classList.remove('d-inline-block');
      submitBtn.classList.add('d-none');
      nextBtn.classList.remove('d-none');
      nextBtn.classList.add('d-inline-block');
      prevBtn.classList.remove('d-none');
      prevBtn.classList.add('d-inline-block');
    }
  }

  progress(((100 / stepCount) * current_step), stepCount, current_step);

  if (current_step == 0) {
    prevBtn.classList.remove('d-inline-block');
    prevBtn.classList.add('d-none');
    progress(20, 4, 0)
  }
}

// ======================== Gathering all user info =========================================
const userInfoGather = (q5_name, q5_company, q5_email, q5_phone, q5_companyURL) => {
  let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let nameFlag = false;
  let emailFlag = false;
  let companyFlag = false;

  if(q5_name.value !== ""){
    q5_name.classList.remove('error__label');
    q5_error.classList.add('d-none');
    nameFlag = true;
    q5_nameVal = q5_name.value;
  } else {
    q5_name.classList.add('error__label');
    q5_error.classList.remove('d-none');
    nameFlag = false;
  }

  if(q5_company.value !== ""){
    q5_company.classList.remove('error__label');
    q5_error.classList.add('d-none');
    companyFlag = true;
    q5_companyVal.value = q5_company.value
  } else {
    q5_company.classList.add('error__label');
    q5_error.classList.remove('d-none');
    companyFlag = false;
  }

  if(q5_email.value !== "" && q5_email.value.match(emailRegex)){
    q5_email.classList.remove('error__label');
    q5_error.classList.add('d-none');
    emailFlag = true;
    q5_emailVal.value = q5_email.value
  } else {
    q5_email.classList.add('error__label');
    q5_error.classList.remove('d-none');
    emailFlag = false;
  }

  if (nameFlag && emailFlag && companyFlag) {
    submitUserData()
  }

}


// =========================== Form submit button event listener =========================================
submitBtn.addEventListener('click', () => {

  let q5_name = document.querySelector('#full_name');
  let q5_company = document.querySelector('#company');
  let q5_email = document.querySelector('#email');
  let q5_phone = document.querySelector('#phone');
  let q5_companyURL = document.querySelector('#companyURL');

  userInfoGather(q5_name, q5_company, q5_email, q5_phone, q5_companyURL)

});


// ======================== Submitting User Data =======================================================
const submitUserData = () => {
  preloader.classList.add('d-block');

  const timer = ms => new Promise(res => setTimeout(res, ms));

  timer(3000)
    .then(() => {
      bodyElement.classList.add('loaded');
    }).then(() => {
      step[stepCount].classList.remove('d-block');
      step[stepCount].classList.add('d-none');
      prevBtn.classList.remove('d-inline-block');
      prevBtn.classList.add('d-none');
      submitBtn.classList.remove('d-inline-block');
      submitBtn.classList.add('d-none');
      succcessDiv.classList.remove('d-none');
      succcessDiv.classList.add('d-block');
    })

}