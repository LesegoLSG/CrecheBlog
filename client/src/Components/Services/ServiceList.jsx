import test from "../../assets/ServicesImages/test.jpg";
import {
  GiWhiteBook,
  GiHotMeal,
  GiBabyfootPlayers,
  GiMusicalNotes,
} from "react-icons/gi";
const ServiceList = [
  {
    id: 0,
    icon: <GiWhiteBook size={40} />,
    title: "Early Learning Programs",
    brief:
      "Engaging activities that foster early cognitive, social, and motor skills development.",
    description:
      "Our early learning programs are designed to provide a fun and stimulating environment where children can explore, learn, and grow. By focusing on interactive activities, we help develop important cognitive abilities, social skills, and physical coordination at a crucial stage of their development. Children will enjoy a variety of hands-on experiences that spark curiosity and creativity.",
    color: "#020bf7",
  },
  {
    id: 1,
    icon: <GiHotMeal size={40} />,
    title: "Nutritious Meals",
    brief:
      "Providing healthy meals and snacks to fuel children’s growth and development.",
    description:
      "We understand the importance of nutrition in a child's growth, which is why we offer a range of nutritious, well-balanced meals and snacks. Our carefully planned menu ensures that children receive the right amount of energy, vitamins, and nutrients to support their physical and mental development. We prioritize fresh, wholesome ingredients to keep them energized and focused throughout the day.",
    color: "#f70202",
  },
  {
    id: 2,
    icon: <GiBabyfootPlayers size={40} />,
    title: "Outdoor Play",
    brief:
      "Encouraging physical activity and teamwork in a safe outdoor setting.",
    description:
      "Our outdoor play sessions are an exciting way to promote physical health, creativity, and social skills. In a safe and supervised environment, children engage in a variety of activities like running, climbing, and cooperative games, all while fostering teamwork and collaboration. These outdoor experiences allow children to explore nature, develop motor skills, and strengthen friendships.",
    color: "#def702",
  },

  {
    id: 3,
    icon: <GiMusicalNotes size={40} />,
    title: "Music & Art",
    brief:
      "Encouraging creativity and self-expression through music and art activities.",
    description:
      "Through music and art, children have the opportunity to explore their creativity and develop fine motor skills. Whether it’s learning an instrument, painting, or engaging in other creative activities, our programs help children express themselves in unique and meaningful ways. These activities also boost their confidence, improve problem-solving abilities, and enhance their emotional development.",
    color: "#02f733",
  },
  {
    id: 4,
    icon: <GiWhiteBook size={40} />,
    title: "After-School Care",
    brief:
      "Providing a structured and supportive environment for children after school.",
    description:
      "Our after-school care program is designed to support children beyond their regular school hours. We offer a safe and supervised environment where children can finish homework, participate in fun activities, or simply relax. Our caregivers ensure that each child has the opportunity to unwind, socialize with peers, and explore their interests in a calm and structured setting.",
    color: "#02f733",
  },
  {
    id: 5,
    icon: <GiWhiteBook size={40} />,
    title: "Language Development",
    brief:
      "Fostering communication skills with interactive lessons and activities.",
    description:
      "We prioritize language development in a fun and engaging way through storytelling, songs, and interactive lessons. Our activities help children expand their vocabulary, understand language structure, and improve their communication abilities. By encouraging verbal and non-verbal communication, we build the foundation for strong language skills that will support their academic and social success.",
    color: "#FFB6C1",
  },
  {
    id: 6,
    icon: <GiWhiteBook size={40} />,
    title: "Infant Care",
    brief:
      "Offering personalized and loving care for infants in a safe environment.",
    description:
      "Our infant care program provides a nurturing and secure environment for babies, where they receive individual attention and loving care. We focus on creating a stimulating space with age-appropriate activities that support early development. Each baby’s needs are carefully met, ensuring they feel comfortable and secure while forming a strong bond with their caregivers.",

    color: "#FFB6C1",
  },
];

export default ServiceList;
