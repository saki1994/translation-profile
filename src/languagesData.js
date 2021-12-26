import document from "./images/document.PNG";
import website from "./images/website.PNG";
import person from "./images/transcriber.PNG";
import quality from "./images/quality.PNG";
import fast from "./images/fast.PNG";
import confidential from "./images/confidential.PNG";

const navTextData = {
  english: ["Home", "Services", "Testimony", "Contact"],
  polish: ["Dom", "Usługi", "Świadectwo", "Kontakt"],
  danish: ["Hjem", "Tjenester", "Vidnesbyrd", "Kontakt"]
};

const aboutData = {
  english: {
    header: "About Me",
    name: "Name",
    location: ["Location", "Szczecin, Poland"],
    description: `Currently working as a senior executive processor at Apple Maps with 8+ years experience with translation in Danish and fluent in Polish and English.I have worked in translating an ecommerce website from product to FAQ, Terms and Condition and Privacy.`
  },
  danish: {
    header: "Om Mig",
    name: "Navn",
    location: ["Placering", "Szczecin, Polen"],
    description: `Arbejder i øjeblikket som senior executive processor hos Apple Maps med 8+ års erfaring med oversættelse på dansk og flydende polsk og engelsk.Jeg har arbejdet med at oversætte et e-handelswebsted fra produkt til ofte stillede spørgsmål, vilkår og betingelser og privatliv.`
  },
  polish: {
    header: "O mnie",
    name: "Nazwa",
    location: ["Lokalizacja", "Szczecin, Polska"],
    description: `Obecnie pracuje jako starszy procesor wykonawczy w Apple Maps z ponad 8-letnim doświadczeniem w tłumaczeniach na język duński oraz biegle w języku polskim i angielskim.Pracowałem nad tłumaczeniem witryny e-commerce z produktu na FAQ, Warunki i Prywatność.`
  }
};

const headerData = {
  english: {
    name: "Hi, I am Deniz",
    workTitle: "Your translator..."
  },
  danish: {
    name: "Hej, jeg hedder Deniz",
    workTitle: "Din oversætter..."
  },
  polish: {
    name: "Cześć, Jestem Deniz",
    workTitle: "Twój tłumacz..."
  }
};

///Services section

const servicesTitle = {
  english: "Services",
  danish: "Tjenester",
  polish: "Usługi"
};

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
      img: confidential,
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

// review section

const reviewTitle = {
  english: "Testimony",
  danish: "Vidnesbyrd",
  polish: "Świadectwo"
};

const reviews = {
  english: [
    {
      review:
        "The jackfruit was domesticated independently in South Asia and Southeast Asia. The fruit was later introduced to Guam via Filipino settlers when both were part of the Spanish Empire.",
      name: "Sarah Atici",
      company: "Sarah Co.",
      star: "5"
    },
    {
      review:
        "The jackfruit was domesticated independently in South Asia and Southeast Asia. The fruit was later introduced to Guam via Filipino settlers when both were part of the Spanish Empire.",
      name: "Raya Cox",
      company: "Raya Corp.",
      star: "5"
    },
    {
      review:
        "The jackfruit was domesticated independently in South Asia and Southeast Asia. The fruit was later introduced to Guam via Filipino settlers when both were part of the Spanish Empire.",
      name: "Bianca Atici",
      company: "Bianca INC.",
      star: "5"
    }
  ],
  danish: [
    {
      review:
        "Jackfrugten blev tæmmet uafhængigt i Sydasien og Sydøstasien. Frugten blev senere introduceret til Guam via filippinske bosættere, da begge var en del af det spanske imperium.",
      name: "Sarah Atici",
      company: "Sarah Co.",
      star: "5"
    },
    {
      review:
        "Jackfrugten blev tæmmet uafhængigt i Sydasien og Sydøstasien. Frugten blev senere introduceret til Guam via filippinske bosættere, da begge var en del af det spanske imperium.",
      name: "Raya Cox",
      company: "Raya Corp.",
      star: "5"
    },
    {
      review:
        "Jackfrugten blev tæmmet uafhængigt i Sydasien og Sydøstasien. Frugten blev senere introduceret til Guam via filippinske bosættere, da begge var en del af det spanske imperium.",
      name: "Bianca Atici",
      company: "Bianca INC.",
      star: "5"
    }
  ],
  polish: [
    {
      review:
        "Jackfruit został udomowiony niezależnie w Azji Południowej i Azji Południowo-Wschodniej. Owoce zostały później wprowadzone na Guam przez osadników filipińskich, gdy obaj byli częścią Cesarstwa Hiszpańskiego.",
      name: "Sarah Atici",
      company: "Sarah Co.",
      star: "5"
    },
    {
      review:
        "Jackfruit został udomowiony niezależnie w Azji Południowej i Azji Południowo-Wschodniej. Owoce zostały później wprowadzone na Guam przez osadników filipińskich, gdy obaj byli częścią Cesarstwa Hiszpańskiego.",
      name: "Raya Cox",
      company: "Raya Corp.",
      star: "5"
    },
    {
      review:
        "Jackfruit został udomowiony niezależnie w Azji Południowej i Azji Południowo-Wschodniej. Owoce zostały później wprowadzone na Guam przez osadników filipińskich, gdy obaj byli częścią Cesarstwa Hiszpańskiego.",
      name: "Bianca Atici",
      company: "Bianca INC.",
      star: "5"
    }
  ]
};

// contact section

const contactTitle = {
  english: "Contact",
  danish: "Kontakt",
  polish: "Kontakt"
};

const contact = {
  english: "For pricing, contact me @",
  danish: "For pris, kontakt mig @",
  polish: "W sprawie wyceny skontaktuj się ze mną @"
};

const phoneNum = {
  english: "or call me @",
  danish: "eller ring til mig @",
  polish: "lub zadzwoń @"
};

const copyright = {
  english: "Copyright © 2021 Deniz Atici, All Rights Reserved.",
  danish: "Copyright © 2021 Deniz Atici, Alle rettigheder forbeholdes.",
  polish: "Copyright © 2021 Deniz Atici, Wszelkie prawa zastrzeżone."
};

export {
  headerData,
  navTextData,
  aboutData,
  servicesTitle,
  services,
  promises,
  reviewTitle,
  reviews,
  contactTitle,
  contact,
  phoneNum,
  copyright
};
