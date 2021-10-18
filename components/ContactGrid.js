import ContactCard from "./ContactCard";
import TwitterCard from "./TwitterCard";
import { useEffect, useState } from 'react';


export default function ContactGrid(props) {
  





  return (
    <div id="contact" class="container grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 mb-16">
      
      <ContactCard ></ContactCard>

      <iframe
              src="https://maps.google.com/maps?q=Maria-Von-Linden-Stra%C3%9Fe%206&t=&z=13&ie=UTF8&iwloc=&output=embed"
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
