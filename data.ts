const path = process.env.NEXT_PUBLIC_IMAGE_PATH;

export const menuItems = [
  {
    label: "Géneros",
    href: null,
    hasMegaMenu: true,
    MegaMenu: {
      sectionLinks: {
        title: "Encuentra según tu género",
        links: [
          {
            label: "Lentes para Caballeros",
            href: "/productos?genero=caballeros"
          },
          {
            label: "Lentes para Damas",
            href: "/productos?genero=damas"
          },
        ]
      },
      sectionImages: [
        {
          image: `${path}images/menu/Glasses-Styles-1.jpg`,
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: `${path}images/menu/Glasses-Styles-2.jpg`,
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: `${path}images/menu/Glasses-Styles-3.jpg`,
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: `${path}images/menu/Glasses-Styles-4.jpg`,
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
      ]
    }
  },
  {
    label: "Estilos",
    href: null,
    hasMegaMenu: true,
    MegaMenu: {
      sectionLinks: {
        title: "Encuentra según tu estilo",
        links: [
          {
            label: "Estilo Aviador",
            href: "/estilo/aviador"
          },
          {
            label: "Estilo Clásico",
            href: "/estilo/clasico"
          },
          {
            label: "Estilo Moderno",
            href: "/estilo/moderno"
          },
          {
            label: "Estilo Retro",
            href: "/estilo/retro"
          },
          {
            label: "Estilo Deportivo",
            href: "/estilo/deportivo"
          },
          {
            label: "Estilo Wayfarer",
            href: "/estilo/wayfarer"
          },
        ]
      },
      sectionImages: [
        {
          image: `${path}images/menu/Glasses-Styles-1.jpg`,
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: `${path}images/menu/Glasses-Styles-2.jpg`,
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: `${path}images/menu/Glasses-Styles-3.jpg`,
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: `${path}images/menu/Glasses-Styles-4.jpg`,
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
      ]
    }
  },
  {
    label: "Productos",
    href: "/productos",
    hasMegaMenu: false,
  }
]

export const menuMobileItems = [
  {
    label: "Géneros",
    href: null,
    linksTitle: "Encuentra según tu género",
    links: [
      {
        label: "Lentes para Caballeros",
        href: "/productos?genero=caballeros"
      },
      {
        label: "Lentes para Damas",
        href: "/productos?genero=damas"
      },
    ]
  },
  {
    label: "Estilos",
    href: null,
    linksTitle: "Encuentra según tu estilo",
    links: [
      {
        label: "Estilo Aviador",
        href: "/estilo/aviador"
      },
      {

        label: "Estilo Clásico",
        href: "/estilo/clasico"
      },
      {
        label: "Estilo Moderno",
        href: "/estilo/moderno"
      },
      {
        label: "Estilo Retro",
        href: "/estilo/retro"
      },
      {
        label: "Estilo Deportivo",
        href: "/estilo/deportivo"
      },
      {
        label: "Estilo Wayfarer",
        href: "/estilo/wayfarer"
      },
    ]
  },
  {
    label: "Productos",
    href: "/productos",
  },
];

export const genreBillboard = {
  ladies: {
    image: `${path}images/ladyGenre.png`,
    titleGray: "Lentes",
    titleBlack: "Damas",
    label: "Ver Modelos",
    action: "/productos?genero=damas",
  },
  gentlemen: {
    image: `${path}images/gentleman.png`,
    titleGray: "Lentes",
    titleBlack: "Caballeros",
    label: "Ver Modelos",
    action: "/productos?genero=caballeros",
  }
}

export const footerInfo = {
  genreLink: {
    title: "Encuentra según tu género",
    links: [
      {
        label: "Lentes para Caballeros",
        href: "/productos?genero=caballeros"
      },
      {
        label: "Lentes para Damas",
        href: "/productos?genero=damas"
      },
    ]
  },
  stylesLink: {
    title: "Encuentra según tu estilo",
    links: [
      {
        label: "Estilo Aviador",
        href: "/estilo/aviador"
      },
      {
        label: "Estilo Clásico",
        href: "/estilo/clasico"
      },
      {
        label: "Estilo Moderno",
        href: "/estilo/moderno"
      },
      {
        label: "Estilo Retro",
        href: "/estilo/retro"
      },
      {
        label: "Estilo Deportivo",
        href: "/estilo/deportivo"
      },
      {
        label: "Estilo Wayfarer",
        href: "/estilo/wayfarer"
      },
    ]
  },
  paymentMethodsImage: `${path}images/PaymentMethods.png`

}

export const glassesFiveInOneData = {
  title: "5 en 1",
  opacityTitle: "Lentes",
  label: "Ver modelos",
  action: "/lentes-5-en-1",
  image: `${path}images/bannerGlassesFiveInOne.jpg`
}
