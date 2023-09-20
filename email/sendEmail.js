import nodemailer from "nodemailer";
import template from "./template.js";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "dennykate22@gmail.com",
    pass: "hfvfusrixkwstxec",
  },
});

export default (data) => {
  const date = getCurrentDate();
  const { name, phone, email, comment } = data;

  const options = {
    from: "dennykate22@gmail.com",
    to: "aungmyochit22122002@gmail.com",
    subject: "A new message from customer!",
    html: template({ name, phone, email, comment, date }),
    attachments: [
      {
        filename: "logo.png",
        path: "./assets/logo.png",
        cid: "image1", //same cid value as in the html img src
      },
    ],
  };

  transporter.sendMail(options, (err, info) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log(info.response);
  });
};

const getCurrentDate = () => {
  // Get the current date
  const currentDate = new Date();

  // Get hours and minutes
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");

  // Get AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Get the day, month, and year
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // Month is 0-based
  const year = currentDate.getFullYear();

  // Create the formatted date string
  const formattedDate = `${formattedHours}:${minutes}${ampm} ${day}/${month}/${year}`;

  return formattedDate;
};
