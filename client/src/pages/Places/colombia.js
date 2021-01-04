import colombia1 from "../../assets/images/places/colombia/colombia1.jpg";
import colombia2 from "../../assets/images/places/colombia/colombia2.jpg";
import colombia3 from "../../assets/images/places/colombia/colombia3.jpg";
import colombia4 from "../../assets/images/places/colombia/colombia4.jpg";
import colombia5 from "../../assets/images/places/colombia/colombia5.jpg";
import colombia6 from "../../assets/images/places/colombia/colombia6.jpg";

const colombia = [
  {
    image: colombia1,
    alt: "",
  },
  {
    image: colombia2,
    alt: "",
  },
  {
    image: colombia3,
    alt: "",
  },
  {
    image: colombia4,
    alt: "",
  },
  {
    image: colombia5,
    alt: "",
  },
  {
    image: colombia6,
    alt: "",
  },
];

colombia.forEach((pic, i) => {
  pic.id = i + 1;
});

export { colombia };
