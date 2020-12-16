import {
  Home,
  Info,
  PenTool,
  PlayCircle,
  ShoppingBag,
  ShoppingCart,
  UserCheck,
  UserPlus,
  Users,
} from "react-feather";

export const MainSideBarMenu = [
  {
    title: "Dashboard",
    icon: Home,
    type: "link",
    path: "/dashboard/project",
    active: true,
  },
  {
    title: "Leads",
    icon: UserCheck,
    type: "sub",
    active: false,
    children: [
      { path: "/dashboard/leads", title: "Leads", type: "link" },
      {
        path: "/dashboard/leads-channel",
        title: "Leads Channel",
        type: "link",
      },
    ],
  },
  {
    title: "Quotes",
    icon: Info,
    type: "link",
    path: "/dashboard/project",
    active: false,
  },
  {
    title: "Customers",
    icon: Users,
    type: "link",
    path: "",
    active: false,
  },
  {
    title: "Marketing",
    icon: ShoppingCart,
    type: "link",
    path: "/dashboard/marketing",
    active: false,
  },
  {
    title: "Products",
    icon: ShoppingBag,
    type: "link",
    path: "",
    active: false,
  },
  {
    title: "Learning",
    icon: PlayCircle,
    type: "sub",
    active: false,
    children: [
      { path: "/learning/learning-list", title: "Courses", type: "link" },
      {
        path: "/knowledgebase/knowledgebaseComponent",
        title: "KnowledgeBase",
        type: "link",
      },
      { path: "/faq/faqComponent", title: "Faqs", type: "link" },
    ],
  },
  {
    title: "Settings",
    icon: UserPlus,
    type: "link",
    path: "",
    active: false,
  },
  {
    title: "Tools",
    icon: PenTool,
    type: "link",
    path: "",
    active: false,
  },
];
