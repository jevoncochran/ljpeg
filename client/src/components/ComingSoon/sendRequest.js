import emailjs from "emailjs-com";

export const sendRequest = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_prf93rj",
        "template_0vr1v5g",
        e.target,
        "user_MhChswxxKTw1OAvIDV8zY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  
    e.target.reset();
  };