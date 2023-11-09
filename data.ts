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
          {
            label: "Lentes para Unisex",
            href: "/productos?genero=unisex"
          },
        ]
      },
      sectionImages: [
        {
          image: "https://placehold.co/400x400.png",
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: "https://placehold.co/400x400.png",
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: "https://placehold.co/400x400.png",
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: "https://placehold.co/400x400.png",
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
            label: "Estilo Juvenil",
            href: "/estilo/juvenil"
          },
        ]
      },
      sectionImages: [
        {
          image: "https://placehold.co/400x400.png",
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: "https://placehold.co/400x400.png",
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: "https://placehold.co/400x400.png",
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
        {
          image: "https://placehold.co/400x400.png",
          button: {
            label: "Ver Modelos",
            action: "/productos"
          }
        },
      ]
    }
  },
  {
    label: "Todos los Modelos",
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
      {
        label: "Lentes para Unisex",
        href: "/productos?genero=unisex"
      },
    ]
  },
  {
    label: "Estilos",
    href: null,
    linksTitle: "Encuentra según tu estilo",
    links: [
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
        label: "Estilo Juvenil",
        href: "/estilo/juvenil"
      },
    ]
  },
  {
    label: "Ver todos los modelos",
    href: "/productos",
  },
];

export const genreBillboard = {
  ladies: {
    image: `${path}images/lady.png`,
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
      {
        label: "Lentes para Unisex",
        href: "/productos?genero=unisex"
      },
    ]
  },
  stylesLink: {
    title: "Encuentra según tu estilo",
    links: [
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
        label: "Estilo Juvenil",
        href: "/estilo/juvenil"
      },
    ]
  },
  paymentMethodsImage: `${path}images/PaymentMethods.png`

}

export const glassesFiveInOneData = {
  title: "5 en 1",
  opacityTitle: "Lentes",
  label: "Ver modelos",
  action: "",
  image: `${path}images/bannerGlassesFiveInOne.jpg`
}
