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
    // {
    //   label: "Seminar",
    //   href: "/events/seminar",
    // },
    // {
    //   label: "Merchandise",
    //   href: "/merchandise",
    // },
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
  mediaPartners: [
    "/images/media_partners/1.png",
    "/images/media_partners/2.png",
    "/images/media_partners/3.png",
    "/images/media_partners/4.png",
    "/images/media_partners/5.png",
    "/images/media_partners/6.png",
    "/images/media_partners/7.png",
    "/images/media_partners/8.png",
    "/images/media_partners/9.png",
    "/images/media_partners/10.png",
    "/images/media_partners/11.jpg",
    "/images/media_partners/12.png",
    "/images/media_partners/13.png",
    "/images/media_partners/14.png",
    "/images/media_partners/15.png",
    "/images/media_partners/16.png",
    "/images/media_partners/17.png",
    "/images/media_partners/18.png",
    "/images/media_partners/19.png",
  ],
  sponsors: [
    "/images/dicoding.png",
    "/images/idcloudhost.png",
    "/images/wardah.jpeg",
  ],
  timelines: [
    {
      name: "Opening Ceremony",
      date: "3 Agustus 2024",
      description:
        "Acara ini akan memperkenalkan seluruh rangkaian kegiatan Technofest dan menyambut para peserta serta tamu undangan dengan berbagai sambutan dan penampilan menarik.",
    },
    {
      name: "Lomba",
      date: "5 Agustus - 21 September 2024",
      description: "",
    },
    {
      name: "Seminar",
      date: "21 September 2024",
      description:
        "Seminar ini akan menampilkan berbagai pembicara ahli yang akan membahas topik-topik terkini dan inovatif dalam dunia teknologi. Peserta akan mendapatkan wawasan dan ilmu baru dari seminar ini.",
    },
  ],
};

export default config;
