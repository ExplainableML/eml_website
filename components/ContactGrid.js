import ContactCard from "./ContactCard";
import TwitterCard from "./TwitterCard";
import { useEffect, useState } from 'react';


export default function ContactGrid(props) {
  





  return (
    <div id="contact" class="container grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 mb-16">
      
      <ContactCard ></ContactCard>

      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.462471350809!2d11.5916811!3d48.2208235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e73faf8cb3591%3A0x3c954e9094115273!2sIngolst%C3%A4dter%20Landstra%C3%9Fe%201%2C%2080939%20Oberschlei%C3%9Fheim%2C%20Germany!5e0!3m2!1sen!2sus!4v1690477920017!5m2!1sen!2sus"
              width="100%"
              height="383"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />

    </div>
  );
}

