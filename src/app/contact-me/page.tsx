import ContactForm from "./contactForm";
import { WEB3FORMS_ACCESS_KEY } from "../../utils/constants";

export default function ContactPage() {
return <ContactForm accessKey={WEB3FORMS_ACCESS_KEY} />;  
}