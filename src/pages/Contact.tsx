import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import fb from "../assets/fb.png";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import xing from "../assets/xing.png";
import tt from "../assets/tt.png";
import github from "../assets/github.png";
import { useLangContext } from "../components/Layout";
import { Link } from "react-router-dom";

interface FormData {
  name: string;
  email: string;
  content: string;
  isDatenschutz: boolean;
}

export default function Contact() {
  const { isGerman } = useLangContext();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    content: "",
    isDatenschutz: false
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => emailjs.init("lBynZS3CdHPm1Mbhm"), []);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));

    console.log(formData);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      content: "",
      isDatenschutz: false
    });

    const serviceId = "service_nvk45hx";
    const templateId = "template_xdkkhvl";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        content: formData.content,
        isDatenschutz: formData.isDatenschutz
      });
      alert(
        isGerman
          ? "Danke für Ihre Nachricht. Ich melde mich umgehend."
          : "Thank for your message. I'll get back to you as soon as possible."
      );
    } catch (error) {
      console.log(error, `loading states: ${loading}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="contact-container">
      <div className="top">
        <h1>{isGerman ? "Schick mir eine Nachricht" : "Send me a message"}</h1>
        <div className="social">
          <a href="https://www.linkedin.com/in/yanqinhq/" target="_blank">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a
            href="https://www.xing.com/profile/Yanqin_Qualmann/cv"
            target="_blank"
          >
            <img src={xing} alt="xing" />
          </a>
          <a href="https://github.com/Qinisfighting" target="_blank">
            <img src={github} alt="github" />
          </a>
          <a href="https://www.facebook.com/ichbinQin" target="_blank">
            <img src={fb} alt="facebook" />
          </a>
          <a href="https://twitter.com/yanqin_q" target="_blank">
            <img src={tt} alt="twitter" />
          </a>
          <a href="mailto:yanqin.qualmann@gmail.com" target="_blank">
            <img src={gmail} alt="gmail" />
          </a>
        </div>
      </div>

      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="form--input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={(e) => (e.target.value = "")}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="form--input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={(e) => (e.target.value = "")}
            required
          />
          <textarea
            placeholder="Message"
            name="content"
            value={formData.content}
            onChange={handleChange}
            onFocus={(e) => (e.target.value = "")}
            required
          />
            {isGerman?
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox"
                checked={formData.isDatenschutz}
                onChange={handleChange}
                name="isDatenschutz"
                required
              />
              <label htmlFor="isDatenschutz">
                Ich habe die <Link to="/datenschutz">Datenschutzhinweise </Link>
                 zur Kenntnis genommen und bin mit ihnen einverstanden. Erteilte
                Einwilligungen kann ich jederzeit widerrufen.
              </label>
            </div>
              :
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox"
                checked={formData.isDatenschutz}
                onChange={handleChange}
                name="isDatenschutz"
                required
              />
              <label htmlFor="isDatenschutz">
              I have read and agree to the <Link to="/datenschutz">Privacy Policy</Link>.
            </label>
          </div>
   }
        
          <button className="form--submit">
            {isGerman ? "SENDEN" : "SEND"}
          </button>
      
        </form>
      </div>
    </div>
  );
}
