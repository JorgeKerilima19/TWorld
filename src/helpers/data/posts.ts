import { PostInterface } from "../../components/Interfaces";
import img1 from "../../assets/images/postImage1.jpg";
import img2 from "../../assets/images/postImage2.png";
import img3 from "../../assets/images/postImage3.jpg";

export const posts: PostInterface[] = [
  {
    id: 1,
    title: "UX/UI Design Principles",
    img: img3,
    description:
      "Learn key principles of user experience and user interface design.",
    date: new Date("2023-9-19"),
    readingTime: 12,
    category: "Design",
    author: "Alice Johnson",
  },
  {
    id: 2,
    title: "Data Visualization Techniques",
    img: img2,
    description: "Explore effective data visualization methods.",
    date: new Date("2023-09-15"),
    readingTime: 15,
    category: "Analytics",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Introduction to Web Development",
    img: img1,
    description: "Learn the basics of web development.",
    date: new Date("2023-09-1"),
    readingTime: 10,
    category: "Development",
    author: "John Doe",
    content:
      "<h2>Lorem Ipsum Title</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><h2>Another Lorem Ipsum Title</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
  },
];
