interface MainLink {
  name: string;
  linkTo: string;
  targetSegment: string | null;
}

export const MainLinks: MainLink[] = [
  {
    name: "Home",
    linkTo: "/",
    targetSegment: null,
  },
  {
    name: "About",
    linkTo: "/about",
    targetSegment: "about",
  },
  {
    name: "Training",
    linkTo: "/training",
    targetSegment: "training",
  },
  {
    name: "Our Clients",
    linkTo: "/clients",
    targetSegment: "clients",
  },
  {
    name: "Community",
    linkTo: "/community",
    targetSegment: "community",
  },
  {
    name: "Contact",
    linkTo: "/contact",
    targetSegment: "contact",
  },
  {
    name: "Find Us",
    linkTo: "/find-us",
    targetSegment: "find-us",
  },
];
