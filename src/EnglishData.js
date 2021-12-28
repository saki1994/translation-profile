import document from "./images/document.PNG";
import website from "./images/website.PNG";
import person from "./images/transcriber.PNG";
import quality from "./images/quality.PNG";
import fast from "./images/fast.PNG";
import confidential from "./images/confidential.PNG";

export const navTextData = {
  home: "Home",
  services: "Services",
  testimony: "Testimonies",
  contact: "Contact"
};

export const aboutData = {
  header: "About Me",
  name: "Name",
  location: ["Location", "Szczecin, Poland"],
  description: `I am a native Danish Speaker living in Poland, currently working as Senior Executive Processor at Apple. I can help you translate Danish to Polish and Polish to Danish. My translations are accurate because i always proofread everything before delivery.
  I maintine open and friendly communication and I never rely on automatic translattion technology to do my job.`
};

export const headerData = {
  name: "Hi, I am Deniz",
  workTitle: "Your translator..."
};

///Services section

export const servicesTitle = "Services";

export const services = [
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
];

export const promises = [
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
];

// review section

export const reviewTitle = "Testimony";

export const reviews = [
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
];

// contact section

export const contactInfo = {
  contactTitle: "Contact",
  contact: "For pricing, contact me @",
  phoneNum: "or call me @"
};

export const copyright = "Copyright © 2021 Deniz Atici, All Rights Reserved.";
