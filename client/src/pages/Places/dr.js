import DR1 from "../../assets/images/places/dr/DR1.jpg";
import DR2 from "../../assets/images/places/dr/DR2.jpg";
import DR3 from "../../assets/images/places/dr/DR3.jpg";
import DR4 from "../../assets/images/places/dr/DR4.jpg";
import DR5 from "../../assets/images/places/dr/DR5.jpg";
import DR6 from "../../assets/images/places/dr/DR6.jpg";
import DR7 from "../../assets/images/places/dr/DR7.jpg";

const dr = [
  {
    image: DR1,
    alt: "",
  },
  {
    image: DR2,
    alt: "",
  },
  {
    image: DR3,
    alt: "",
  },
  {
    image: DR4,
    alt: "",
  },
  {
    image: DR5,
    alt: "",
  },
  {
    image: DR6,
    alt: "",
  },
  {
    image: DR7,
    alt: "",
  },
];

dr.forEach((pic, i) => {
  pic.id = i + 1;
});

export { dr };
