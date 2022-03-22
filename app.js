import React from "react";
import emailjs from "emailjs-com";

export default function App() {
  function App(e) {
    e.preventDefault();
    emailjs
      .sendform(
        "service_8n9ucoo",
        "template_1xrg8ge",
        e.target,
        "user_YPTEpTAF2CkKRxEjG"
      )
      .then((res) => {
        console.log(res);
      })
    
