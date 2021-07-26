import React,{useEffect}from 'react';

import './contactForm.css';


const contactForm = ()=>{

	return(
		<ps-contact-form
		integration-key="79c0f8fb079f1fa516c1476bd2ff1b2586e48a94ab910898d5ef18f8f74d1ba5"
		full-name-placeholder-text="Full Name"
		email-placeholder-text="Email"
		message-placeholder-text="Message"
		submit-button-text="Submit"
		success-message="Thank you for contacting us, we will get back to your shortly"
		tags="homepage, before-footer"
	  ></ps-contact-form>)
}

export default contactForm
