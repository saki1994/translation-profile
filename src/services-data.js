import document from "./images/document.PNG";
import website from "./images/website.PNG";
import person from "./images/transcriber.PNG";
import quality from "./images/quality.PNG";
import fast from "./images/fast.PNG";
import confidential from "./images/confidential.PNG";

const services = {
  english: [
    {
      img: document,
      title: "Website / Product Translation",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu vestibulum, fringilla est non, scelerisque enim."
    },
    {
      img: website,
      title: "Document Translation",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu vestibulum, fringilla est non, scelerisque enim."
    },
    {
      img: person,
      title: "Transcriber",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a arcu vestibulum, fringilla est non, scelerisque enim."
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
  ]
};

export default services;
export { promises };
