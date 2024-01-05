import ContactCard from "./ContactCard";
import TwitterCard from "./TwitterCard";
import { useEffect, useState } from 'react';


export default function ContactGrid(props) {
  





  return (
    <div id="contact" class="container grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 mb-16">
      
      <ContactCard ></ContactCard>

      <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.5074047706282!2d11.59613279940352!3d48.220904103390936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e73dbea10bc65%3A0x2ee5e98cc381149c!2sHelmholtz%20AI%20Central%20Unit!5e0!3m2!1sen!2suk!4v1704471420504!5m2!1sen!2suk"
              width="100%"
              height="290"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />

    </div>
  );
}

