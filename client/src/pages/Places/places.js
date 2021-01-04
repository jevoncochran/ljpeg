import chicago from "../../assets/images/places/chicago.jpeg";
import la from "../../assets/images/places/la.jpeg";
import bay_area from "../../assets/images/places/bay-area.jpeg";
import detroit from "../../assets/images/places/detroit-skyline.jpg";
import colombia from "../../assets/images/places/colombia.jpeg";
import brazil from "../../assets/images/places/brazil.jpeg";
import cuba from "../../assets/images/places/cuba.jpeg";
import dominican_republic from "../../assets/images/places/dominican-republic.jpg";
import puerto_rico from "../../assets/images/places/puerto-rico.jpeg";

export const places = [
  { image: chicago, place: "Chicago", alt: "Chicago" },
  { image: la, place: "Los Angeles", alt: "Los Angeles" },
  { image: bay_area, place: "Bay Area", alt: "SF Bay Area" },
  { image: detroit, place: "Detroit", alt: "Detroit", bg_position: "60% 0" },
  {
    image: colombia,
    place: "Colombia",
    alt: "Colombia",
    collection: "Colombia",
    directory: "colombia",
  },
  { image: brazil, place: "Brazil", alt: "Brazil" },
  { image: cuba, place: "Cuba", alt: "Cuba" },
  {
    image: dominican_republic,
    place: "Dominican Republic",
    alt: "Dominican Republic",
  },
  { image: puerto_rico, place: "Puerto Rico", alt: "Puerto Rico" },
];
