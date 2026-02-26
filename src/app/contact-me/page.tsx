import ContactForm from "./contactForm";
import { WEB3FORMS_ACCESS_KEY } from "../../utils/constants";

export default function ContactPage() {
	console.log("WEB3FORMS_ACCESS_KEY (server):", WEB3FORMS_ACCESS_KEY);
  return <ContactForm accessKey={WEB3FORMS_ACCESS_KEY} />;  
}