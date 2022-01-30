import document from "./images/document.PNG";
import website from "./images/website.PNG";
import person from "./images/transcriber.PNG";
import quality from "./images/quality.PNG";
import fast from "./images/fast.PNG";
import confidential from "./images/confidential.PNG";

export const navTextData = {
  home: "Dom",
  services: "Usługi",
  testimony: "Świadectwo",
  contact: "Kontakt"
};

export const aboutData = {
  header: "O mnie",
  name: "Nazwa",
  location: ["Lokalizacja", "Szczecin, Polska"],
  description: `Obecnie pracuje jako starszy procesor wykonawczy w Apple Maps z ponad 8-letnim doświadczeniem w tłumaczeniach na język duński oraz biegle w języku polskim i angielskim.Pracowałem nad tłumaczeniem witryny e-commerce z produktu na FAQ, Warunki i Prywatność.`
};

export const headerData = {
  name: "Cześć, Jestem Deniz",
  workTitle: "Twój tłumacz..."
};

///Services section

export const servicesTitle = "Usługi";

export const services = [
  {
    img: website,
    title: "Tłumaczenie produktów",
    text:
      "Dostarczam wysokiej jakości usługi tłumaczeń e-commerce dla każdego produktu na Twojej stronie."
  },
  {
    img: document,
    title: "Tłumaczenie dokumentów",
    text:
      "Tłumaczymy dokumenty o dowolnej tematyce i dostarczamy je w najwyższej jakości."
  },
  {
    img: person,
    title: "Transkrybent",
    text: "Przepisuję audio/filmy oraz szybko i dokładnie tworzę dokumenty."
  },
  {
    img: person,
    title: "Osoba do osoby",
    text: "Pomogę w tłumaczeniu dokumentu telefonicznie lub osobiście."
  }
];

export const promises = [
  {
    img: quality,
    title: "Tłumaczenie wysokiej jakości"
  },
  {
    img: fast,
    title: "Szybko i na czas"
  },
  {
    img: confidential,
    title: "Poufność"
  }
];

// review section

export const reviewTitle = "Świadectwo";

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
  contact: "W sprawie wyceny skontaktuj się ze mną @",
  phoneNum: "lub zadzwoń @"
};

export const copyright =
  "Copyright © 2021 Deniz Atici, Wszelkie prawa zastrzeżone.";
