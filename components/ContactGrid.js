import ContactCard from "./ContactCard";
import TwitterCard from "./TwitterCard";
export default function ContactGrid(props) {
  return (
    <div id="contact" class="container grid grid-cols-1  gap-8 p-6 mb-16">
      
      <ContactCard ></ContactCard>
    </div>
  );
}
