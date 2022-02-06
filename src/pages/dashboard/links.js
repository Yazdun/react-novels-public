import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FiFeather } from "react-icons/fi";
import { BsHeart, BsStar } from "react-icons/bs";

export const links = [
  {
    to: "",
    title: "main",
    icon: <MdOutlineSpaceDashboard />,
    url: "/dashboard/",
  },
  {
    to: "reviews",
    title: "reviews",
    icon: <FiFeather />,
    url: "/dashboard/reviews",
  },
  {
    to: "likes",

    title: "likes",
    icon: <BsHeart />,
    url: "/dashboard/likes",
  },
  {
    to: "stars",

    title: "stars",
    icon: <BsStar />,
    url: "/dashboard/stars",
  },
];
