import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    recipientEmail: "destinatario@example.com" // Dirección de correo electrónico del destinatario
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Si la solicitud es exitosa, mostramos un mensaje de éxito
        alert("Gracias por escribir. Pronto te contactaré.");
      } else {
        // Si la solicitud falla, mostramos un mensaje de error
        alert("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2
            className="h2 text-center mb-12"
          >
            Let&apos; s <span className="text-accent">connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            {/* input group */}
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                className="input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="input"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message..."
              className="textarea"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              disabled={isLoading}
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let&apos;s talk
              </span>
              <BsArrowRight
                className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                aria-hidden
              />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
