import jevonOnBeach from "../../assets/images/portraits/jevon-praia-do-forte.jpg";
import maskedCrip from "../../assets/images/portraits/masked-crip.jpg";
import huey from "../../assets/images/portraits/huey.jpg";
import kamryn from "../../assets/images/portraits/kamryn.jpg";
import malik from "../../assets/images/portraits/malik.jpg";
import pregnant_chick from "../../assets/images/portraits/pregnant-chick.jpg";
import bald_rihanna from "../../assets/images/portraits/bald-rihanna.jpg";
import beach_boy from "../../assets/images/portraits/beach-boy.jpg";

const portraits = [
  { image: jevonOnBeach },
  { image: maskedCrip },
  { image: huey },
  { image: beach_boy },
  { image: kamryn },
  { image: malik },
  { image: pregnant_chick },
  { image: bald_rihanna },
];

portraits.forEach((portrait, i) => {
  portrait.id = i + 1;
});

export { portraits };
