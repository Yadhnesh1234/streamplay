import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "VP The Begining",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet dictum neque, laoreet dolor.",
    image: "/images/blog/contest1.jpg",
    author: {
      name: "Apex",
      image: "/images/blog/author-01.png",
      designation: "Organiser",
    },
    tags: ["Live"],
    publishDate: "2025",
  }
];
export default blogData;
