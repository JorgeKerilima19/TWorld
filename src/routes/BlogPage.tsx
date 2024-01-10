import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Invitation } from "../components";
import { posts } from "../helpers/data/posts";
import { PostInterface } from "../components/Interfaces";

export const BlogPage = () => {
  const { id }: any = useParams();

  const [post, setPost] = useState<PostInterface>();

  useEffect(() => {
    setPost(posts[id - 1]);
  }, []);

  return (
    <article className="py-10 flex flex-col gap-5">
      <header className="text-2xl">{post?.title}</header>
      <div className="w-full flex justify-between">
        <span>{post?.category}</span>
        <span>
          {post?.date.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <span>{post?.author}</span>
        <span>reading time: {post?.readingTime} minutes</span>
      </div>
      <span className="font-semibold">{post?.description}</span>
      <img src={post?.img} alt="Post Image" />

      <h2 className="text-2xl">Title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
        voluptate veritatis, architecto, molestias deleniti, quam sapiente dicta
        veniam nemo laboriosam placeat porro necessitatibus corrupti itaque
        optio tempora incidunt. Reprehenderit impedit dolorum error nemo aliquid
        illum sit eligendi dolores beatae, quae corrupti fuga doloremque sunt,
        rerum quo saepe commodi nobis repellat.
      </p>
      <Invitation />
      <h2 className="text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem enim
        quaerat minima ducimus praesentium ipsam reiciendis quibusdam velit
        dignissimos. Sit quaerat distinctio quod expedita labore, eum fuga!
        Blanditiis, expedita saepe. Corporis, et sit quam impedit aliquam
        deserunt libero quia eligendi veritatis exercitationem laboriosam ipsum
        doloribus. Nihil mollitia error vel libero deleniti rerum architecto
        impedit repellendus, aut quidem? Mollitia, perferendis dolor! Dolor quos
        exercitationem est soluta pariatur ducimus magni rem, nobis sit fugit ea
        ut incidunt amet in labore nihil! Voluptatibus harum natus excepturi
        reiciendis consequatur soluta eligendi adipisci velit laborum.
        Asperiores dicta pariatur ex maxime nihil nobis qui vel? Mollitia, earum
        eligendi. Unde laudantium nesciunt quas ipsam necessitatibus iure nihil
        et. Voluptatibus deserunt maiores quae sed quam aliquid repellendus
        provident? Debitis, ut vero! Molestias consectetur ipsa voluptates porro
        suscipit obcaecati at. Earum tempora expedita quis blanditiis, quasi
        saepe ipsam, nesciunt aut numquam tempore consequatur animi rerum
        pariatur. A, possimus deserunt. Suscipit odio sed esse laudantium
        inventore, eos minima rerum, non, nobis iste corrupti eum quisquam fugit
        debitis similique incidunt aperiam pariatur magni reiciendis natus nam
        porro! Illo, explicabo nobis. Placeat! Ex hic perspiciatis repellendus
        reprehenderit deleniti vel. Iusto sed atque accusantium illo, nulla
        esse, quam dolorum nisi quis ipsa ut quasi similique voluptatum ducimus,
        enim error recusandae. Commodi, temporibus accusamus. Natus eaque ut
        suscipit minus perferendis laborum, omnis recusandae modi reiciendis
        dolorum molestiae explicabo debitis rem sit odit? Eum, nobis error quasi
        numquam officia mollitia officiis doloribus facilis fuga vitae.
      </p>
    </article>
  );
};
