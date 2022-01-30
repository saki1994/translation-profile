import document from "./images/document.PNG";
import website from "./images/website.PNG";
import person from "./images/transcriber.PNG";
import quality from "./images/quality.PNG";
import fast from "./images/fast.PNG";
import confidential from "./images/confidential.PNG";

export const navTextData = {
  home: "Hjem",
  services: "Tjenester",
  testimony: "Vidnesbyrd",
  contact: "Kontakt"
};

export const aboutData = {
  header: "Om Mig",
  name: "Navn",
  location: ["Placering", "Szczecin, Polen"],
  description: `Arbejder i øjeblikket som senior executive processor hos Apple Maps med 8+ års erfaring med oversættelse på dansk og flydende polsk og engelsk.Jeg har arbejdet med at oversætte et e-handelswebsted fra produkt til ofte stillede spørgsmål, vilkår og betingelser og privatliv.`
};

export const headerData = {
  name: "Hej, jeg hedder Deniz",
  workTitle: "Din oversætter..."
};

///Services section

export const servicesTitle = "Tjenester";

export const services = [
  {
    img: website,
    title: "Produktoversættelse",
    text:
      "Jeg bringer e-handelsoversættelsestjenester af høj kvalitet for hvert produkt på din hjemmeside."
  },
  {
    img: document,
    title: "Dokumentoversættelse",
    text:
      "Vi oversætter dokumenter inden for alle emner og leverer det med højeste kvalitet"
  },
  {
    img: person,
    title: "Transskriberen",
    text:
      "Jeg transskriberer lyd/film og producerer dokumenter hurtigt og præcist."
  },
  {
    img: person,
    title: "Person til person",
    text:
      "Jeg kan hjælpe med at oversætte dokument på telefon eller personligt."
  }
];

export const promises = [
  {
    img: quality,
    title: "Kvalitetsoversættelse"
  },
  {
    img: fast,
    title: "Hurtigt og til tiden"
  },
  {
    img: confidential,
    title: "Fortrolighed"
  }
];

// review section

export const reviewTitle = "Vidnesbyrd";

export const reviews = [
  {
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac suscipit turpis. Maecenas odio erat, tempus eleifend mauris quis, interdum consequat leo. ",
     name: "Lorem Ipsum",
    company: "Lorem Ipsum",
    star: "5"
  },
  {
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac suscipit turpis. Maecenas odio erat, tempus eleifend mauris quis, interdum consequat leo. ",
     name: "Lorem Ipsum",
    company: "Lorem Ipsum",
    star: "5"
  },
  {
    review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac suscipit turpis. Maecenas odio erat, tempus eleifend mauris quis, interdum consequat leo. ",
    name: "Lorem Ipsum",
   company: "Lorem Ipsum",
   star: "5" 
  }
];

// contact section

export const contactInfo = {
  contactTitle: "Kontakt",
  contact: "For pris, kontakt mig @",
  phoneNum: "eller ring til mig @"
};

export const copyright =
  "Copyright © 2021 Deniz Atici, Alle rettigheder forbeholdes.";
