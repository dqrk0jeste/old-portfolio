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

  document.querySelector('.contact-page button').innerHTML = 'Sending...';
  const serviceID = 'service_7qz0wjj';
  const templateID = 'template_hf2747b';

  emailjs.send(serviceID, templateID, params).then((res) => {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
    document.querySelector('.contact-page button').innerHTML = 'Sent!';
    document.querySelector('.contact-page button').style.backgroundColor = '#ffb6c1';
    setTimeout(() => {
      document.querySelector('.contact-page button').innerHTML = 'Send';
      document.querySelector('.contact-page button').style.backgroundColor = '#fffc46';
    }, 1500);
  }).catch((error) => {
    console.log(error);
    document.querySelector('.contact-page button').innerHTML = 'Try Again';
  });

}

document.querySelector('.contact-page button').addEventListener('click', () => {
  sendEmail();
});