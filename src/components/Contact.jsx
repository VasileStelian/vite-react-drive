import styles from "../styles";
import { fields } from "../constants";
import React, { useState, useRef } from "react";
import { Alert } from "flowbite-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    category: "",
  });
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "category") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((option) => option !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.category.length === 0) {
      setError(true);
      setEmailSent(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setEmailSent(true);
          setError(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setEmailSent(false);
        }
      );
  };

  return (
    <div className="flex p-2 items-center justify-center flex-col">
      <h1 className="text-white border-b-2 border-neonPink font-poppins font-bold xs:text-[48px] text-[40]">
        Inscrie-te <span className="text-gradient">acum!</span>
      </h1>
      <p className={styles.paragraph}>
        Acesta este primul pas pentru obținerea permisului de conducere! Ce mai
        aștepți?
      </p>

      <div className="p-8 transition-all items-center bg-black/40 flex md:flex-row flex-col justify-center rounded-lg ">
        <form
          ref={form}
          className="flex transition-all items-center justify-center flex-col p-2"
          onSubmit={handleSubmit}
        >
          {fields
            .filter((field) => field.name !== "category")
            .map((field) => (
              <div key={field.name} className="flex m-2 flex-col">
                <input
                  className="border-[2px] my-2  border-neonPink  rounded-lg p-2"
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
          <div key="category" className="flex items-center space-y-6 flex-col">
            {formData.category.length === 0 ? ( // Render only when no category is selected
              <div
                name="category"
                className="mt-2 border w-[80%] bg-white border-neonPink rounded-lg p-1 font-semibold cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                Alege Categoriile
              </div>
            ) : (
              <div
                name="category"
                className="mt-2 border w-[204px] bg-white border-black rounded-lg p-1 font-semibold cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                {formData.category.join(", ")}
              </div>
            )}
            {showDropdown && (
              <div className="border-[1px] p-2 bg-black w-fit text-neonPink border-neonPink rounded-lg font-semibold ">
                {fields
                  .find((field) => field.name === "category")
                  .options.map((option) => (
                    <div key={option} onClick={() => handleChange}>
                      <input
                        className="m-1"
                        type="checkbox"
                        id={option}
                        name="category"
                        value={option}
                        checked={formData.category.includes(option)}
                        onChange={handleChange}
                      />
                      <label className="font-semibold" htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  ))}
              </div>
            )}
            <button
              className="p-2 mt-2 bg-black border-2 border-neonPink w-[100px] my-3 font-bold text-white hover:bg-red-500/30 transition-colors rounded-full"
              type="submit"
            >
              Trimite
            </button>
            {emailSent && ( // Render success message if email was sent successfully
          <Alert>
            <span className="font-bold text-green-500">
              Formular trimis cu succes!
            </span>{" "}
            Formularul a fost trimis cu success! Va vom contacta in scurt timp!
          </Alert>
        )}
        {error && ( // Render if mail fails to send
          <Alert>
            <span className="font-bold text-neonPink">Eroare!</span> Selecteaza
            categoria dorita!
          </Alert>
        )}
          </div>
        </form>
        
        {/* INFO          */}
        <div className="flex-col flex-wrap justify-center p-4 rounded-r-lg  ">
          <h1 className="text-white border-b-2 border-neonPink text-center font-poppins text-[30px] font-bold">
            Informatii
          </h1>
          <p className={styles.paragraph}>
            <a
              href="https://maps.app.goo.gl/Pb2kD7jXBJDq1XQ7A"
              className="hover:text-white transition-colors"
            >
              Bacau, Calea Moldovei nr. 112
            </a>
            <br />
            <span className="text-gradient font-bold">Telefon</span>: 0746594104
            <br />
            <span className="text-gradient font-bold">E-mail</span>:
            diadrive@yahoo.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
