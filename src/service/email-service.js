import { send, init } from "emailjs-com";

const serviceId = process.env.REACT_APP_API_SERVICEID;
const templateId = process.env.REACT_APP_API_TEMPLATEID;
const userID = process.env.REACT_APP_API_USERID;

const sendEmail = (content) => {
  init(userID);
  const toSend = {
    from_name: content.from_name,
    subject: content.subject,
    to_email: content.to_email,
    message: content.message,
  };
  send(serviceId, templateId, toSend)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default { sendEmail };
