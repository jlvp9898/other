export function getAllMenusIds() {
  return [
    {
      params: {
        type: "hamburguesas",
      },
    },
    {
      params: {
        type: "guarniciones",
      },
    },
    {
      params: {
        type: "entradas",
      },
    },
    {
      params: {
        type: "bebidas",
      },
    },
    {
      params: {
        type: "postres",
      },
    },
    {
      params: {
        type: "ensaladas",
      },
    },
    {
      params: {
        type: "menus",
      },
    },
  ];
}

export function getMenuData(type) {
  switch (type) {
    case "hamburguesas":
      return {
        title: type,
        banner: {
          title: "",
          img_banner: "static/img/fondos/establecimientos.png",
          prev_page_title: "Menus",
          prev_page: "/menus",
          next_page_title: "Entradas",
          next_page: "/entradas",
        },
        data: {
          title: "",
          category: [
            {
              image: "static/img/lista/img2.png",
              name_pl: "LOREM IPSUM DOLOR",
              price_pl: "$20",
              descripcion_pl:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
            
            }
          ],
        },
      };
      break;
      case "guarniciones":
        return {
          title: type,
          banner: {
            title: "",
            img_banner: "static/img/fondos/establecimientos.png",
            prev_page_title: "Menus",
            prev_page: "/menus",
            next_page_title: "Entradas",
            next_page: "/entradas",
          },
          data: {
            title: "",
            category: [
              {
                image: "static/img/lista/img2.png",
                name_pl: "LOREM IPSUM DOLOR",
                price_pl: "$20",
                descripcion_pl:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              
              }
            ],
          },
        };
        break;
    case "entradas":
      return {
        title: type,
        banner: {
          title: "Entrantes",
          img_banner: "static/img/fondos/contacto.png",
          prev_page_title: "Hamburguesas",
          prev_page: "/hamburguesas",
          next_page_title: "Bebidas",
          next_page: "/bebidas",
        },
        data: {
          title: "Entrantes",
          category: [
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/1.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/2.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/3.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "Potente",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/4.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/5.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/6.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "Reservada",
            },
          ],
        },
      };
      break;
    case "bebidas":
      return {
        title: type,
        banner: {
          title: "Bebidas",
          img_banner: "static/img/fondos/bebidas.png",
          prev_page_title: "Entradas",
          prev_page: "/entradas",
          next_page_title: "Postres",
          next_page: "/postres",
        },
        data: {
          title: "Bebidas",
          category: [
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/1.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/2.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/3.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "Potente",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/4.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/5.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/6.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "Reservada",
            },
          ],
        },
      };
      break;
    case "postres":
      return {
        title: type,
        banner: {
          title: "Postres",
          img_banner: "static/img/fondos/bebidas.png",
          prev_page_title: "Bebidas",
          prev_page: "/bebidas",
          next_page_title: "Ensaladas",
          next_page: "/ensaladas",
        },
        data: {
          title: "Postres",
          category: [
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/1.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/2.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/3.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "Potente",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/4.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/5.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/6.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "Reservada",
            },
          ],
        },
      };
      break;
    case "ensaladas":
      return {
        title: type,
        banner: {
          title: "Ensaladas",
          img_banner: "static/img/fondos/bebidas.png",
          prev_page_title: "Postres",
          prev_page: "/postres",
          next_page_title: "Menus",
          next_page: "/menus",
        },
        data: {
          title: "Ensaladas",
          category: [
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/1.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/2.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/3.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "Potente",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/4.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/5.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/6.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "Reservada",
            },
          ],
        },
      };
      break;
    case "menus":
      return {
        title: type,
        banner: {
          title: "Menús",
          img_banner: "static/img/fondos/bebidas.png",
          prev_page_title: "Ensaladas",
          prev_page: "/ensaladas",
          next_page_title: "Hamburguesas",
          next_page: "/hamburguesas",
        },
        data: {
          title: "Menús",
          category: [
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/1.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/2.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/3.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "Potente",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/4.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "",
            },
            {
              img: "static/img/lista/img2.png",
              imgBig: "static/img/galeria/5.png",
              title: "LOREM IPSUM DOLOR",
              price: "$20",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi unde sit accusantium non.",
              label: "",
            },
            {
              img: "static/img/lista/img1.png",
              imgBig: "static/img/galeria/6.png",
              title: "LOREM IPSUM",
              price: "$20",
              description: "Lorem ipsum dolor sit",
              label: "Reservada",
            },
          ],
        },
      };
      break;
    default:
      return {};
      break;
  }
}
