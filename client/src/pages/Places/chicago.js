import chicago1 from "../../assets/images/places/chicago/chicago1.jpg";
import chicago2 from "../../assets/images/places/chicago/chicago2.jpg";
import chicago3 from "../../assets/images/places/chicago/chicago3.jpg";
import chicago4 from "../../assets/images/places/chicago/chicago4.jpg";
import chicago5 from "../../assets/images/places/chicago/chicago5.jpg";
import chicago6 from "../../assets/images/places/chicago/chicago6.jpg";
import chicago7 from "../../assets/images/places/chicago/chicago7.jpg";
import chicago8 from "../../assets/images/places/chicago/chicago8.jpg";
import chicago9 from "../../assets/images/places/chicago/chicago9.jpg";

const chicago = [
  {
    image: chicago1,
    alt: "",
  },
  {
    image: chicago2,
    alt: "",
  },
  {
    image: chicago3,
    alt: "",
  },
  {
    image: chicago4,
    alt: "",
  },
  {
    image: chicago5,
    alt: "",
  },
  {
    image: chicago6,
    alt: "",
  },
  {
    image: chicago7,
    alt: "",
  },
  {
    image: chicago8,
    alt: "",
  },
  {
    image: chicago9,
    alt: "",
  },
];

chicago.forEach((pic, i) => {
  pic.id = i + 1;
});

export { chicago };
