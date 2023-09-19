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
    MenaMenu: {
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
    MenaMenu: {
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

// export const styles = [
//   {
//     title: "Clasico",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Styles-1.jpg"
//   },
//   {
//     title: "Vintage",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Styles-2.jpg"
//   },
//   {
//     title: "Higienico",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Styles-3.jpg"
//   },
//   {
//     title: "Juvenil",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Styles-5.jpg"
//   },
//   {
//     title: "Moderno",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Styles-4.jpg"
//   },
//   {
//     title: "Retro",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Styles-2.jpg"
//   },
//   {
//     title: "Deportivo",
//     image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Styles-5.jpg"
//   },
// ]

export const styles = [
  {
    title: "Clásico",
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Style.png"
  },
  {
    title: "Juvenil",
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Style.png"
  },
  {
    title: "Moderno",
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Style.png"
  },
  {
    title: "Retro",
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Style.png"
  },
  {
    title: "Deportivo",
    image: "https://www.nomadavzla.com/wp-content/uploads/2023/09/Glasses-Style.png"
  },
]

export const logo = "";

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
