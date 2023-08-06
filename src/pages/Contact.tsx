import { useState, ChangeEvent, FormEvent } from "react";
import fb from "../assets/fb.png"
import gmail from "../assets/gmail.png"
import linkedin from "../assets/linkedin.png"
import xing from "../assets/xing.png"
import tt from "../assets/tt.png"
import github from "../assets/github.png"
import { useLangContext } from "../components/Layout";


interface FormData {
  name: string;
  email: string;
  content: string;
}

export default function Contact() {
  const {isGerman} = useLangContext();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    content: "",
  });

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Handle form submission
  }

  return (
    <div className="contact-container">
      <div className="top">
      <h1>{isGerman?"Schick mir eine Nachricht" : "Send me a message"}</h1>
      <div className="social"> 
              <a href="https://www.linkedin.com/in/yanqinhq/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
              <a href="https://www.xing.com/profile/Yanqin_Qualmann/cv" target="_blank"><img src={xing} alt="xing" /></a>
              <a href="https://github.com/Qinisfighting" target="_blank"><img src={github} alt="github"/></a>
              <a href="https://www.facebook.com/ichbinQin" target="_blank"><img src={fb} alt="facebook" /></a>
              <a href="https://twitter.com/ichbinQin" target="_blank"><img src={tt} alt="twitter" /></a>
              <a href="mailto:yq.qualmann@gmail.com" target="_blank"><img src={gmail} alt="gmail" /></a>         
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
              required
            />       
            <input
              type="email"
              placeholder="Email"
              className="form--input"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          <textarea  
            placeholder="Message" 
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
          /> 
            <button className="form--submit">{isGerman?"SENDEN" : "SEND"}</button>        
          </form>
      </div >
     
      </div>
  
  );
}