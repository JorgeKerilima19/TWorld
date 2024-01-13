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
    content:
      "<h2>Maecenas fringilla imperdiet malesuada</h2> <p>Phasellus tristique dignissim sapien vel consectetur. Nam in lacus iaculis, euismod erat eget, posuere sem. Praesent ac sapien gravida, lobortis enim eget, blandit felis. Pellentesque hendrerit turpis quis libero aliquam pulvinar. Maecenas fringilla imperdiet malesuada.</p><p>Suspendisse in ullamcorper turpis, ut ultrices neque. Nulla eleifend magna a eros mattis volutpat. Nam a purus purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at efficitur odio, nec tempus nisl. Ut finibus venenatis nulla id maximus. Vestibulum pretium, risus vel fringilla laoreet.</p><h2>Ut finibus venenatis nulla</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Morbi pretium consequat consectetur. Praesent blandit ornare felis a blandit. Sed lacinia bibendum mollis. Nunc vel tellus volutpat, faucibus.</p><p>Phasellus tristique dignissim sapien vel consectetur. Nam in lacus iaculis, euismod erat eget, posuere sem. Praesent ac sapien gravida, lobortis enim eget, blandit felis. Pellentesque hendrerit turpis quis libero aliquam pulvinar. Maecenas fringilla imperdiet malesuada. Vestibulum cursus malesuada aliquam. Aliquam lacinia quam condimentum placerat congue. Maecenas tempor tristique odio non auctor. Nunc hendrerit in eros.</p>",
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
    content:
      "<h2>Maecenas commodo nisl eu sapien.</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Nam luctus id diam ut pharetra. Ut mi elit, ultrices accumsan pellentesque at, condimentum ac lectus. Praesent venenatis augue sed est fringilla, in condimentum sapien tincidunt. Nullam lacinia nisi sit amet felis suscipit bibendum. Etiam sed semper tellus.</p><p class='tracking-widest'>Suspendisse in ullamcorper turpis, ut ultrices neque. Nulla eleifend magna a eros mattis volutpat. Nam a purus purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at efficitur odio, nec tempus nisl. Ut finibus venenatis nulla id maximus. Vestibulum pretium, risus vel fringilla laoreet.</p><h2>Esse cillum dolore eu fugiat nulla pariatur</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Morbi pretium consequat consectetur. Praesent blandit ornare felis a blandit. Sed lacinia bibendum mollis. Nunc vel tellus volutpat, faucibus.</p>",
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
      "<h2>In pharetra, ligula nec pulvinar</h2> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><p>Suspendisse in ullamcorper turpis, ut ultrices neque. Nulla eleifend magna a eros mattis volutpat. Nam a purus purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at efficitur odio, nec tempus nisl. Ut finibus venenatis nulla id maximus. Vestibulum pretium, risus vel fringilla laoreet.</p><h2>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet</h2><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Morbi pretium consequat consectetur. Phasellus tristique dignissim sapien vel consectetur. Nam in lacus iaculis, euismod erat eget, posuere sem. Praesent ac sapien gravida, lobortis enim eget, blandit felis. Pellentesque hendrerit turpis quis libero aliquam pulvinar. Maecenas fringilla imperdiet malesuada. Vestibulum cursus malesuada aliquam. Aliquam lacinia quam condimentum placerat congue. Maecenas tempor tristique odio non auctor. Nunc hendrerit in eros.</p>",
  },
];
