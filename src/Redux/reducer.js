const InitialState = {
  cartLength:0,
  input: "",
  ListItems: [
    {
      id: 1,
      image:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/03/02/source-img/20200302163009_52654.jpg",
      name: "Amazfit Bip S Smart Watch",
      description:
        "The Amazfit Bip S with only 31g super lightweight body, which offers you a better wearing experience. The combination of beauty and technology makes it more cost-effective than ever before.",
      price: 80,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 2,
      image:
        "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2020/04/01/source-img/20200401141208_5e8430b825bca.jpg_500x500.jpg",
      name: "USAMS 3 in 1",
      description:
        "USAMS 3 in 1 Portable Multifunctional 10W Wireless Charging Sterilizer - White	4",
      price: 45,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 3,
      image:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2020/04/13/goods_img_big-v2/20200413103452_5e93cfcc89d5a.jpg",
      name: "X96 X96Q Android 10.0 Smart 4K TV Box",
      description:
        "X96Q Smart TV Box is a practical home smart media player. Android 10.0 gives you the ability to run virtually any Android App on your TV. The powerful Allwinner H313 Quad Core ARM Cortex A53 processor with the Penta core Mali-G31 graphics chip provides stellar performance for high definition video playback.",
      price: 30,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 4,
      image:
        "https://cdn02.plentymarkets.com/zkz64ybyye6y/item/images/2618/full/2618--Bauchroller-II--005.jpg",
      name: "Abdominal Wheel",
      description:
        "Abdominal Wheel Non-skid Tire Skin Coiling Wheel Mute Single-wheel Abdominal Bodybuilder Fitness Exercise Abdominal Muscle Roller",
      price: 20,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71gK7VlDnGL._AC_SL1280_.jpg",
      name: "VicTsing MM057 Wireless Mouse",
      description:
        "Comfortable Ergonomic Design, After thousands of samples of palm data, we designed this ergonomic mouse. The mouse has a streamlined arc and thumb rest to help reduce the stress caused by prolonged use of the mouse. The side pits help reduce slippage and maximize your feeling of use!",
      price: 13,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 6,
      image:
        "https://imgaz2.staticbg.com/thumb/large/oaupload/banggood/images/E2/66/4b160ce3-e010-41b8-9de0-c4d520563708.jpg",
      name: "Digital Thermometer Infrared",
      description:
        "Multi-fuction Baby / Adult Digital Thermometer Infrared Forehead Body Thermometer Gun Non-contact Temperature Measurement Device - Multi",
      price: 60,
      isInCart: false,
      quantity: 1,
    },
    {
      id: 7,
      isInCart: false,
      image:
        "https://gloimg.gbtcdn.com/soa/gb/pdm-product-pic/Electronic/2019/04/09/goods_img_big-v1/20190409103828_72660.jpg",
      name: "SOLOVE USB Charging Clip Electric Fan",
      description:
        "360° free rotation: Refreshing and comfortable at any angle. Comes with a high-elastic clip-on base for a stable, non-slip, free hands",
      price: 22,
      quantity: 1,
    },
    {
      id: 8,
      isInCart: false,
      image:
        "https://3q87le1gsko01ibim33e4wib-wpengine.netdna-ssl.com/wp-content/uploads/2020/04/cover-swim-face-mask-e1587669392205.jpg",
      name: "Face Mask UV",
      description:
        "Made of 100% cotton, breathable, windproof, sweat absorbing, comfortable, skin friendly，Very strechy. Ear strap is very strechy so you can enlarge the size.",
      price: 15,
      quantity: 1,
    },
    {
      id: 9,
      isInCart: false,
      image:
        "https://i.pinimg.com/474x/d6/5d/9f/d65d9fd624a501792c2404aef672a0c7.jpg",
      name: "Tent Person",
      description:
        "Specially designed to offer privacy you need at your campground, the Portable Outdoor Pop-up Toilet Dressing Fitting Room Privacy Shelter Tent is ideal for building a fitting room, a shower or bathroom booth, a restroom or other temporary shelters outdoors.",
      price: 33,
      quantity: 1,
    },
    {
      id: 10,
      isInCart: false,
      image:
        "https://img.alicdn.com/imgextra/i2/2274037852/TB2TZfqX00opuFjSZFxXXaDNVXa_!!2274037852.jpg_640x640q90.jpg",
      name: "Carbon Wang 9.8 Table Tennis",
      description:
        "Each layer of wood-containing nano-carbon and carbon powder are glue synthesis, 2.7 layer of pure wood structure, more robust.",
      price: 22,
      quantity: 1,
    },
    {
      id: 11,
      isInCart: false,
      image:
        "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/216984214_106674731700048_7955140846746929927_n.png?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=LYjuen3ToxMAX9S5-Ly&_nc_ht=scontent.ftun15-1.fna&oh=97a443be8644ad76c91fb57a3e7c8c89&oe=60F98882",
      name: "Armour short",
      description:
        "Disponible",
      price: 35,
      quantity: 1,
    },
    {
      id: 12,
      isInCart: false,
      image:
        "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/216725733_106674758366712_7516289101752932189_n.png?_nc_cat=103&ccb=1-3&_nc_sid=730e14&_nc_ohc=VpF_ov7Gf00AX-Mzlpx&tn=d364xymUXbaKJ-Ij&_nc_ht=scontent.ftun15-1.fna&oh=2e368491b4e2404f779d0cd157edea83&oe=60F94ED5",
      name: "Nike short",
      description:
        "Vendu",
      price: 35,
      quantity: 1,
    },
    {
      id: 13,
      isInCart: false,
      image:
        "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/216631910_106674728366715_6718043884979276123_n.png?_nc_cat=104&ccb=1-3&_nc_sid=730e14&_nc_ohc=0hMiAjHU3GkAX9xdA3g&tn=d364xymUXbaKJ-Ij&_nc_ht=scontent.ftun15-1.fna&oh=2b507d558428519da6bc9a1ad5020545&oe=60F8C3AE",
      name: "Adidas Short",
      description:
        "Disponible",
      price: 35,
      quantity: 1,
    },
    {
      id: 14,
      isInCart: false,
      image:
        "https://scontent.ftun15-1.fna.fbcdn.net/v/t1.6435-9/217387314_106674718366716_5369582117664893250_n.png?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=Oi_BWqgSnXAAX9JQdNt&_nc_ht=scontent.ftun15-1.fna&oh=8e1efed077dd5ca4ec20c17cb229c16f&oe=60F966B8",
      name: "Nike Short",
      description:
        "Disponible taille :M",
      price: 35,
      quantity: 1,
    },
  ],
  isOpenModal: false,
};

const reducer = (state = InitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "HANDLE_CHANGE":
      return {
        ...state,
        input: payload.target.value,
      };
    case "OPEN_CART_MODAL":
      return {
        ...state,
        isOpenModal: !state.isOpenModal,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        ListItems: state.ListItems.map((el) =>
          el.id === payload ? { ...el, isInCart: true } : el
        ),
        cartLength:state.cartLength+1
      };
    case "DELETEFROMCART":
      return {
        ...state,
        ListItems: state.ListItems.map((el) =>
          el.id === payload ? { ...el, isInCart: false } : el
        ),
        cartLength:state.cartLength-1
      };
    case "INCREMENT":
      return {
        ...state,
        ListItems: state.ListItems.map((element) =>
          element.id === payload
            ? {
                ...element,
                quantity: element.quantity + 1,
              }
            : element
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        ListItems: state.ListItems.map((element) =>
          element.id === payload
            ? {
                ...element,
                quantity: element.quantity - 1,
              }
            : element
        ),
      };
    default:
      return state;
  }
};

export default reducer;
