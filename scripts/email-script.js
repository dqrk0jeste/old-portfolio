function sendEmail() {
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value
  };

  if(params.name === '') {
    document.getElementById('name').style.backgroundColor = '#fffd8d';
    setTimeout(() => {
      document.getElementById('name').style.backgroundColor = '#fffdaf';
    }, 1000);
    return;
  }
  if(params.email === '') {
    document.getElementById('email').style.backgroundColor = '#fffd8d';
    setTimeout(() => {
      document.getElementById('email').style.backgroundColor = '#fffdaf';
    }, 1000);
    return;
  }
  if(params.message === '') {
    document.getElementById('message').style.backgroundColor = '#fffd8d';
    setTimeout(() => {
      document.getElementById('message').style.backgroundColor = '#fffdaf';
    }, 1000);
    return;
  }

  const button = document.querySelector('.contact-page button');

  button.innerHTML = 'Sending...';
  button.style.backgroundColor  = 'black';
  button.style.color = '#fffc46';
  const serviceID = 'service_7qz0wjj';
  const templateID = 'template_hf2747b';

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    button.innerHTML = 'Sent!';
    button.style.backgroundColor = '#fffc46';
    button.style.color = 'black';
    setTimeout(() => {
      button.innerHTML = 'Send';
    }, 1500);
  }).catch((error) => {
    console.log(error);
    button.innerHTML = 'Try Again';
  });

}

document.querySelector('.contact-page button').addEventListener('click', () => {
  sendEmail();
});