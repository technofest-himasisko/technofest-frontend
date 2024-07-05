import {
  Aperture,
  FigmaLogo,
  ImageSquare,
} from "@phosphor-icons/react/dist/ssr";

const config = {
  baseUrl: process.env.BASE_URL || "http://localhost:3000",
  appShortName: "Technofest 2024",
  appName: "Technology Festival 2024",
  appLang: "id",
  baseMetadata: {
    title: "Technofest 2024",
    description:
      "Coming Soon! Selamat datang di Technofest 2024, acara teknologi paling ditunggu-tunggu tahun ini!",
    keywords: ["technofest", "tech", "festival", "2024"],
  },
  headerNavigations: [
    {
      label: "Tentang",
      href: "/#about",
    },
    {
      label: "Kompetisi",
      children: [
        {
          label: "Fotografi",
          description: "lorem ipsum dolor sit amet, consectetur",
          href: "/events/photography",
          icon: Aperture,
        },
        {
          label: "UI/UX",
          description: "lorem ipsum dolor sit amet, consectetur",
          href: "/events/uiux",
          icon: FigmaLogo,
        },
        {
          label: "Poster",
          description: "lorem ipsum dolor sit amet, consectetur",
          href: "/events/poster",
          icon: ImageSquare,
        },
      ],
    },
    {
      label: "Seminar",
      href: "/events/seminar",
    },
    {
      label: "Merchandise",
      href: "/merchandise",
    },
    {
      label: "Faqs",
      href: "/faqs",
    },
  ],
  footerNavigations: [
    {
      label: "Technofest",
      children: [
        {
          label: "Tentang",
          href: "#about",
        },
        {
          label: "Instagram",
          href: "https://www.instagram.com/technofest.sk",
          target: "_blank",
        },
        {
          label: "Kebijakan privasi",
          href: "/privacy",
        },
      ],
    },
    {
      label: "Laman",
      children: [
        {
          label: "Himasisko",
          href: "https://himasiskounsri.org/",
          target: "_blank",
        },
        {
          label: "Infokom",
          href: "https://infokom.himasiskounsri.org/",
          target: "_blank",
        },
        {
          label: "Linktree",
          href: "https://linktr.ee/himasiskounsri",
          target: "_blank",
        },
      ],
    },
    {
      label: "Media Sosial",
      children: [
        {
          label: "Instagram",
          href: "https://www.instagram.com/himasiskounsri",
          target: "_blank",
        },
        {
          label: "Facebook",
          href: "https://facebook.com/himasiskofasilkomnusri",
          target: "_blank",
        },
        {
          label: "Youtube",
          href: "https://www.youtube.com/@himasiskounsri",
          target: "_blank",
        },
      ],
    },
  ],
};

export default config;
