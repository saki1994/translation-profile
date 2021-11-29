import document from "./images/document.PNG";
import website from "./images/website.PNG";
import person from "./images/transcriber.PNG";
import quality from "./images/quality.PNG";
import fast from "./images/fast.PNG";
import confidential from "./images/confidential.PNG";

const services = {
  english: [
    {
      img: website,
      title: "Product Translation",
      text:
        "I bring high-quality e-commerce translation services for each products on your website."
    },
    {
      img: document,
      title: "Document Translation",
      text:
        "We translate documents in any topics and deliver it with highest quality."
    },
    {
      img: person,
      title: "Transcriber",
      text:
        "I transcribe audio/movies and produce documents quickly and accurately."
    },
    {
      img: person,
      title: "Person to Person",
      text: "I can help translating document on phone or personal."
    }
  ],
  danish: [
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
  ],
  polish: [
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
  ]
};

const promises = {
  english: [
    {
      img: quality,
      title: "Quality Translation"
    },
    {
      img: fast,
      title: "Fast and On Time"
    },
    {
      img: confidential,
      title: "Confidentiality"
    }
  ],
  danish: [
    {
      img: quality,
      title: "Kvalitetsoversættelse"
    },
    {
      img: fast,
      title: "Hurtigt og til tiden"
    },
    {
      img: "Fortroligt",
      title: "Fortrolighed"
    }
  ],
  polish: [
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
  ]
};

export default services;
export { promises };
