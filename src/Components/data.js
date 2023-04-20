
import { FaStar, FaRegEye } from "react-icons/fa";
const data = [
    {
      id: 1,
      name: "Home",
      links: "/",
    },
    { id: 2, name: "Machines", links: "/machines" },
    { id: 3, name: "Companies", links: "/Companies" },
    {
      id: 4,
      name: "Applications",
      links: "/application",
      namesub: [
        {
          id: 1,
          sub: "Gym Equipment",
          links: "/gymEquipment",
        },
        {
          id: 2,
          sub: "Furniture",
          links: "/furnitures",
        },
        {
          id: 3,
          sub: "Automobile",
          links: "/automobile",
        },
        {
          id: 4,
          sub: "Process Equipment",
          links: "/processEquipment",
        },
        {
          id: 5,
          sub: "Agricultural",
          links: "/agricultural",
        },
        {
          id: 6,
          sub: "Textile",
          links: "/textile",
        },
        {
          id: 7,
          sub: "Chemical process",
          links: "/chemicalprocess",
        },
        {
          id: 8,
          sub: "Semiconductor",
          links: "/semiconductor",
        },
      ],
    },
    { id: 5, name: "Media", links: "/media" },
    { id: 6, name: "Blogs", links: "/blogs" },
    { id: 7, name: "Contact Us", links: "/contact" },
  ];

  const topSubData = [
    // {
    //   img:'assets/image/top-searched-product/product1.png',
    //   para:'GCC C180II',
    //   star:[
    //     <FaStar />, <FaStar />, <FaStar />, <FaStar />
    //   ],
    //   tit:[
    //     "Work Area - 18 x 12 in.", "Drive - Closed Loop DC Servo Control", " Dimentions - 30.7 X 29.1 X 16.1 in", "  Maximum Motor Speed - 40 IPS"
    //   ]
    // },

    [
      {
        id:1,
        img:"assets/image/top-searched-product/Effective S.png",
        para:'Effective S',
      star:[
        <FaStar />, <FaStar />, <FaStar />, <FaStar />
      ]
      },
      { id:2,
        img:"assets/image/top-searched-product/G3015X-B7-One.png",
        para:'G3015X-B7',
      star:[
        <FaStar />, <FaStar />, <FaStar />, <FaStar />
      ]
      },
    ],   
    
    [
      {
        id:1,
        img:"assets/image/top-searched-product/LASER WELDING MACHINE ONE.png",
        para:'LASER WELDING MACHINE',
      star:[
        <FaStar />, <FaStar />, <FaStar />, <FaStar />
      ]
      },
      {
        id:2,
        img:"assets/image/top-searched-product/Upstroke NC Press Brake.png",
        para:'Upstroke NC Press Brake',
      star:[
        <FaStar />, <FaStar />, <FaStar />, <FaStar />
      ]
      },
    ]
   
  ];

  const latestSubData = [
    {
      para:'20210326-G3015A PRO-HSG',
    star:[
      "fal fa-star", "fal fa-star", "fal fa-star", "fal fa-star"
    ]
    },
    {
      para:'GCC Mercury',
    star:[
      "fal fa-star", "fal fa-star", "fal fa-star", "fal fa-star"
    ]
    },
    {
      para:'G3015X-B4',
    star:[
      "fal fa-star", "fal fa-star", "fal fa-star", "fal fa-star"
    ]
    },
    {
      para:'venus',
    star:[
      "fal fa-star", "fal fa-star", "fal fa-star", "fal fa-star"
    ]
    },
  ];

  const sectionTitleData =[
    {
      id:1,
      name:'Featured Products',
      See :'See All Product ',
      link:"/machines"
    },
    {
      id:2,
      name:'Top Categories',
      See :''
    },
    {
      id:3,
      name:'Popular Brands',
      See :'See All brands ',
      link:"/brands"
    },
    {
      id:4,
      name:'Latest  Products',
      See :'See All Product ',
      link:"/machines"
    },
    {
      id:5,
      name:'From The Blog',
      See :'See All Blogs',
      link:"/blogs"
    },
    {
      id:6,
      name:'Testimonials',
      See :'',
        },
  ]

  const  blogcon = [
    {
        id:1,
        type:"Food Beverage",
        image:"../assets/img/blog/sm-b2-1.jpg",
        title:"Delicious Mixed Grilled Food For The Weekend With The Family And Friends",
        desc:"It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on fruit to...",
        link:"/about",
        date:"Jan 24, 2022",
    },
    {
        id:2,
        type:"Digital",
        image:"../assets/img/blog/sm-b2-5.jpg",
        title:"Do you know how to people wear headphones properly?",
        desc:"It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on fruit to...",
        link:"/about",
        date:"Jan 24, 2022"
    },
    {
        id:3,
        type:"Digital",
        image:"../assets/img/blog/sm-b2-6.jpg",
        title:"Laptops Become More Common in Everyday Life, why it usefull?",
        desc:"It is accompanied by a case that can contain up to three different diffusers and can be used for dry storage of loose tea. The perfect way to enjoy brewing tea on fruit to...",
        link:"/about",
        date:"Jan 24, 2022"
    }
]

const condetails =[
  {
      id:1,
      type:"Food Beverage",
      detail:"Rue Saint-Antoine, Paris, France",
      icon:"fal fa-map-marker-alt"
     
  },
  {
      id:2,
      type:"Call us",
      detail:"(+100) 123 456 7890",
      icon:"fal fa-map-marker-alt"
     
  },
  {
      id:3,
      type:"Mail us",
      detail:"abc@gmail.com",
      icon:"fal fa-map-marker-alt"
     
  }
]

const SliderNavigationData = [  
  "Laser Solutions"," Sheet-Metal Forming Machine","Laser Welding Machine", "Laser Cladding", "Engraving Machine", "Electrolamination"
]
// const tabContent = [
//   {
//     id:"Engraving machine",
//     src:"assets/image/categories/Engraving machine/GCCC180II-06.png",
//     eyes:<FaRegEye />,
//     title : "GCC C 180",
//   },
//   {
//     id:"Engraving machine",
//     src:"assets/image/categories/Engraving machine/GCCC180II-06.png",
//     eyes:<FaRegEye />,
//     title : "GCC mercury",
//   }
// ]

const TestimonialsData = [
  {
    id:1,
    review:"Most databases, text processing functions and data transfer protocols default to the English alphabet. Testing software applications with only English looking text, like Lorem Ipsum, may not reveal potential mismatches between different parts of the application or ensure that the font can display all necessary characters.",
    name:"Arvind Khosla",
    deg:"Customer",
  },
  {
    id:2,
    review:"Most databases, text processing functions and data transfer protocols default to the English alphabet. Testing software applications with only English looking text, like Lorem Ipsum, may not reveal potential mismatches between different parts of the application or ensure that the font can display all necessary characters.",
    name:"Sushant Verma",
    deg:"Customer",
  },
  {
    id:3,
    review:"Most databases, text processing functions and data transfer protocols default to the English alphabet. Testing software applications with only English looking text, like Lorem Ipsum, may not reveal potential mismatches between different parts of the application or ensure that the font can display all necessary characters.",
    name:"Rani Bisnoi",
    deg:"Customer",
  },
]

  export  {data, TestimonialsData, latestSubData, topSubData, sectionTitleData, blogcon, condetails } 
  