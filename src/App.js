import React from "react";
import "./styles.css";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
      contact={{name:"Mr. Whiskeson",
      imgUrl:"http://placekitten.com/300/100",
      phone:"(212) 555-1234",
      email:"mr.whiskaz@catnap.com"}}
        
      />

      <ContactCard
      contact={{name:"Fluggykins",
      imgUrl:"http://placekitten.com/400/300",
      phone:"(212) 555-3456",
      email:"fluff@catnap.com"}}
        
      />

      <ContactCard
        contact={{name:"Destroyer",
        imgUrl:"http://placekitten.com/400/200",
        phone:"(212) 555-5678",
        email:"ofworld@catnap.com"}}
      />

      <ContactCard
      contact={{name:"Whisterson",
      imgUrl:"http://placekitten.com/200/100",
      phone:"(212) 555-8910",
      email:"thecat@catnap.com"}}
        
      />
    </div>
  );
}

export default App;
