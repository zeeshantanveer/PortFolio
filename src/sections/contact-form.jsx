// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     number: "",
//     mesg: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     const { name, email, address, number, mesg } = formData;

//     // Validate the form before sending
//     if (!name || !email || !mesg) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     const emailParams = {
//       from_name: name,
//       email: email,
//       address: address,
//       number: number,
//       message: mesg,
//     };

//     emailjs
//       .send("service_i86dj1k", "template_1tegiza", emailParams, "xn4onvjA2t_bOrRZDvz-e")
//       .then((response) => {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("Message sent successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           address: "",
//           number: "",
//           mesg: "",
//         });
//       })
//       .catch((err) => {
//         console.error("FAILED...", err);
//         alert("Failed to send the message. Please try again.");
//       });
//   };

//   return (
//     <form onSubmit={sendEmail} autoComplete="on">
//       <input
//         type="text"
//         name="name"
//         id="name"
//         autoComplete="name"
//         placeholder="Your Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         id="email"
//         autoComplete="email"
//         placeholder="Your Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="text"
//         name="address"
//         id="address"
//         autoComplete="address"
//         placeholder="Your Address"
//         value={formData.address}
//         onChange={handleChange}
//       />
//       <input
//         type="tel"
//         name="number"
//         id="number"
//         placeholder="Phone Number"
//         value={formData.number}
//         onChange={handleChange}
//       />
//       <textarea
//         name="mesg"
//         id="mesg"
//         cols="30"
//         rows="10"
//         placeholder="Your Message"
//         value={formData.mesg}
//         onChange={handleChange}
//         required
//       ></textarea>

//       <div className="btn-box formBtn">
//         <button type="submit" className="btn">
//           Send Message
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ContactForm;


import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    number: "",
    mesg: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_i86dj1k", "template_1tegiza", formData, "Z_gKkmdh5Z3GNhM-F0KbX")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <form onSubmit={sendEmail} autoComplete="on">
      <input type="text" name="name" id="name" autoComplete="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
      <input type="text" name="email" id="email" autoComplete="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
      <input
        type="text"
        name="address"
        id="address"
        autoComplete="address"
        placeholder="Your Address"
        value={formData.address}
        onChange={handleChange}
      />
      <input type="number" name="number" id="number" placeholder="Phone Number" value={formData.number} onChange={handleChange} />
      <textarea name="mesg" id="mesg" cols="30" rows="10" placeholder="Your Message" value={formData.mesg} onChange={handleChange}></textarea>

      <div className="btn-box formBtn">
        <button type="submit" className="btn">
          Send Me
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
