import { Abel } from "next/font/google";

export const slides = [
  {
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Sliders3.jpg",
    title: "70% de descuento en todos nuestros lentes",
    description: "Descubre lo mejor en lentes 5 en 1 para damas y cabellaros",
    label: "Comprar Ahora",
    action: "/productos",
    position: "right"
  },
  {
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Sliders2.jpg",
    title: "70% de descuento en todos nuestros lentes",
    description: "Descubre lo mejor en lentes 5 en 1 para damas y cabellaros",
    label: "Comprar Ahora",
    action: "/productos",
    position: "left"
  },
]

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
]

// export const styles = [
//   {
//     title: "Clásico",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Clasico.png"
//   },
//   {
//     title: "Moderno",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Moderno.png"
//   },
//   {
//     title: "Wayfarer",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Wayfarer-5.png"
//   },
//   {
//     title: "Deportivo",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Deportivo-.png"
//   },
//   {
//     title: "Aviador",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Aviador.png"
//   },
//   {
//     title: "Retro",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Retro.png"
//   },
// ]

// export const logo = "";

export const genreBillboard = {
  ladies: {
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/lady.png",
    titleGray: "Lentes",
    titleBlack: "Damas",
    label: "Ver Modelos",
    action: "/productos?genero=damas",
  }, 
  gentlemen: {
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/gentleman.png",
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
  paymentMethodsImage: "https://www.nomadavzla.com/wp-content/uploads/2023/09/PaymentMethods-1.png"

}

export const glassesFiveInOneData = {
  title: "5 en 1",
  opacityTitle: "Lentes",
  label: "Ver modelos",
  action: "",
  image: "http://nomada-admin.test/images/bannerGlassesFiveInOne.jpg"
}
