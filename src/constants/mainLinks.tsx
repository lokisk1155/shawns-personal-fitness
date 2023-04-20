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
    name: "Schedule",
    linkTo: "/schedule",
    targetSegment: "schedule",
  },
  {
    name: "Community",
    linkTo: "/community",
    targetSegment: "community",
  },
  {
    name: "About",
    linkTo: "/about",
    targetSegment: "about",
  },
  {
    name: "Find Us",
    linkTo: "/find-us",
    targetSegment: "find-us",
  },
];
