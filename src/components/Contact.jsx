import styles from "../styles";
import { fields } from "../constants";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    category: "Select Category",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex-col min-h-">
        <div className="flex-1 text-center m-10">
          <h1 className="text-white font-poppins font-bold xs:text-[48px] text-[40]">
            Inscrie-te <span className="text-gradient">acum!</span>
          </h1>
          <p className={styles.paragraph}>
            Acesta este primul pas pentru obținerea permisului de conducere! Ce
            mai aștepți?
          </p>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="flex flex-col p-2 max-w-[450px] bg-black/40  rounded-l-lg">
            <h1 className="text-white text-[30px] font-bold font-poppins">
              Completează<span className="text-gradient"> formularul!</span>
            </h1>
            <form className="flex flex-wrap" onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div key={field.name}>
                  {field.type === "select" ? (
                    <select
                      className="mt-2 border border-black rounded-lg p-1 font-semibold"
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                    >
                      {field.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      className="p-1 border border-black rounded-lg mr-2 mt-2 font-semibold "
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      required
                    />
                  )}
                </div>
              ))}
            </form>
            <button
              className="p-2 mt-2 bg-slate-900 w-[100px] my-3 font-bold text-white hover:bg-cyan-800 transition-colors rounded-full"
              type="submit"
            >
              Trimite
            </button>
          </div>
          <div className="flex-1 flex-col flex-wrap lg:max-w-[300px] ss:w-full justify-center p-4 bg-black/40 rounded-r-lg ">
            <h1 className="text-white font-poppins text-[30px] font-bold">
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
              <span className="text-gradient font-bold">Telefon</span>:
              0746594104
              <br />
              <span className="text-gradient font-bold">E-mail</span>:
              diadrive@yahoo.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
