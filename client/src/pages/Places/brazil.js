import brazil1 from "../../assets/images/places/brazil/brazil1.jpg";
import brazil2 from "../../assets/images/places/brazil/brazil2.jpg";
import brazil3 from "../../assets/images/places/brazil/brazil3.jpg";
import brazil4 from "../../assets/images/places/brazil/brazil4.jpg";
import brazil5 from "../../assets/images/places/brazil/brazil5.jpg";

const brazil = [
  {
    image: brazil1,
    alt: "",
  },
  {
    image: brazil2,
    alt: "",
  },
  {
    image: brazil3,
    alt: "",
  },
  {
    image: brazil4,
    alt: "",
  },
  {
    image: brazil5,
    alt: "",
  },
];

brazil.forEach((pic, i) => {
  pic.id = i + 1;
});

export { brazil };
