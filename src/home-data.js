const navBar = {
  english: ["Home", "Services", "Testimony", "Contact"],
  danish: ["Hjem", "Tjenester", "Vidnesbyrd", "Kontakt"],
  polish: ["Dom", "Usługi", "Świadectwo", "Kontakt"]
};

const workTitle = {
  english: "Your translator...",
  danish: "Din oversætter...",
  polish: "Twój tłumacz..."
};

const about = {
  english: [
    {
      header: "About Me",
      name: ["Name", "Deniz Atici"],
      location: ["Location", "Szczecin, Poland"],
      description:
        "I'm trying to fit the body of my layout in a responsive style, but when i go to the mobile layout the dimension stays with the px of screen but not right on all mobile screen. Take a look at picture of the bottom, the mobile size is one and what the blue area says that is that space is different."
    }
  ],

  danish: [
    {
      header: "Om Mig",
      name: ["Navn", "Deniz Atici"],
      location: ["Placering", "Szczecin, Polen"],
      description:
        "Jeg forsøger at tilpasse kroppen af mit layout i en responsiv stil, men når jeg går til mobillayoutet, forbliver dimensionen med px'en på skærmen, men ikke lige på alle mobilskærme. Tag et kig på billedet af bunden, mobilstørrelsen er én, og det blå område siger, at rummet er anderledes."
    }
  ],

  polisn: [
    {
      header: "O mnie",
      name: ["Nazwa", "Deniz Atici"],
      location: ["Lokalizacja", "Szczecin, Polska"],
      description:
        "Staram się dostosować bryłę mojego układu w stylu responsywnym, ale kiedy przechodzę do układu mobilnego, wymiar z px pozostaje na ekranie, ale nie tylko na wszystkich ekranach mobilnych. Spójrz na zdjęcie na dole rozmiar telefonu komórkowego to jeden, a niebieski obszar oznacza, że ​​przestrzeń jest inna."
    }
  ]
};
export default navBar;
export { workTitle, about };
