export type ProductCategory =
  | "men"
  | "women"
  | "accessories"
  | "tech-gear"
  | "workspace"
  | "creator-studio"
  | "smart-tools";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  hoverImage: string;
  imageGallery: string[];
  shortDescription: string;
  fullDescription: string;
  rating: number;
  isNew?: boolean;
  price: number;
  salePrice?: number;
  onSale?: boolean;
}

export const products: Product[] = [
  {
    id: "men-001",
    name: "Valenridge Cashmere Suit",
    category: "men",
    image:
      "https://s.alicdn.com/@sc04/kf/Hd3e8e3993d8742f1a879e941d5241f05j.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/Ha3256a28144642cb8399777bd505e442a.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/Hddb4b8f0e3f64fe7b83c42b251769bb0K.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H44beafb0c6a8490c98c9bcf2708b6ac9q.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hbe75709bfbca4d07bc7bb1f07c3451cdD.jpg?avif=close&webp=close",
    ],
    shortDescription:
      "Tailored cashmere suit crafted for boardrooms and black-tie affairs.",
    fullDescription:
      "The Valenridge Cashmere Suit pairs Italian-milled fabrics with contemporary tailoring. Precision shoulder structure, silk-blend lining, and understated hardware deliver effortless sophistication for high-stakes engagements.",
    rating: 4.9,
    isNew: true,
    price: 760,
    onSale: true,
    salePrice: 690,
  },
    {
      id: "men-002",
      name: "Aurelius Wool-Blend Tuxedo",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/H5c63121948a74c03861933837be142adI.jpeg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/A9b6a800256824ba4803f101f701c94dfo.jpeg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Abccb59b4a3b745cf8303a3ac604429067.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Afc38a57c0f234d44bf294ec0849bd960g.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ac283a7fcbda34351952dd26883b4521fH.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/A5ab362542bf24ee9b8c330178d19b178X.png?avif=close&webp=close"
      ],
      shortDescription:
        "A wool-silk tuxedo with a hand-rolled satin lapel for timeless elegance.",
      fullDescription:
        "Crafted from premium wool-silk blend, the Aurelius Tuxedo features a refined silhouette, satin shawl lapel, and hand-finished stitching inspired by classic Italian tailoring.",
      rating: 4.8,
      isNew: false,
      price: 950,
      onSale: true,
      salePrice: 870
    },
  
    {
      id: "men-003",
      name: "Loro Veneto Cashmere Coat",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/H2fd091d6f44945079575c417ddccd9106.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hea68340f1df6413dafc36498c8c2407eH.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/He8a26b7f1b1c459186c1d07aabe65a1cX.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H1a9916b521b74e12b619e53fbb833b83o.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hfe20450728874adc97e40d6d8028aa1fw.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9ba50727ae3f4e34b7391df83cc16ce1Q.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Luxury full-length cashmere coat crafted with soft Loro Piana fibers.",
      fullDescription:
        "The Veneto Coat combines ultra-fine cashmere fibers, suede undercollars, and precision Italian construction. Designed for executives and high-profile travel.",
      rating: 4.9,
      isNew: true,
      price: 1800,
      onSale: false
    },
  
    {
      id: "men-004",
      name: "Brionetti Silk Dress Shirt",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/H6e52d99959ae4ba0a939db891830cb13q.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H98c00fb0da6843879ffbe7889717c76eS.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hcb7fbbbfcf5f43a39094e1f99a8e1ecbR.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd60c5b876de7407d8ddac13c7452aff57.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H38f62ffa42404aa5a960b6cded6a3014W.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H459465ea99e24f50ac309f258040adcfy.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Silk-tailored dress shirt with mother-of-pearl buttons.",
      fullDescription:
        "Crafted from 100% mulberry silk, the Brionetti shirt offers impeccable drape, hand-stitched seams, and artisanal finishing for luxury comfort.",
      rating: 4.7,
      isNew: false,
      price: 480,
      onSale: false
    },
  
    {
      id: "men-005",
      name: "Ermen Noir Double-Breasted Suit",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/Hfa906692bd74402d9956a1a51c97b939G.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H8ec03edab82c4f05b68ca103467527a64.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hf1c49ff1d0c647748d542b6158c7c35bn.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hb9c1662bd8844c77aa54152a13d5bb4fD.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H1559ae1355de4ebfaaa287aa3e090a74X.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H831f7aa483b8432f920c7af853491414f.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "A classic double-breasted suit inspired by Ermenegildo Zegna.",
      fullDescription:
        "Features a strong shoulder line, fluid wool construction, and a refined modern fit. Ideal for formal negotiations and luxury evenings.",
      rating: 4.8,
      isNew: false,
      price: 1200,
      onSale: true,
      salePrice: 1080
    },
  
    {
      id: "men-006",
      name: "Belvento Leather Oxford",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/H7fb108ce36a54349b7ad5015d3950f14m.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hdcfccaa7cc9046e7be5520435d824fdbj.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H199c33ce68d04d799f9bc9d525e6555cO.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H17356a233bd2410fa73937faa259b0c0b.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H5f4df1c5d31f41fbb42d4fb9b9b451c6w.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H56b9e812994c49619dd084f37483237cM.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Handmade Italian leather Oxfords with Goodyear welt.",
      fullDescription:
        "Each pair is crafted from full-grain calfskin, hand-burnished by artisans for a deep patina. Built for luxury, durability, and executive presence.",
      rating: 4.9,
      isNew: true,
      price: 620,
      onSale: false
    },
  
    {
      id: "men-007",
      name: "Ravello Premium Suede Jacket",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/H29425dde96e3482ea2b9f9bd49450500N.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hce5625e0b3a7450482821130f2272057I.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Ha17a69f30683436785c2fc20b6b57791k.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hea0780e9c06c4f8ba2b7c9f904baf3ebI.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf9e01cae4ee64920a0b2aa45a7d22256s.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H97b26392ffe4480db17a8abfb61e1956l.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Luxury suede jacket made from hand-selected lambskin.",
      fullDescription:
        "The Ravello Jacket offers exceptional softness, minimalist silhouette, and precision cut inspired by French luxury houses.",
      rating: 4.8,
      isNew: true,
      price: 950,
      onSale: true,
      salePrice: 860
    },
  
    {
      id: "men-008",
      name: "Montclair Alpaca Knit Sweater",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/A22681a34e3e94ca8b968a650506a9a1by.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/A6b07693dd4414c5b87f63ea5c3f7eb76b.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/A0fc5083c1a614d2a9019b8771d75c2b8u.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Acc215903e8e3432dbc8aa848eed57fc2B.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/A5284868e506c424a87674cc62f1c6d22f.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Aaeb0f04934b3492184feba0900322c3eQ.png?avif=close&webp=close"
      ],
      shortDescription:
        "Soft-touch alpaca knit with ribbed luxury detailing.",
      fullDescription:
        "Crafted from Peruvian royal alpaca fibers, this knit features exceptional warmth and a tailored European fit, ideal for upscale casualwear.",
      rating: 4.6,
      isNew: false,
      price: 420,
      onSale: false
    },
  
    {
      id: "men-009",
      name: "Luxe Vanguard Denim Jacket",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/Ad32b8d66437f4955bcc1f7f3a7e73949V.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/A5c10f45b5f8d43a383d6c91a3a6fb7f3Y.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/A4849ce18a20742f5abb1f9ebc0c213530.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ab44ed39063844e938d8133fd469305c2g.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/A1a9101af20ee4384aa2525cf0cd80b45r.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/A3492c8fc2d5848aabc57a60753e3cab6Z.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "High-end Japanese selvedge denim jacket with tailored silhouette.",
      fullDescription:
        "The Vanguard jacket blends premium selvedge denim with minimalist detailing and elevated tailoring for an upscale casual look.",
      rating: 4.7,
      isNew: true,
      price: 380,
      onSale: true,
      salePrice: 340
    },
  
    {
      id: "men-010",
      name: "Portenza Midnight Trench Coat",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/H2c55a1ac50384cb8ac39e24183c19462w.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hf96c60848d854892a97096223d6f01411.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hdb3c4adddf894dcebc567545f1f924e8m.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H129ebac80daf411a9233168dc85892e5u.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8f5081c11b1a4f97992bfb6a895fe97cm.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd6dc7fe482804d318fcda4e18706b270k.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "A waterproof trench coat refined for luxury travel and urban style.",
      fullDescription:
        "Made from lightweight storm-resistant cotton-silk blend. Features understated hardware and a sleek executive silhouette.",
      rating: 4.9,
      isNew: false,
      price: 1120,
      onSale: false
    },
  
    {
      id: "men-011",
      name: "Sartori Elite Velvet Blazer",
      category: "men",
      image:
        "https://s.alicdn.com/@sc04/kf/H089f95777d864fe0a3b5ab2d4a068399S.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Heaab519e6de24d77aaa02074226e0c19C.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Ha5d93d69b6fa400a8a49a33fdae27440Z.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H857790c3f85742adaa9f3596517ed1e84.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8011e7f3967e4c50a632d7492be36122D.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2df54773d8474f3a897d80a1c4daede2e.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Velvet evening blazer with satin peak lapel and Italian craftwork.",
      fullDescription:
        "Using premium crushed velvet and a structured interior canvas, the Sartori Blazer exudes luxury suitable for upscale galas and black-tie events.",
      rating: 4.8,
      isNew: true,
      price: 860,
      onSale: true,
      salePrice: 790
    },
    {
      id: "men-012",
      name: "Rivaro Casual Cotton Blazer",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/Hd1698f436d3b45daa875de8afd9f7ea61.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H757d9f35cf2b46e382941fc17761b7f73.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H7e6c0150cf874142a73a47a6d715bc7dd.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H23a1eb406ec545ef9d4d738d39cfd35a6.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H4c134e3fb0d34d1a843b38678d6ed0c9f.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Haf24e8399d354a34967a20340f7e7d50S.jpg?avif=close&webp=close"
      ],
      shortDescription: "Lightweight cotton blazer for everyday smart-casual wear.",
      fullDescription:
        "Made from breathable cotton with a relaxed structure, the Rivaro Blazer pairs effortlessly with jeans or chinos for everyday styling.",
      rating: 4.7,
      isNew: true,
      price: 72,
      onSale: false
    },
    {
      id: "men-013",
      name: "AxiomFlex Daily Stretch Shirt",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/Aedde74719b314319b6b563b800e33fabR.png?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/A8caf00cc4a524343b008251bc337dddeu.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Ac91a39d7638c4384b7f5b2241f1753dcr.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/A392929154f12448d8c63f30c2dcb1d11s.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/A6c8f42ee76274b358372d2ed620c65eez.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/A5e3507075f194a4d853fe38a9148b6dbW.png?avif=close&webp=close"
      ],
      shortDescription: "Stretch-woven shirt designed for comfort and mobility.",
      fullDescription:
        "AxiomFlex uses a soft stretch blend with a clean silhouette, ideal for daily office wear, travel days, or casual outings.",
      rating: 4.6,
      isNew: true,
      price: 39,
      onSale: false
    },
    {
      id: "men-014",
      name: "TerraEdge Utility Cargo Jacket",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/Hf50f901641884c919202fc36961efd3bT.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H15bdc0cbb3604464bcefbdcd949b7dd8S.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H83a56d8120d94ac9ad97cf4a03ffb289F.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf55dab57510f45a1925bd357a1b843baS.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H505fd709b346486e8bbfb311fc24742fx.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H40cd052109ab419f8f320e1683af1a8df.jpg?avif=close&webp=close"
      ],
      shortDescription: "Light cargo jacket with multi-pocket design.",
      fullDescription:
        "TerraEdge Jacket features durable stitching, adjustable cuffs, and functional pockets—great for daily commutes and weekend trips.",
      rating: 4.7,
      isNew: true,
      price: 58,
      onSale: true,
      salePrice: 49
    },
    {
      id: "men-015",
      name: "NordCraft Minimal Knit Sweater",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/H2453e31ba37a4bda83ca60ca4332d9c0z.jpeg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Hf0d8a4e27157461897d55d9317094679T.jpeg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H7170e94cefa142d6acbd8965cb2936fe1.jpeg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He9d3d7b91f514387ad463c0c635dff289.jpeg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H20dcd83f29c241c5bd9a1ff05614c2day.jpeg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H94b9eaebe6094707aaf5d4ece706305e7.jpeg?avif=close&webp=close"
      ],
      shortDescription: "Soft-knit sweater with a clean minimalist look.",
      fullDescription:
        "NordCraft Sweater offers warmth and everyday comfort with its breathable knit texture and classic fit.",
      rating: 4.8,
      isNew: true,
      price: 46,
      onSale: false
    },
    {
      id: "men-016",
      name: "Auralin Everyday Zip Hoodie",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/H89dc7d0e7e89420eaaa56a7c7e0d90ces.png?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H6ad7e8e4659b446fa9244a18246d3a29Z.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H285190c914014cd6aec3fffb29a4d734G.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc6b25ce64ff446698f6c4a8ba2acc566P.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H93dcc80a2f0f47778bdc633fb3f3e328D.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H15af167cb4894fa2a9f23ba8ab3bff26w.jpg?avif=close&webp=close"
      ],
      shortDescription: "Full-zip hoodie with warm fleece lining.",
      fullDescription:
        "Auralin Zip Hoodie offers a relaxed silhouette, soft lining, and durable zippers—ideal for layering in cool seasons.",
      rating: 4.6,
      isNew: true,
      price: 42,
      onSale: true,
      salePrice: 36
    },
    {
      id: "men-017",
      name: "MetroLine Straight-Fit Chinos",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/Ha4bb125bbfe64cb4af582c6c00612aae7.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Hbb65d9aedbc64e39b9b7003f9e395e2dV.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hfdbe07df11514974b58ede6f3f399492m.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H5985b5d569a64885bc6794587efecf7aG.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H413325fd6edf4cf08bc87ac32e9435cbK.jpg?avif=close&webp=close"
      ],
      shortDescription: "Classic straight-fit chinos for versatile styling.",
      fullDescription:
        "MetroLine Chinos are made from smooth cotton blend fabric with reinforced seams for everyday comfort and durability.",
      rating: 4.7,
      isNew: true,
      price: 37,
      onSale: false
    },
    {
      id: "men-018",
      name: "Cliffway Ribbed Knit Beanie",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/Hde45e188df9f4fdeb65f10e1296fff8dt.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H0fa66359046b47b39910e139bcd06f9fL.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hbd85906313b64072ba0d5a34260a027ex.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8f074b2e503e430a8c81aeefebe50f3bl.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd7d9bfe64c664777856285e4d5850eb9H.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H6189c37b06994a5fa13b123bd0bd77fce.jpg?avif=close&webp=close"
      ],
      shortDescription: "Warm rib-knit beanie for cool-weather outfits.",
      fullDescription:
        "Cliffway Beanie features soft acrylic yarn with a stretch-fit design, ensuring comfort and insulation in colder temperatures.",
      rating: 4.8,
      isNew: true,
      price: 14,
      onSale: false
    },
    {
      id: "men-019",
      name: "AeroFit Lightweight Windbreaker",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/H0e7762af389f434b9ea039ece457d6c2u.png?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/He44de768a3544f87a9563f1f4fee57c5s.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hbf6b1a37be5e43db8edad0a0b803cc686.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H62e452eeefac4bbbaecfae02a9853e82t.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hbc637745442340eda2491bcbb90e0ae6Q.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hfb0ade0a8da74b479597ca2f655679f7I.png?avif=close&webp=close"
      ],
      shortDescription: "Ultralight windbreaker for active days.",
      fullDescription:
        "AeroFit Windbreaker offers wind resistance, breathable mesh lining, and adjustable hem—ideal for morning runs and daily commutes.",
      rating: 4.6,
      isNew: true,
      price: 52,
      onSale: true,
      salePrice: 45
    },
    {
      id: "men-020",
      name: "Drayton Essential Tee Pack (2 pcs)",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/H1534c6f91fea4af8a4095d36f80fc75dG.png?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H4438ea0e071b4d5d8baa0a9578299677N.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hbaea2c1fb1694cf2b10c64b0b9a74376v.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H7e39373bae4c47499790a022c76b151eR.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hbe2a0fed05f84b81a1237b6862e1cf1bz.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H5b629b21732e4a3a8693ba0f9527cecdf.png?avif=close&webp=close"
      ],
      shortDescription:
        "2-piece essential tee set made from breathable cotton.",
      fullDescription:
        "Drayton Essential Tees feature soft cotton fabric, reinforced seams, and a regular fit—perfect for everyday layering.",
      rating: 4.8,
      isNew: true,
      price: 28,
      onSale: false
    },
    {
      id: "men-021",
      name: "UrbanLift Stretch Denim Jeans",
      category: "men",
      image: "https://s.alicdn.com/@sc04/kf/Hef10ed453c9a488f86da57d030a8824aH.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H346c54ff1c5a4d5ab026b2915b71cd8bL.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/He862c1757db94405b32d1c82a70425823.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9232256c0835499481b75801b5219c37G.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha626ec098e714db7852ab8006f63cb4cg.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H7d5e80bb50534fbf9c99405775352ef9T.jpg?avif=close&webp=close"
      ],
      shortDescription: "Stretch denim jeans designed for daily mobility.",
      fullDescription:
        "UrbanLift Jeans use flexible cotton-blend denim with a tapered fit, offering comfort and durability for everyday use.",
      rating: 4.7,
      isNew: true,
      price: 43,
      onSale: true,
      salePrice: 37
    },
    
  
  {
    id: "women-001",
    name: "Celeste Silk Midi",
    category: "women",
    image:
      "https://s.alicdn.com/@sc04/kf/H2687af7a5e1d4e5193fc6bbff93b845eU.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H3540b07468e04167a0df6b07dfff1997K.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H9b5c4b48349c4ffb82a1562073f6e36eo.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H54085f4c03d14464a731f576d1ac4bbdj.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H25b6771668ed4d73a00c486c09e2a2056.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H568915a83cfd48778aa67bfdaeb9c16eE.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Bias-cut silk midi with architectural pleats and liquid drape.",
    fullDescription:
      "The Celeste Silk Midi delivers gallery-ready elegance with architectural pleats, onyx micro-buttons, and a lustrous finish that complements both minimalist heels and stacked jewelry. Sustainably dyed with low-impact techniques.",
    rating: 4.8,
    isNew: true,
    price: 540,
  },
    {
      id: "women-002",
      name: "Aurora Satin Column Gown",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/He35e328008c14c02b9516d885a2ad184t.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H1db77c31b26d4fc88aff9f145fa734b37.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H873a9bd52474447792fdad36760fee92U.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc3a3eb5832cd4843b605f4ee92e7c8588.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc5861fcab88545b9a204314ced84e975p.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H08450e86a9ce453497e3d229d9814c38v.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Liquid-satin column gown with sculpted bodice and couture seaming.",
      fullDescription:
        "The Aurora Satin Column Gown channels red-carpet refinement with a corseted interior bodice, micro hand-stitching along the seams, and a floor-sweeping hem. Cut from Italian satin with a subtle sheen, it pairs flawlessly with crystal cuffs and strappy stilettos.",
      rating: 4.9,
      isNew: true,
      price: 980,
      onSale: true,
      salePrice: 890
    },
  
    {
      id: "women-003",
      name: "Lunaria Crepe Tailored Blazer",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/Heffef7ce25714a34ab463253b8b9d5a6N.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hc41ea1deb5a84d9a9fcf0622a0805f14X.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H94688946a8764663bac3c3e49d6756a6r.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H46407b7cf5ad4a63adf50ab01a402a9cb.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H4068eed6f2334a54b9ac1ab677506875K.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc2e3d84cf56843d7889ed9626843577ax.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Structured crepe blazer with nipped waist and silk-twill lining.",
      fullDescription:
        "Inspired by power suiting from heritage European maisons, the Lunaria Blazer features sharp peak lapels, hand-set shoulder pads, and a nipped waist that sculpts the silhouette. Fully lined in silk twill, it layers effortlessly over slip dresses and tailored trousers.",
      rating: 4.7,
      isNew: true,
      price: 760,
      onSale: false
    },
  
    {
      id: "women-004",
      name: "Elysian Pleated Chiffon Gown",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H70b9ace53dd2421aaa259b0c3f66b26cu.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H22a4d6dfb408485499980f8efac28f98O.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H7c416608da1b478cba67ea079770b66cy.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He51de56ecdda4cb78d9cae6a1dc89c7bK.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd1db39a08b784400bb82f3872335faf8a.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2d1fa80495a14e61b9fb8c5a292a8286w.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Hand-pleated chiffon gown with open back and couture-inspired train.",
      fullDescription:
        "The Elysian Gown is cut from whisper-light chiffon that has been hand-pleated for fluid movement. An open back framed by delicate straps and a softly pooled train make it a standout choice for black-tie occasions and destination weddings.",
      rating: 4.8,
      isNew: false,
      price: 1250,
      onSale: true,
      salePrice: 1130
    },
  
    {
      id: "women-005",
      name: "Noir Atelier Wool-Cashmere Coat",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/Hc7c51482fe0b4647abfb9a8b1bcc2940q.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H8b447d763fd6420cba0fe64fd8e2abc1w.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H9a99fa81b7084e499a4f242c83ef3cdcI.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H40333c7cf8bf40f09b555ea41fbe9e10Z.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H54631d684b47450e93de69c61b185e46d.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H6dabf6e1069e43b38b562e805ee26400l.png?avif=close&webp=close"
      ],
      shortDescription:
        "Double-faced wool-cashmere wrap coat with belt and clean lines.",
      fullDescription:
        "Spun from a plush wool-cashmere blend, the Noir Atelier Coat is finished entirely by hand with invisible seams and a sculpted shawl collar. The wrap belt cinches the waist while maintaining a minimalist, gallery-worthy silhouette.",
      rating: 4.9,
      isNew: true,
      price: 1680,
      onSale: false
    },
  
    {
      id: "women-006",
      name: "Seraphine Silk-Crepe Jumpsuit",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/Hffac2fac5b0c41179645f058c24d9e15O.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/He89a7ab6779947469acb049b1aadfc9fF.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hbb82fbf056464126878a5ab1aa4184c5J.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8e47251a59ff451faf8936b19d3a27c7V.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8df1872782894ae894f4e1f42c1a3482i.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf836adc819f54a57aa4f88e192d4faf3T.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Tailored silk-crepe jumpsuit with sculpted bustier and wide leg.",
      fullDescription:
        "The Seraphine Jumpsuit merges the ease of a one-piece with couture bustier construction. Crafted from matte silk crepe, it features internal boning, a contouring neckline, and elongated wide legs that elongate the frame when paired with heels.",
      rating: 4.6,
      isNew: false,
      price: 890,
      onSale: true,
      salePrice: 820
    },
  
    {
      id: "women-007",
      name: "Marais Beaded Tulle Cocktail Dress",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H327a0d3428b14794b4d384956f8bba35O.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hc2d196c0eb7f4849a855b5e7dbab5ce9W.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H074b47a1c41f4c8f9961f866faa4b568B.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H3a327ebce42e4563af77aaf70bac3220a.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H094860d538ba4664b298268d9f679276D.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hfb765730a51a4f5bb46964e0150e7bbeE.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Hand-beaded tulle mini with illusion neckline and couture sparkle.",
      fullDescription:
        "The Marais Cocktail Dress is cut from layered tulle and embroidered by hand with crystalline beads that catch the light from every angle. An illusion neckline and tailored inner corset provide support while maintaining ethereal delicacy.",
      rating: 4.9,
      isNew: true,
      price: 1350,
      onSale: false
    },
  
    {
      id: "women-008",
      name: "Palermo Pleated Silk Skirt",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H12ec5017e6ac4e07b04e06cbbdea4560c.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H23359f5637cc4019aaa2feb6b63f67ecS.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hbd43271d1bc649518933e3615552897aw.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H7dc3f57f904641a1ba82e77e742b814eX.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H32a503f47dcd4e5c84159cbbd63274f6i.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H7d2de1797f574e1eb3a3e8c08ab04657b.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Knife-pleated silk skirt with ombré dye and high-rise waistband.",
      fullDescription:
        "Cut on the bias from luminous silk, the Palermo Skirt features micro knife pleats that fan out with every step. The hand-applied ombré dye echoes runway pieces from luxury Italian houses, making it a statement piece for both gallery openings and dinners.",
      rating: 4.7,
      isNew: false,
      price: 640,
      onSale: true,
      salePrice: 590
    },
  
    {
      id: "women-009",
      name: "Opaline Cashmere Knit Set",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H3f770c82bfbf482387de2ad86955801ar.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hdb7f84d0f67041499c8aecb6ecfeb04du.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Ha75eed950d2643d3b04a578cca95d82f4.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hdb7f84d0f67041499c8aecb6ecfeb04du.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H1554a86b1a7c4464a0230d204b151e98L.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H1870bf431495450792bd9d251ffa414d0.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H37f2da1f7b144156859c5ef3f5cd7dc6f.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Two-piece cashmere knit ensemble with cropped sweater and skirt.",
      fullDescription:
        "The Opaline Set is spun from ultra-fine cashmere sourced from renowned mills. A slightly cropped long-sleeve top pairs with a ribbed midi skirt, creating a tonal look that feels both lounge-worthy and refined enough for first-class travel.",
      rating: 4.8,
      isNew: true,
      price: 980,
      onSale: false
    },
  
    {
      id: "women-010",
      name: "Valencia Velvet Evening Dress",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/Hdea8e9524727414ba4a926bf0ca1c8f6Q.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H4d940d3671e54218be5b22ea636bc20af.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hb6a988a24c4c4d339997c6d255d8fe77O.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hcc07108c8105480c8347fcdf39419e47S.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hfb1a8f36cec94addbaf31153097cbbfdV.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9e49bc4b193d48c0b6cc363284e815e9r.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Stretch-velvet evening dress with sculpted slit and draped neckline.",
      fullDescription:
        "The Valencia Dress is crafted from dense stretch velvet that hugs the silhouette while allowing ease of movement. A draped cowl neckline and architectural side slit reference couture detailing from historic Parisian ateliers.",
      rating: 4.7,
      isNew: false,
      price: 920,
      onSale: true,
      salePrice: 840
    },
  
    {
      id: "women-011",
      name: "Côte d’Azur Silk Resort Set",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/Hac177329a3aa478a9b09b4c04fae576aZ.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hacf491ba922f4b3ebad2a0787354dd82q.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H54feb870c19148a2812942c618270b46d.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H10f6495b37174e0ba9d17ec22c6fcdfet.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H97aafb4260f04de5bcd7dcff9b71f370c.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H0aea88ebdce24bc696c3ce3f0bf8a1a7t.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Printed silk resort shirt and trouser set with relaxed tailoring.",
      fullDescription:
        "The Côte d’Azur Set is cut from high-twist silk printed with an abstract motif inspired by Mediterranean coastlines. A camp-collar shirt and fluid, drawstring-waist trousers create a polished yet effortless silhouette for yacht decks and rooftop terraces.",
      rating: 4.8,
      isNew: true,
      price: 860,
      onSale: true,
      salePrice: 790
    },
    {
      id: "women-012",
      name: "Marvue Linen Summer Dress",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/Hfe80e531a9e346649529539091d96770R.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hed9fc780ee62418289e647c8a3109290h.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H66555fd6dcf74d9dbf417c188b2aa91bP.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hbfa2c18ded6247bc86b47cc952316d2bV.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H20f835887a9b43638a59665e5dcaf7f5D.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H585b9757ff3c48f3afbe312a2f2e0bc9Z.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Light linen dress with relaxed fit and breathable texture.",
      fullDescription:
        "The Marvue Linen Summer Dress offers a breezy silhouette with adjustable straps and a soft drape—perfect for weekend strolls and warm-weather outings.",
      rating: 4.7,
      isNew: true,
      price: 54,
      onSale: false
    },
    {
      id: "women-013",
      name: "Serenelle Pleated Midi Skirt",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H0818ce84dd80402c843558261addb7f8K.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H19830a0e8fbd4fafb4e0d66806df55475.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hfd7b4fc715cf431e9126eee40bd94fc4q.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H81b3b5c540cf4134930aa4a2d6cebc95C.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hcb951a269f58482da1302f91b8d1a515n.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H1bd670d0d56644c387991812a5da3284G.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Flowy pleated midi skirt with soft sheen finish.",
      fullDescription:
        "The Serenelle Midi Skirt features lightweight pleats, a comfortable waistband, and a graceful movement ideal for daily wear or casual evenings.",
      rating: 4.6,
      isNew: true,
      price: 42,
      onSale: false
    },
    {
      id: "women-014",
      name: "Orovia Soft Knit Cardigan",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H3d8294e6895d470cb74fd87ccb6c9d49W.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H34afa6b94db24fa8924550d83dfdfa3em.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H8f3f1730f5534bd88c322724dba5ff4eI.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H926fe41314b1469b945c91006b8836fcj.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H3ef7dd71dd354d209c78bc94b62e8c56i.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hb0597071bd0e4e2aba224a10d7e7ad3fc.png?avif=close&webp=close"
      ],
      shortDescription:
        "Light knit cardigan with relaxed drape and soft feel.",
      fullDescription:
        "The Orovia Cardigan blends comfort with versatility through its soft-touch knit, drop-shoulder cut, and easy layering design.",
      rating: 4.8,
      isNew: true,
      price: 36,
      onSale: true,
      salePrice: 30
    },
    {
      id: "women-015",
      name: "Eloria Wrap Front Top",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H8141d26c5d5a4dc9bf45ee12b9dbfb55z.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hd1505ec976f44f2fa5634d9e816c8975D.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hadbb53d22d01405e9199e9cb9651e647y.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H0ac81a6d2c3d45ddbad82c40457dfbb95.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H25854e6c77ef4bf994e5ee36941d0c6es.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H78e8bd567ee745608ef2320abe993a3au.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Wrap-style top with soft stretch fabric for a flattering look.",
      fullDescription:
        "The Eloria Wrap Top offers a stylish cross-front design with a smooth stretch blend, ideal for pairing with skirts or denim.",
      rating: 4.7,
      isNew: true,
      price: 28,
      onSale: false
    },
    {
      id: "women-016",
      name: "Velline Buttoned Midi Dress",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/Hf049a4cd6a3c4984bb32ccd8a1851312T.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H17d255ee98f7454f8d432ad767364b39J.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H0e8ed4288ff74e13896ec841d078d069E.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H92d0dd97a0cb4630a8477b9cff460da1O.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H41ff2b146e664a98afa8f053d32a5f09i.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H958432b5d06a4869aa579a193bd0ad6bw.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Button-down midi dress with a structured yet gentle silhouette.",
      fullDescription:
        "The Velline Midi Dress features a clean buttoned front, adjustable waist tie, and soft-touch fabric suitable for both office and day wear.",
      rating: 4.6,
      isNew: true,
      price: 48,
      onSale: false
    },
    {
      id: "women-017",
      name: "Calira Relaxed Lounge Set",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H70f5782dfd174c9f91e7b656bcc936f3p.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H9bed95f084934f7c9c3ff18af97a5189N.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H4e73d3a8f33f4570b4c926a601bf6b4aE.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf5a08f88fe98496189ba0043fb57b127Q.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H1c87a0efbcbe4f23881b580932bfceb3v.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H431c80a45cb34c82be7a1c27d5188370w.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Soft lounge set with relaxed fit for everyday comfort.",
      fullDescription:
        "The Calira Lounge Set includes a drop-shoulder top and elastic-waist pants, crafted from soft knit fabric for cozy, all-day wear.",
      rating: 4.8,
      isNew: true,
      price: 39,
      onSale: true,
      salePrice: 32
    },
    {
      id: "women-018",
      name: "Solvéra Sleeveless Knit Top",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/A36be511b97b643808230fbdd57521a97L.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Abc57d17223ec41b9901081b3f9830fa2l.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Afdd35665aca441d0af434a726af752a8W.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Afaf26a433cd24368ba2d05d3e4cbfe5cQ.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ad60a1e5049794f0b8f330a110139226fK.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Af4b89a29ddf1476fbfda68e3525a9d2aq.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Sleeveless knit top with soft ribbed detailing.",
      fullDescription:
        "The Solvéra Knit Top features rib-knit accents and a flattering cut, making it an easy match for skirts, trousers, and layered outfits.",
      rating: 4.7,
      isNew: true,
      price: 22,
      onSale: false
    },
    {
      id: "women-019",
      name: "Arlisse High-Waist Wide Pants",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H2e3eb13cf7e44c4ca2806a26d084e395E.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hd303da81109b465f92e0a8b7b10b67bfS.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H98b8e7f665964c03830c4909e122528bs.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H3b3eabd7e98d4ce0a8d888ba1089c51fs.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H5526b0b1061840999c8ca01b35f0fa8cx.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H306f10cdbc4f4548b88f2715d5a50fcb0.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Wide-leg pants with structured drape and clean finish.",
      fullDescription:
        "Arlisse Pants offer a flattering high-rise fit with a smooth drape, easy pairing with blouses, tees, or lightweight knits.",
      rating: 4.8,
      isNew: true,
      price: 34,
      onSale: false
    },
    {
      id: "women-020",
      name: "Elora Puff Sleeve Blouse",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/Ha29bcdb1876246e6942cd66d8f0c723eT.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hf70c1b0a0ead491baaad75fdbc233b27U.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H8a9d4fab6ae24b8fbb6f50bc5ac3e504U.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf1a4df87dcf44ddc8d177006ae3c9bcd3.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H800b3b2317e846b89df40965e53b6de5A.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Puff-sleeve blouse with soft crepe texture and relaxed fit.",
      fullDescription:
        "The Elora Blouse brings gentle volume through its puff sleeves and soft crepe fabric, offering a comfortable yet elegant look for daily styling.",
      rating: 4.7,
      isNew: true,
      price: 27,
      onSale: false
    },
    {
      id: "women-021",
      name: "Varelle Knitted Lounge Dress",
      category: "women",
      image:
        "https://s.alicdn.com/@sc04/kf/H19b691871c1c4defa16e9eb87187a7e2v.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H5900c1124c8d46bc9f44d47b74573dab9.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H275d3bb04ef042b48e6f38e5bead8dc8n.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8695de1dcc6f45dda339b39e8f17086dc.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He6ffa99fbb1148caa5da9d2d9504c07dc.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Soft knitted dress with a cozy, lounge-ready feel.",
      fullDescription:
        "The Varelle Lounge Dress offers gentle stretch and a relaxed silhouette, ideal for at-home wear or casual outings.",
      rating: 4.8,
      isNew: true,
      price: 33,
      onSale: true,
      salePrice: 28
    },
    
  
  {
    id: "acc-001",
    name: "Aria Sculpted Tote",
    category: "accessories",
    image:
      "https://s.alicdn.com/@sc04/kf/H2f29a0e4bb204f6995929921284b9ae44.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H3651320f30e541f28f8a45f3adcf8231z.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H7bb5cd9e704740ca983fd60499129e2cr.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hff9c8155d4e44798a1ca9bf8ba7ed5cdq.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc08fd4428e9c459eb8a1ddd52acf93262.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H479d85b966f9406187c8da22297fc2ceE.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Hand-finished Italian leather tote with sculptural hardware.",
    fullDescription:
      "Crafted from full-grain leather and lined with suede microfiber, the Aria Sculpted Tote features modular compartments for tech essentials, magnetized closures, and a brushed steel handle inspired by modernist sculpture.",
    rating: 4.9,
    price: 280,
  },
    {
      id: "acc-002",
      name: "Lunette Microfold Clutch",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/H3073600ca18e46c7a76da05d95aee982a.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H7772f62dd1924b4981888910669df7edC.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hf5f636add20c4905bb6088ae4ad52456e.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H597d3e7a232c4ac9a02721a96b238dafD.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H3fa7b6a569f542f2889c2d7bcf0a5e4fR.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H59174c64cde649c1ad1d542e48e36f58B.png?avif=close&webp=close"
      ],
      shortDescription:
        "Sculpted micro clutch in folded lambskin with magnetic clasp.",
      fullDescription:
        "The Lunette Microfold Clutch is crafted from ultra-soft lambskin, hand-folded into a sculptural silhouette. A concealed magnetic clasp, suede interior, and detachable chain elevate it for gala nights and refined dinners.",
      rating: 4.8,
      price: 320,
      onSale: true,
      salePrice: 290
    },
    {
      id: "acc-003",
      name: "Livia Compact Zip Wallet",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/H0e5381958912401a8fa4a7f2984a7760x.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hab459c2065e64ca98991d18b8e1f7ac6u.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Ha047fa0f544e4068a13603369a9f8e8cV.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8f343e1f5da146c1b4bdad6ccb557f85y.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H41b6b8c71b644fb089a3a9bee527a865I.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9b5254dd0ae3471ba85804302139380fO.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Compact zip-around wallet crafted from soft PU leather.",
      fullDescription:
        "The Livia Compact Zip Wallet offers a practical everyday design featuring a full zip-around closure, multiple card slots, and a secure coin pocket. Made from smooth, easy-to-clean PU leather, it fits seamlessly inside handbags while keeping essentials organized and accessible.",
      rating: 4.8,
      price: 95,
      onSale: true,
      salePrice: 79
    },
    {
      id: "acc-004",
      name: "Solstice Metallic Belt",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/H835966b8d2164612b9bc04bd74559630w.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hae1f69e988e94b5aa0be7dcca7beb409i.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H9168d392c2be4a6eb7bd2f57e0d19400f.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H0cdfe8c56a5d4f10936d107130fa177e5.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Haf1c3ab2b1ac4d86bf6771d47ca45f54l.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hfcbbfa52ddbc4d5bba28be279052dcc69.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Italian metallic leather belt with sculpted buckle.",
      fullDescription:
        "Cut from high-polish metallic leather, the Solstice Belt features a sculptural buckle cast in brushed alloy. Designed to cinch coats and dresses with a touch of runway glam.",
      rating: 4.7,
      price: 150,
      onSale: true,
      salePrice: 135
    },

    {
      id: "acc-005",
      name: "Marin Everyday Bucket Hat",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/H22d23922fe4c4f9eb3b0be018fa5f715Y.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H2dfd3cc04a32484a90a87e4d3d6632e7G.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/He5a94990297e440bb44817bf33f5cf3fs.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H6db7f26fe3a84b778e19cb5c93c8c174J.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8dd498f894394fe78384b72225ea34e9y.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha92283478c4547969bc61785b2e14033L.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Lightweight bucket hat designed for everyday casual wear.",
      fullDescription:
        "The Marin Everyday Bucket Hat is made from soft, breathable fabric that provides all-day comfort. Its relaxed shape makes it easy to style with casual outfits, while the reinforced stitching ensures durability for daily use. Ideal for outdoor walks, travel, or adding a simple streetwear touch to your look.",
      rating: 4.8,
      price: 65,
      onSale: true,
      salePrice: 49
    },
    
  
  
    {
      id: "acc-006",
      name: "Este Noir Structured Wallet",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/Hab5a9d446048495f8e5c4f8e9f096c382.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H3efaa5d92c0a4741a63876c013a38098X.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hcdcd6cc8e7774d16b975de39837c6b0dE.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2492310c00dc48f2b03e7c579ba36efcT.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H664a3cf33b554db19aed690dba20cc62z.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc8c8fb4f6dc64aeeb88e0acd40ad09feC.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Full-grain leather wallet with structured accordion interior.",
      fullDescription:
        "The Este Noir Wallet is crafted from hand-tanned leather and finished with tonal stitching. A structured accordion design allows organized storage for cards, currency, and receipts without added bulk.",
      rating: 4.8,
      price: 210,
      onSale: true,
      salePrice: 190
    },

    {
      id: "acc-007",
      name: "Celeste Soft Fabric Scrunchie",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/Hcc3fc79353694f4ea38e51af85898652G.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hdf6ddd1d5d854541a26274043ca8b18fe.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/He638e90f9cd741e4b37146792f6b4759d.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He25f8342e68742099fe83f645168221dC.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9f1fc86722bf45d2a0526c0ac7635672s.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H16283dd2b8324a7eac85e47d816465bdz.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Soft fabric scrunchie designed for everyday comfort and hair protection.",
      fullDescription:
        "The Celeste Soft Fabric Scrunchie is crafted from gentle, lightweight material that helps reduce hair breakage while offering a secure and comfortable hold. Perfect for daily wear, casual outfits, workouts, or creating simple hairstyles without leaving creases.",
      rating: 4.8,
      price: 25,
      onSale: true,
      salePrice: 19
    },
    
  
  
    {
      id: "acc-008",
      name: "Astra Sculpted Hair Pin",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/H77e0ba8e8cdf441489cd21ecb308b5733.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hd7efadc6857848468a0877da5dfadd1b7.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H9ad86c4667f04c4a8aa75658543ad389R.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H0435fc25a78c4d62b26c34d315212de0c.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hfe9bcddc6cf0452eafa019983c194a58q.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf80eb559d95d42d2a5a481f942992c6cV.png?avif=close&webp=close"
      ],
      shortDescription:
        "Sculpted brass hair pin with celestial engraving.",
      fullDescription:
        "The Astra Hair Pin is cast from polished brass and engraved with celestial motifs inspired by antique observatory instruments. Lightweight yet durable, it elevates updos with subtle luxury.",
      rating: 4.7,
      price: 120,
      onSale: true,
      salePrice: 110
    },
  
    {
      id: "acc-009",
      name: "Vallée Oversized Silk Scarf",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/H577fc2d7f4ea43018118394ab82d95b5L.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H6b90f808079d4e23b0d65de939f5679fF.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hb3ca17473f7e4887a923544c485a2be9Z.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd5f10940a9dc454cb3f655b9cdb9e851D.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H7902f1d0b5b64343a8d48a331af8d225x.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H0eb0d32d14bb47a4b067382a8d32e6abn.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Oversized printed silk scarf with hand-rolled edges.",
      fullDescription:
        "The Vallée Scarf is woven from pure mulberry silk, featuring an abstract landscape print inspired by French watercolor art. Hand-rolled edges highlight meticulous craftsmanship.",
      rating: 4.9,
      price: 340,
      onSale: false
    },
  
    {
      id: "acc-010",
      name: "Orion Minimalist Leather Gloves",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/H9e2139358c6d40aebb50fc8d26d3428bg.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H7b566a1fc2424263b89b938494b49cb7F.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H0706fa944a2e41d5930e0f659b967f0aV.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H6afb318a09894a6e803bbe6f10b251598.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H153f95b830244af0af0548b7579d81f6T.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf61f078e5f184c4195639fe31090e17fG.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Minimalist gloves in soft Nappa leather with cashmere lining.",
      fullDescription:
        "The Orion Gloves are cut from buttery Nappa leather, lined with pure cashmere for exceptional warmth and comfort. Their sleek silhouette pairs seamlessly with both formal and casual winter outfits.",
      rating: 4.8,
      price: 290,
      onSale: true,
      salePrice: 265
    },
  
    {
      id: "acc-011",
      name: "Étoile Pavé Bracelet",
      category: "accessories",
      image:
        "https://s.alicdn.com/@sc04/kf/H3f326999ca12481fb69af11b4035a8440.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hc8a45b89be6843219cd244934d0aff2dJ.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hdf4062a5ff134a079e4d241b8b628c0e4.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H1584f4dc9cc347848b3a5994b65f9fb8O.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8387c27613a74f8d82108af53fe78c32G.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H5736272dfcc647949fdd7c80c1eb6f39o.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Gold-plated pavé bracelet with micro-crystal inlays.",
      fullDescription:
        "The Étoile Bracelet features a delicate chain adorned with micro pavé crystals, giving it an understated yet radiant finish. Designed to layer beautifully with minimalist timepieces or wear as a standalone statement.",
      rating: 4.9,
      price: 230,
      onSale: false
    },
    {
      id: "acc-012",
      name: "Lyria Foldable Storage Pouch",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/H8f87fbc0706d407d974cf8aaba310087k.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Ha25eec68577e4dd693c8c2430068e3fev.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H18f6d6b855f14842b25cdff95ecdd40a1.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H669028de608a451b95a31d7ba78f16b8M.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hcacfda0a99394d42a07f9769ec2bce28s.jpg?avif=close&webp=close"
      ],
      shortDescription: "Compact foldable pouch for everyday essentials.",
      fullDescription:
        "The Lyria Pouch offers lightweight storage with a foldable design, ideal for cosmetics, chargers, or small accessories.",
      rating: 4.7,
      price: 8,
      onSale: false
    },
    {
      id: "acc-013",
      name: "Nova Adjustable Bag Strap",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/H09471d2dfa034d1fa84b8e2b104db088Q.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Hd26823e5094641e99af914fa57e2dc406.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H32c6d686cc66420c99387d4dff136d974.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H99d1dd0dbfb046a6995c8f4bce62b502N.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2b4773478b7240a191b9bb94a7d33a6er.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He2b2a90dae2044c981a449dbfe5a4e79W.jpg?avif=close&webp=close"
      ],
      shortDescription: "Adjustable replacement strap for bags and cases.",
      fullDescription:
        "Nova Strap features reinforced stitching and durable hardware, designed for handbags, camera bags, and shoulder pouches.",
      rating: 4.6,
      price: 9,
      onSale: false
    },
    {
      id: "acc-014",
      name: "Mira Soft Touch Scarf",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/H91e75d61828d493fb84165fe22d816249.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/He0f651c1e2ad465eb59ddfa922e9d642N.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/He831d421936f4fb89e43052cb785b2765.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8c8b6af848fe4ac4a1265890beee43305.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2423f8871d5b4d9ea174fd03758dcf49C.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hdbafb4ccb86640e2879acc2c9cd0abecx.jpg?avif=close&webp=close"
      ],
      shortDescription: "Lightweight scarf with a soft, breathable finish.",
      fullDescription:
        "The Mira Scarf offers all-season comfort with a smooth drape, perfect for layering with casual or workwear outfits.",
      rating: 4.7,
      price: 14,
      onSale: true,
      salePrice: 11
    },
    {
      id: "acc-015",
      name: "Aven Slim Card Wallet",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/H66a7bf1edfae49c591442ff161992b75v.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Hc9ec41c6701441cbabec51e629b403fcx.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hb6a1832b2cc144da8fd23a2a354c6d16o.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H32d47c704bd54a7e9d361cae2ea76a34Z.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He9b6f20e806e4912a8cc3e0951859b9cs.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hdf8b93b8edf24d16b6819915da6574666.jpg?avif=close&webp=close"
      ],
      shortDescription: "Compact two-slot card wallet for daily essentials.",
      fullDescription:
        "The Aven Card Wallet combines slim design and reinforced stitching, offering a minimalist solution for cards and cash.",
      rating: 4.8,
      price: 10,
      onSale: false
    },
    {
      id: "acc-016",
      name: "Helio Everyday Travel Pouch",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/Hc27ff3d9f11e49c5b2d18758889c97ccV.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H2239df630c554e46889b0a74d2a06ecdv.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hd7529da9c5f14ed1838af8e93557f302t.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd7529da9c5f14ed1838af8e93557f302t.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf0480527226143ada07e1d4218cd55b8r.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He26cf1e9b88f46948c3aa591caa391feR.jpg?avif=close&webp=close"
      ],
      shortDescription: "Compact daily-use pouch for small items and gadgets.",
      fullDescription:
        "The Helio Travel Pouch offers lightweight durability with internal compartments for organization of charging cables or cosmetics.",
      rating: 4.6,
      price: 9,
      onSale: true,
      salePrice: 7
    },
    {
      id: "acc-017",
      name: "Talia Cotton Tote Bag",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/H3d9133ffd792488cb592d736b57d1b2br.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Hec20c9e5bc614ff084fb8228c37b8cd57.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hdc14fe3e62f24d2ebaec106b36cc05d2P.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H108c998a824b4cc290cdf87be9450d99L.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd54cdaa2f40a4e0e92134714716dd3fbV.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H937c43ffb8554de5a553bd4aa4d74efeC.jpg?avif=close&webp=close"
      ],
      shortDescription: "Large-capacity cotton tote for daily carry.",
      fullDescription:
        "The Talia Tote features reinforced handles and durable cotton fabric, ideal for groceries, school, or everyday essentials.",
      rating: 4.7,
      price: 15,
      onSale: false
    },
    {
      id: "acc-018",
      name: "Fero Flex Key Organizer",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/H9119f611cd6445059b631a74ef6e8bcfn.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Ha9449336d9e34ab88b7097990e9d6d24l.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H3e89f73d888e4576918922892c80112dF.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hdc64063889de462d87a313b9b52339e6F.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha7c69edf80744091bd8b240a434c7d28w.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9e518475ab6a4540a5c71350e28e2b66Y.jpg?avif=close&webp=close"
      ],
      shortDescription: "Compact metal key organizer with screw-lock system.",
      fullDescription:
        "Fero Key Organizer keeps keys neatly stacked, reducing jingling while offering quick access with its ergonomic frame.",
      rating: 4.6,
      price: 8,
      onSale: false
    },
    {
      id: "acc-019",
      name: "Kuro Foldable Shopping Bag",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/H7180b34d16254c1b8ee790e1226279e4E.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H875dd4c43c36408b901db8037f27e554R.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hcee3989ce3ad480a845b3598ab27a52cE.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2d96e143f9ea4df19860206d48d5f3f4B.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd6e656cbb667415cbe77f027decc5d57Q.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H49db81b46c2245b18143bc7b2d5e53c1i.jpg?avif=close&webp=close"
      ],
      shortDescription: "Foldable eco-friendly bag for everyday shopping.",
      fullDescription:
        "The Kuro Bag folds into a compact pouch for easy portability and expands into a durable full-size tote.",
      rating: 4.8,
      price: 6,
      onSale: true,
      salePrice: 5
    },
    {
      id: "acc-020",
      name: "Sera Soft Knit Beanie",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/Hec248eb2c21c49ebb18aeecade2712c6Y.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Ha1750f3965264b85903550690b8e4773S.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H5fb9a13ffa74411881aab74e0d29d02f7.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H0902fed8a1a044789f3f365d4c59e8406.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H88b597a84059468b9120a3b7423bd48eb.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H3927be231e074d3bae3958cb8c70162bc.jpg?avif=close&webp=close"
      ],
      shortDescription: "Soft and comfortable knit beanie for cooler weather.",
      fullDescription:
        "The Sera Beanie features stretch-knit fabric designed to provide warmth and a snug, comfortable fit.",
      rating: 4.7,
      price: 9,
      onSale: false
    },
    {
      id: "acc-021",
      name: "Nexo Everyday Crossbody Pouch",
      category: "accessories",
      image: "https://s.alicdn.com/@sc04/kf/H66cb831f14a4462c9dd3e4174594bfd2x.png?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H20f8154ca5b846f48c385b3baa9f667aJ.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H78b6a705b8594d0fb7b819d3a28bad9de.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H489420143f6e4c03a0144d8e51930259v.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H09468433ab3b425a82bbe45ae0472447V.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hfb1f48fb7afb4fcd967f2927d71b85604.png?avif=close&webp=close"
      ],
      shortDescription: "Compact crossbody pouch for hands-free daily carry.",
      fullDescription:
        "The Nexo Crossbody Pouch features a lightweight structure with multi-pocket organization for essentials such as phone, wallet, and keys.",
      rating: 4.8,
      price: 18,
      onSale: true,
      salePrice: 15
    },
    
    
  
  {
    id: "tech-001",
    name: "Xenova Pro X16",
    category: "tech-gear",
    image:
      "https://s.alicdn.com/@sc04/kf/H26e25483d2f34c85af64613e3cb42a33X.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/Hd6502ab4364249fa9d1b9623e3ceb6729.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H7f6238141b18411e99f45487949f00d71.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hadf2fa5a5ec54d06b738fc7a14d19c15a.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Haf8d85cc45c5481da21315b8b6a20f9e2.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/He440d786e0ef4f6382eec39cd014a6a2R.jpg?avif=close&webp=close",
    ],
    shortDescription: "High-performance pro laptop for creators.",
    fullDescription:
      "Xenova Pro X16 delivers workstation-class performance in a sleek metallic body. Featuring 14-core processing, OLED ProMotion display, and vapor-chamber cooling for render-heavy workloads.",
    rating: 4.7,
    isNew: true,
    price: 1890,
  },
    {
      id: "tech-002",
      name: "Neovus AirLite T12",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/H5844b0a29147479abb77f49c0c3a4a42o.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H927718f54e354210a74034e9a01778abb.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H6496381794c549c192b31209f3ad1ab7g.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hcfe7106f4896447f8e9efefe26cc57edE.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H54b16c22de924c6fbeef26b5560933ceS.jpg?avif=close&webp=close"
      ],
      shortDescription: "Ultra-thin portable notebook for daily productivity.",
      fullDescription:
        "The Neovus AirLite T12 offers lightweight performance with a slim alloy body, energy-efficient processor, and a full HD anti-glare display. Designed for travel, classrooms, and remote work.",
      rating: 4.6,
      isNew: true,
      price: 590
    },
  
    {
      id: "tech-003",
      name: "Vortexion Cube Mini PC",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/H1d7782129718497bbf040447d7a351edh.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hadc7df6010674580b7bc463fba132905j.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H014aa332eae5448f93a32bc4a1ae66066.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H6ae4ad0c716e4809b6f82a5bce0422a6N.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H93f4fbc1ebd44b92abfe9106c34a9e78q.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2b94cbbf189e4f43a26a7dbebe5f1258m.png?avif=close&webp=close"
      ],
      shortDescription: "Compact mini PC for office and home setups.",
      fullDescription:
        "The Vortexion Cube delivers reliable computing in a palm-sized form factor. Features silent cooling, SSD storage, and dual-display support for efficient multitasking.",
      rating: 4.5,
      price: 320,
      onSale: true,
      salePrice: 289
    },
  
    {
      id: "tech-004",
      name: "Auremax FlexPad 11",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/H8b49c14654734fcf9a21436dac408062Z.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H4139f8f3f6804cd49ae39a3b0f762603M.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hdc39b66ec5834dacbe6763ec5476c900G.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H632dc388f2f941ae83bee7b30ef15689w.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha888a95b298b439ab4af995cf89ddf2eI.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H141d0b1514f548748ed07c6f50d483b2M.jpg?avif=close&webp=close"
      ],
      shortDescription: "Lightweight tablet with detachable keyboard.",
      fullDescription:
        "The Auremax FlexPad 11 combines tablet portability with laptop versatility. Featuring a vivid IPS display, long battery life, and a magnetic keyboard for work or entertainment.",
      rating: 4.7,
      price: 210
    },
  
    {
      id: "tech-005",
      name: "Helion ArcCharge Power Bank 40K",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/H9a850601aa9a45429f13b6a8b6a9232eX.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hefc7b3a0d7bd41dcb3115ba7341a4e89k.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H67af64eb8b6145c281a21aede606d23aM.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hce36a621b4c54559885be2baafc191c07.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc13de5d347e74ea28e3646eec3eeabc0k.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He6a813113cd144bf9d454b58c7524ea4d.png?avif=close&webp=close"
      ],
      shortDescription: "High-capacity fast-charging power bank.",
      fullDescription:
        "The Helion ArcCharge 40K provides massive backup power with dual fast-charging outputs, LED indicators, and a rugged shell suitable for travel or outdoor use.",
      rating: 4.8,
      price: 49
    },
  
    {
      id: "tech-006",
      name: "Nexivon PulseFit Tracker",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/H5f445c32cb0749c8a316d4b17f014d08y.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H7c1fa7793cbc4fb7be377c10e4e108a2B.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Heed01589fc414125aa1808c963249168e.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H4e41170983a341eaa0368799da7b9f111.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H55dc8ba793334049af1ef7f1410c5c1b5.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd5ea312b072841eeb2f886441b0d9d5b5.jpg?avif=close&webp=close"
      ],
      shortDescription: "Lightweight fitness tracker for daily health monitoring.",
      fullDescription:
        "The Nexivon PulseFit offers step tracking, sleep analysis, and heart-rate monitoring with a long-lasting battery. Ideal for beginners who want essential health data.",
      rating: 4.4,
      price: 35,
      onSale: true,
      salePrice: 29
    },
  
    {
      id: "tech-007",
      name: "Zylatec SonicBeam Mini Speaker",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/He3e997254e654bc4a890ad1388a9743fS.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H2ee0e756b688477a8002c47a1f3e30d8V.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H3032cfcf54fa4b5698d657c0716ca3deS.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha17c88c4a7e34ec797b80f7d2aa716e8h.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hb3e939e907ee42cdbb2b658fe980e1b8T.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8fd2547ee2964780b6d10921b086af4dM.jpg?avif=close&webp=close"
      ],
      shortDescription: "Portable Bluetooth speaker with deep bass.",
      fullDescription:
        "The SonicBeam Mini packs powerful audio into a compact shell. With enhanced bass, splash resistance, and USB-C charging, it’s perfect for daily use or travel.",
      rating: 4.6,
      price: 28
    },
  
    {
      id: "tech-008",
      name: "Quantix ProKey Mechanical Keyboard",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/S866b4e9d244b4e3cb88a7a80702a1ba0i.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/A0eb824719623459dab4188eac0129ee3A.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H0a08a6c5e26e4ac19da241b680ec7490R.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd5d0aeceb87e4e30a6ae87af7753b5f3l.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/S142ad1cce34e4b008726a1631671386eM.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Se8f62bd9c7cc44baa1b21657d75c4cc5B.png?avif=close&webp=close"
      ],
      shortDescription: "Mechanical keyboard with customizable RGB lighting.",
      fullDescription:
        "The Quantix ProKey features tactile switches, full RGB control, and a durable top plate. Built for typing comfort and long-term reliability.",
      rating: 4.7,
      price: 79
    },
  
    {
      id: "tech-009",
      name: "Aerion WindFlow Desk Fan",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/H6c2d10a999a94110a5c89b1cd01add3as.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H6acc4925f2204b3bac3fc9d7fc37c023X.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hcb42f3e0401148e49a4d6effe5a281f30.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H6849894a9aa3472eb1254e508ed0f186D.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H514c715a28874f5497a8ce0c15e42f7bN.jpg?avif=close&webp=close"
      ],
      shortDescription: "Quiet desk fan with multi-angle airflow.",
      fullDescription:
        "The Aerion WindFlow offers silent operation, adjustable tilt, and energy-efficient airflow—ideal for workspaces, bedrooms, or compact setups.",
      rating: 4.5,
      price: 32
    },
  
    {
      id: "tech-010",
      name: "Kynaro StreamLite Microphone",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/Hecefc6f3eaa34e9d90608cfa58297f57Z.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hbb5c4e49762c4d07b2c1198c989bda99x.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H1efe5fd42a3a420c831f6924a3e794809.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Had01df8fb2a34ff79fcbb24aa32f5d8bV.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha8634765b5c74eaaab67078eaa1039fcP.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf59c74960e2040feb1bec0e4bda7e343q.png?avif=close&webp=close"
      ],
      shortDescription: "USB microphone for streaming and voice calls.",
      fullDescription:
        "The Kynaro StreamLite provides clear vocals with noise reduction, adjustable gain, and plug-and-play USB compatibility for laptops and PCs.",
      rating: 4.6,
      price: 45
    },
  
    {
      id: "tech-011",
      name: "Solara Vision LED Desk Lamp",
      category: "tech-gear",
      image:
        "https://s.alicdn.com/@sc04/kf/H263bdfe7d56343d08606855ab181287eS.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hfe3a4f6ea9dd4e62bbb5282acc40800b4.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H41437cd9eb97483fb290e273293279bde.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H4b53550201be4f06afbe6c67db954fa1M.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha70771e3beec42779a946d57817400b4S.png?avif=close&webp=close"
      ],
      shortDescription:
        "Adjustable LED desk lamp with flicker-free lighting.",
      fullDescription:
        "The Solara Vision Lamp features touch controls, multiple brightness levels, and an eye-care LED panel for long working hours. Flexible arm allows precise lighting angles.",
      rating: 4.8,
      price: 52
    },
    {
      id: "tech-012",
      name: "LumaTone RGB Desk Bar Light",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/He444317ab50d4ce19cbcb2795b1959a5e.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H1b146d6caa7e4812b72f6ed39b5de77e7.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hf8765573bb414a2d8cb2d7cd3f470010I.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2ebcb5aab5e34e80836105eac7530e54W.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc62721d874304795b0a71d805628f632p.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H06f6b4a6adf64747be20765abc6c2d84R.jpg?avif=close&webp=close"
      ],
      shortDescription: "RGB desk light bar with dynamic ambient modes.",
      fullDescription:
        "LumaTone adds ambient glow to workspaces with customizable colors and soft diffused lighting controlled via touch panel.",
      rating: 4.7,
      price: 27
    },
    {
      id: "tech-013",
      name: "BreezeLite USB Desk Fan",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/H9cc56321d6d54df1aa4f2fddc65a329ey.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H64e4e10329cf4409b5076586d84897251.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H1a9579d11d6c402196de8d1cf1457d08V.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H1f104f95e1fb4e08816dd10a48fb819bf.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf38495190af24b9481c87fd4de4962d4T.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hcdfbc78d556849c7aa7f91c394fac587h.jpg?avif=close&webp=close"
      ],
      shortDescription: "Compact USB-powered desk fan with quiet operation.",
      fullDescription:
        "BreezeLite features dual-speed settings and a silent motor, perfect for office desks, bedside tables, and study areas.",
      rating: 4.6,
      price: 18
    },
    {
      id: "tech-014",
      name: "VoltPad Wireless Charger Stand",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/H16fe28b0535c4941af96a4941d9577c03.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H5dfd15a321ab487e8153b16034f159f4X.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hd1c674c2ca904d8f8ffb8850157b554ac.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9abbeb288b374ba681f5475ecc39a937g.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H0e1456bd86d3441787b085b728fc639dE.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H804d8aa59b5b47a1af6f27dd5c9e8b0aX.jpg?avif=close&webp=close"
      ],
      shortDescription: "Wireless charging stand for smartphones and earbuds.",
      fullDescription:
        "VoltPad provides stable 10W charging with an angled stand perfect for video calls, reading, or nightstand setups.",
      rating: 4.7,
      price: 21
    },
    {
      id: "tech-015",
      name: "AirClean Mini Desk Vacuum",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/Hf2b4b72992fe4e3f9aeadb138434d26aM.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H00a6e1ec4cf34ecb8f3b5f71eea46bfcV.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hab30ecea19a94eb989e7fe325628b691h.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H17981346a84e46b0b6cccfeb2125a208H.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H132fdd62019c4afbb0e06b117a14ea73y.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha622e67bb78a413dae660e8dc13be104t.jpg?avif=close&webp=close"
      ],
      shortDescription: "Portable vacuum for keyboards and work surfaces.",
      fullDescription:
        "AirClean removes dust and crumbs using a compact yet powerful micro-motor, ideal for office and home desk setups.",
      rating: 4.7,
      price: 19
    },
    {
      id: "tech-016",
      name: "GlowEdge Screen Light Bar",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/H140afbf40ce24182b8dc9d07785f22ce0.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Hc493e7bd6f1f4d2daa4da3b57813087fL.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H957ef8e700f44592a3e6c9efba3a7d66J.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hbf60011b8b3f434293d4687657dee07et.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He1c6d6744d2a4d6ea95cbe8d2a425ff8r.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hb13a734285e147bf8f9eac8d2f2a5a36S.jpg?avif=close&webp=close"
      ],
      shortDescription: "Monitor-mounted LED bar for eye-care lighting.",
      fullDescription:
        "GlowEdge reduces screen glare and enhances focus with adjustable color warmth and flicker-free LED illumination.",
      rating: 4.8,
      price: 33
    },
    {
      id: "tech-017",
      name: "NanoHub USB-C Mini Dock",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/Hf9c05fb1c074441c81a78f50a1d5def3Z.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H9aa9b87dcfed4f11ab04817a6cebc596l.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H366c3716ab3544b9acb54f9a5366e4696.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He0b4a68d7a73426fa16c2835685432a5Z.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H80a541bdf1364c5fbe4ffe9a64606b052.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He9a010ee154244b89065ffae53700442V.jpg?avif=close&webp=close"
      ],
      shortDescription: "Portable USB-C dock with multiple connectivity ports.",
      fullDescription:
        "NanoHub adds HDMI, USB-A, and SD card support in a pocket-sized housing ideal for travel and remote work.",
      rating: 4.5,
      price: 28
    },
    {
      id: "tech-018",
      name: "CoolMist USB Humidifier",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/Hd0e918df56d342b1bc54589ad8c3e2e6D.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Hd722720588284a8fa3db613ca81570afo.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hea1fddc683de4fb0a394ba513271372fn.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H22e42aa2369f4a568767025caf99f8f20.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Had8957446f9c4641a6ee1b39c322e267Z.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd26147e4f2504094bd2d425c09131dd5s.jpg?avif=close&webp=close"
      ],
      shortDescription: "Mini USB humidifier for dry rooms and office desks.",
      fullDescription:
        "CoolMist provides silent moisture diffusion with two spray modes and auto shut-off for safe overnight use.",
      rating: 4.6,
      price: 17
    },
    {
      id: "tech-019",
      name: "EchoMat Anti-Slip Desk Pad",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/H79cc56ce6f894aa4a17477fd4d92a1b3g.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/Hbd86aea36bc145cb8ac65f305ebee6a5P.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H9376c2e6a66140f5861fbabf745b8abc3.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H047893a29a8144799c3017701233e295F.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc046c88b15d84480a0afd4738e4a9639N.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hfea47d185aae499fbd1f467710dbbbb6c.jpg?avif=close&webp=close"
      ],
      shortDescription: "Soft anti-slip desk mat for typing and mouse control.",
      fullDescription:
        "EchoMat features a smooth working surface with a rubberized underside that keeps it firmly in place during work sessions.",
      rating: 4.7,
      price: 14
    },
    {
      id: "tech-020",
      name: "Clarity USB LED Light Strip",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/Hf776ec0a06824c4b9d53c2a885517a3au.png?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H7dda518e075743acb0423895acff62a9j.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H50592a3146b54f63825adc105d979faaq.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hdf2090d0a2e247b1b29cbb8081e44c1bn.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H7978562a8dd84a468d171039565950e3Q.jpg?avif=close&webp=close"
      ],
      shortDescription: "USB-powered LED strip for ambient backlighting.",
      fullDescription:
        "Clarity Strip offers soft diffused glow behind monitors or shelves, enhancing mood and visibility with easy USB power.",
      rating: 4.8,
      price: 12
    },
    {
      id: "tech-021",
      name: "PulseBar Portable Bluetooth Speaker",
      category: "tech-gear",
      image: "https://s.alicdn.com/@sc04/kf/H086f290f1eb04960a9a8dfacaea6dfbaQ.jpg?avif=close&webp=close",
      hoverImage: "https://s.alicdn.com/@sc04/kf/H1b80df18854f415cbdc008befbc89266T.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H59bb23d32bfc43f68be25d5f45c8aa6dX.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H7a98ae93090048b69c3b430701b252f9E.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2815eda9db5a4844b7c9ec0ab0c014a5x.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8b177d07096e491ba5bc1cde782bb539H.jpg?avif=close&webp=close"
      ],
      shortDescription: "Compact wireless speaker with rich stereo sound.",
      fullDescription:
        "PulseBar features a long-lasting battery, Bluetooth 5.0 connection, and enhanced bass drivers for immersive portable audio.",
      rating: 4.8,
      price: 32
    },
    
  
  {
    id: "workspace-001",
    name: "OrbitShift Standing Desk",
    category: "workspace",
    image:
      "https://s.alicdn.com/@sc04/kf/H063d6e39bb5f4ac1a4e3ff0f3e5320566.png?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H9fd7375eaf0c4a6498b301ad49f26b38d.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H56586e2207094bf39d40e82213a480e6l.png?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/Hc6d1bca742124133a0999f5b97b046826.png?avif=close&webp=close",
    ],
    shortDescription:
      "Motorized desk with walnut veneer and programmable posture presets.",
    fullDescription:
      "OrbitShift pairs aerospace-grade actuators with tempered glass controls and Qi charging. Includes three programmable height presets, cable arsenal, and anti-collision sensors.",
    rating: 4.6,
    price: 1295,
  },
    {
      id: "workspace-002",
      name: "ModulaFold Wall Desk",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/H46af323578c54a3ca24a6e539c5efd9b3.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H0fb3580278c34b879008629ebabc247bs.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hb16b86937d6b42679ba971abee7d525fw.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8252f1fef6da4204a3d54c705152993co.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc97420b592dd4607a40a6a065f76392a6.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H14a23da82ada43889839cbed253b078cf.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Foldable wall-mounted desk ideal for compact workspaces.",
      fullDescription:
        "The ModulaFold Wall Desk offers a space-saving design with a reinforced hinge mechanism and smooth folding action. Perfect for home offices, studio apartments, or minimal setups.",
      rating: 4.6,
      price: 220
    },
  
    {
      id: "workspace-003",
      name: "StratoEdge Monitor Riser",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/H059b993255ae44ac971cf893c9c108213.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hc1538b741f8649028ff012eeb8c015fa9.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H92b2b77134eb4bcbb9932cbe6785ef29G.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc8e50b859c244b9aa04c8d20da2352f4U.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H21dc6022ca3b4e328ae33cb9c841755eQ.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Ergonomic monitor riser crafted from solid MDF.",
      fullDescription:
        "StratoEdge elevates your screen to reduce neck strain while adding storage space for keyboards and stationery. Features a scratch-resistant matte finish for daily use.",
      rating: 4.7,
      price: 38
    },
  
    {
      id: "workspace-004",
      name: "LumaRest Mesh Office Chair",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/Hc56775d77d234d058a8cc738adb19c5b8.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H3a15d117d0b14067aca2c781c664cc623.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/He5ae3c1c073e4276874df64e15f28227L.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H26813e9526bf4cccb6083c0ca857afb8S.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha48ea33559cc44b8b57ecb4e6787fcb02.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H021db77dd2ef4748bb4ceb4f33b4cfe5j.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Breathable mesh office chair with ergonomic lumbar support.",
      fullDescription:
        "The LumaRest Chair features adjustable armrests, a contoured mesh back, and a tilt-lock system for long working sessions. Designed for airflow and comfort.",
      rating: 4.5,
      price: 165
    },
  
    {
      id: "workspace-005",
      name: "ArcLite LED Desk Lamp",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/H9e15c4b9370040b198d536ab64832956u.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H28eeb35c6b244c31ba185ecfa9aee4cdO.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H6e36779968174143a3ba5f7bc1e356a33.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hec6eaf64d1a3412d9f528a0d86bf1a65C.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H175ff4a107ea4e6289f6eb33f75752a1X.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc9e2e73a0a0c430bb99c5b33c99c237d0.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Adjustable LED lamp with touch controls and brightness presets.",
      fullDescription:
        "ArcLite uses low-glare LEDs with adjustable color temperature, a flexible gooseneck arm, and memory presets for personalized lighting.",
      rating: 4.8,
      price: 42,
      onSale: true,
      salePrice: 35
    },
  
    {
      id: "workspace-006",
      name: "NordHaven Desk Organizer Set",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/Hd403d7f7058c4454a8bc22a405690976e.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hf105a001584e49f28ebbfe116af22de5M.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H9480150ea2314ab8afa23535ea0b1daex.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hedf3635402eb4378b4c3688d23cb025bc.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H66f8bfa9e1e6486b8bd517c736e591807.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H1aced886828d437585eb1b70bc07ecc3U.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Minimalist desk organizer set for clean workspace layouts.",
      fullDescription:
        "This NordHaven set includes a pen tray, notepad holder, and accessory bin made from durable matte ABS. Ideal for keeping your workspace tidy and efficient.",
      rating: 4.6,
      price: 29
    },
  
    {
      id: "workspace-007",
      name: "FlowMat Anti-Fatigue Standing Mat",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/Hd485020fa8f942ad9d78d3fe32f59d26x.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hcae9c3af6797469c9d050da2c7e7187aj.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H6b54f2ea51e548898b4987032bb4af8dC.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9d81e8905afe4cc3989b6ff62b1c66d4l.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H699bf9d34f9c41f8905eea0d8f9a4284C.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hffb739457a284b5082474bcb831c79625.png?avif=close&webp=close"
      ],
      shortDescription:
        "Cushioned standing mat designed for standing desks.",
      fullDescription:
        "FlowMat reduces fatigue during long standing sessions with its soft foam construction and non-slip base. Suitable for office and home use.",
      rating: 4.7,
      price: 55
    },
  
    {
      id: "workspace-008",
      name: "FlexFrame Adjustable Laptop Stand",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/H49eb5855fad6475cb4573a60a5adff3cY.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H70ab154efcad4a22b0e4677c82ec15abg.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H9031d6a7d7b349a2839ab8e122f68ea1v.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He6368957d9124bf2b89e0cc3493e23caq.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2cfd5bfea20b4555823d9289c9fd278bg.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H43ce12e0563744cbaf3784cba78b290b5.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Adjustable aluminum stand for ergonomic laptop positioning.",
      fullDescription:
        "The FlexFrame Stand allows multiple height and angle adjustments, improving posture and airflow for better laptop performance.",
      rating: 4.7,
      price: 37,
      onSale: true,
      salePrice: 32
    },
  
    {
      id: "workspace-009",
      name: "TeraStack Multi-Tier Shelf",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/H87202a047a22431ca6a80bf4538abeaeN.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H58a5f81150d14539bb2a72a5c74c56f7r.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H535effc23de749d7a6b7e338ab330d0dK.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H848efdf73e854644bd88ccf11c35e27ed.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H6b67461c90ae4bdcbfeadb9e77e883c5z.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9b25cdce71104597a9827aa92cfeb137H.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Compact multi-tier desktop shelf for organizing essentials.",
      fullDescription:
        "TeraStack provides two-tier storage constructed with laminated wood and metal supports, helping maximize workspace without clutter.",
      rating: 4.5,
      price: 48
    },
  
    {
      id: "workspace-010",
      name: "ChronoGrip Cable Management Kit",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/H57880c16dc4447c68b7591dc31d20cb2r.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Ha2727817c3214ad5b74352241308fc3b7.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hfe8be75c19d647838859a2e2c881553bE.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Heba5b03e5f074600b1facd02393bebd9e.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf736d7ce31a449f0923eede5ff152f0e0.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H3c69b4764e7b4212a15c20269cdcb335x.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Complete cable management system for clean desk setups.",
      fullDescription:
        "ChronoGrip includes adhesive clips, Velcro ties, and an under-desk cable tray—perfect for removing visual clutter and keeping cables securely in place.",
      rating: 4.8,
      price: 26
    },
  
    {
      id: "workspace-011",
      name: "ZenHush Acoustic Desk Divider",
      category: "workspace",
      image:
        "https://s.alicdn.com/@sc04/kf/H6be80b5fe85f408bbb98775361d4d5bbg.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H6d6155b3d7b14770940749f344905d4av.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H37ddf578f5234acb9637a6f9f44fcede2.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H25dd612283e942948d9815956a4d08800.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H0845e884dfe54d99bb2c6e48c47f18aab.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Acoustic privacy divider for noise reduction.",
      fullDescription:
        "The ZenHush Divider uses thick felt panels to soften ambient noise and create a more focused workspace. Lightweight and easy to attach to any desk.",
      rating: 4.6,
      price: 58
    },
  
  {
    id: "creator-001",
    name: "Aether Cinema Rig",
    category: "creator-studio",
    image:
      "https://s.alicdn.com/@sc04/kf/H4971be87075f46f489298795aa306781F.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H9270bfac9890494c8f5bae1ff43f4b06e.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H3550b35ce1fd4cdb9c6b56a998b7aee5s.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H3dc97d34aff44ae79fb11f4d3fdab6a13.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H6e4458b91839440c9b1e2a9fab9b09e1n.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H4160d5acbfe040658ac58046204257a6q.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Modular cinema rig with carbon fiber rails and 8K-ready stabilization.",
    fullDescription:
      "Aether Cinema Rig includes counterbalanced carbon rails, adaptive shoulder mount, and Hydra stabilizer rated for 8K payloads. Tailored for documentary teams and on-set DPs.",
    rating: 4.7,
    price: 2150,
  },
    {
      id: "creator-002",
      name: "NovaBeam Studio Light Panel",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/H5b5edb15f3d849aeae5b4962f94a3700U.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H1fa17871bc304118ad47244a79ae7db8c.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H7dc0dd6733344be991360d29a183034e7.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H6d97fcd68fc84eccbe94351ae934f6det.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hec5ce83f87c2432b80bed49111039fcbO.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc932be486c984ad3a099510c8b017d72V.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Bi-color LED panel with flicker-free illumination.",
      fullDescription:
        "The NovaBeam Panel delivers soft, even lighting with adjustable color temperature and a silent passive cooling system. Ideal for product shoots, interviews, and indoor setups.",
      rating: 4.7,
      price: 320
    },
  
    {
      id: "creator-003",
      name: "AxisGrip Dual-Handle Rig",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/Ha96fadd85cc94b2da1030ef88aadb9f45.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H64e9908830be4666a8e2d735dd9067dd3.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H08ee922ef1d24e1d850bc89330b0092eJ.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hdd65e16636834da9971d911ec8a7c91cV.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hdd65e16636834da9971d911ec8a7c91cV.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H5d808c9200e745f5a25c2450086de92c0.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Aluminum dual-handle camera rig for stable handheld shooting.",
      fullDescription:
        "AxisGrip features dual anti-slip handles, a central mounting plate, and multiple cold-shoe slots for accessories. Designed for lightweight mirrorless builds.",
      rating: 4.6,
      price: 145
    },
  
    {
      id: "creator-004",
      name: "EchoWave Shotgun Microphone",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/H98febaf4ac954c6980f98fdf1890690cA.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H8ae4cec286314fffa0ab6d2e51d27b7ei.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H68ce7eaa98164b7b9b0879b3f7e428841.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H25a0692b0de94106bea5de41a7e65336k.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H8c9ff7de6a5a46568f6c5cb119d1b0e6R.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hb926035b727d4ab2b1a53106fad670b9G.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Directional shotgun mic engineered for field recording.",
      fullDescription:
        "EchoWave offers high sensitivity pickup with low self-noise, making it ideal for interviews, outdoor shoots, and documentary sound capture.",
      rating: 4.7,
      price: 110
    },
  
    {
      id: "creator-005",
      name: "GlideCore Motorized Slider",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/Hba2dd7679a214b3087ac569c65a9b38eJ.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hf4fe87cea7294f04b33ed2c4b015fd7bA.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hab7825847887441688be108942c705b2Y.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H876e402a35494ee48b61e8ab24a51a08p.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hb3c1506b99cb442f9ff91d282f32c82bH.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf5098a3a9ee44aafb73784b9a00d73b1P.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Motorized camera slider for cinematic movement shots.",
      fullDescription:
        "The GlideCore Slider uses a quiet stepper motor with programmable speed and motion paths. Suitable for product reels, travel B-roll, and timelapse workflows.",
      rating: 4.6,
      price: 270
    },
  
    {
      id: "creator-006",
      name: "FrameLoop Backdrop Stand",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/Hbca66acd50384d0fa396061cf5565f18e.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H2c75a784a5f847f5874a601c41f3566dE.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H676f27634eca408db18cd41804ce46887.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hafaeca598208415e8ae929f9ab874ab7S.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hdeb6e981c4074190874767f5b13f2a39F.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H977749df00344abbb8ec91d5904eee8ci.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Adjustable backdrop support system for studio shooting.",
      fullDescription:
        "FrameLoop includes telescopic crossbars and reinforced steel stands. Ideal for mounting cloth, paper, or collapsible backgrounds.",
      rating: 4.6,
      price: 88
    },
  
    {
      id: "creator-007",
      name: "PolarEdge RGB Tube Light",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/Hb83f9f802cc841629ef194e7eddfe6eeQ.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H4acfb7df01aa418eb4eb202dae658464H.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H3fbc91ea5da94fbf97ecdcebb4bf725eA.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H2b6c1160ba47406e996c3ec64b5d3939V.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H924f2c3b4a95416da93e10aa228f833ak.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hdfec471ab6f0403080232cd2d763e37cP.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Portable RGB tube light with full-spectrum color modes.",
      fullDescription:
        "PolarEdge offers over 360 RGB tones, strobe effects, and variable brightness. Built with an internal battery for mobile lighting setups.",
      rating: 4.8,
      price: 95
    },
    {
      id: "creator-008",
      name: "AeroCast USB Condenser Microphone",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/H92759f341cd34023802c80e0f44ba78c6.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H88ea702d6fda46b7a6cbb4325c850c3br.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H35144098b3f84d98afa22e8e779b1ed5W.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd5950fabaccd47fbb906cbb8a7936bcc6.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H4061adc1097642caa4b0e2d64b4f62333.png?avif=close&webp=close"
      ],
      shortDescription:
        "USB condenser microphone designed for streaming and voice recording.",
      fullDescription:
        "The AeroCast USB Microphone delivers clear, low-noise vocal capture with plug-and-play connectivity. Ideal for podcasts, gaming streams, online meetings, and home studio recording without the need for an audio interface.",
      rating: 4.6,
      price: 49
    },
    {
      id: "creator-009",
      name: "SilentCore USB LED Desk Lamp",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/H9b1d404b7c0f4adb95ff5c6ddf1bf639l.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H64122569dd214688a9a1de5f92d203c30.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H32f8ad799b364e71889e6643284f760cq.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H289976bf9eff4fd1871f08dfe07c0fc1e.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H317bd9be7d924c529e4d728e86d636a9Y.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H0895add47b3940538a4085afaf05cab13.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "USB-powered LED desk lamp with adjustable brightness.",
      fullDescription:
        "The SilentCore USB LED Desk Lamp provides soft, eye-friendly lighting ideal for workspaces, streaming setups, and night-time editing. Features touch controls, three color modes, and flexible angle adjustment for everyday use.",
      rating: 4.6,
      price: 24
    },
    {
      id: "creator-010",
      name: "ProFlow USB Mini Desk Fan",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/H473aeb979aad479ea375627e63462374g.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hcc7021f859914b699944d74b130851a5A.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H4433d7db2a1e4f19b5d463bed970d200S.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hb39b2169cd8f44cd8ac0b8460a78f9bd1.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hec740ad6043c438cae4faf82c4db509d9.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd49abdf771a04f33b3406e521d72b5c2Q.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "USB-powered mini desk fan for compact workspace cooling.",
      fullDescription:
        "The ProFlow USB Mini Desk Fan offers quiet airflow in a compact form, making it ideal for desks, streaming setups, and portable workspaces. Powered by any USB port with adjustable tilt for personalized cooling.",
      rating: 4.7,
      price: 19
    },
  
    {
      id: "creator-011",
      name: "VeloTrack Tripod System",
      category: "creator-studio",
      image:
        "https://s.alicdn.com/@sc04/kf/H764ededd30804a589098241d886f2a5d1.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H8535bf300a734e7f9bb9a39671e8fc8fA.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H00df77078b22488caf2247ea983ba2e5v.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf039e088befa4b4a913b48e53baa7f0ba.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Ha6b4904bd4c84175870b8d871180b5013.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd62c931199e744aeb30b0780c7ef41bbF.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Heavy-duty video tripod with fluid pan head.",
      fullDescription:
        "VeloTrack supports larger rigs with its reinforced legs and smooth fluid head motion, making it suitable for studio interviews and live productions.",
      rating: 4.7,
      price: 195
    },
  
  {
    id: "smart-001",
    name: "Flux Modular Toolset",
    category: "smart-tools",
    image:
      "https://s.alicdn.com/@sc04/kf/H2d7fa2857b634b8a8d646be6a5032df0h.jpg?avif=close&webp=close",
    hoverImage:
      "https://s.alicdn.com/@sc04/kf/H261254d3add94f979a6d02a932da22e69.jpg?avif=close&webp=close",
    imageGallery: [
      "https://s.alicdn.com/@sc04/kf/H221a60843b6747b384b746a546ffa0e92.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H6637bc5a5bac47c4adf630c36c882b4aq.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H2f4a6c238621422ea3cd4b296d015488t.jpg?avif=close&webp=close",
      "https://s.alicdn.com/@sc04/kf/H178bb8edcb26433390fb4f58b1c71a68j.jpg?avif=close&webp=close"
    ],
    shortDescription:
      "Smart precision toolkit with torque feedback and magnetic inventory.",
    fullDescription:
      "Flux Modular Toolset keeps prototypes on schedule with precision torque screwdrivers, NFC inventory tracking, and Bluetooth-connected torque data for QA logs.",
    rating: 4.5,
    isNew: true,
    price: 460,
  },
    {
      id: "smart-002",
      name: "VoltMate Digital Multimeter",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/A128d6854f114438498264b8d2393ca77W.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Ab00b5123a9ac4d29a5342533613f557dw.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/A08e606ce9b834918809bb4611a774faas.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Aa3eab340c9ed4264a8284761373ce8e1I.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Smart multimeter with auto-detection and real-time display.",
      fullDescription:
        "VoltMate provides precise measurement for voltage, resistance, continuity, and current. Features auto-range detection, backlit LCD, and safety overload protection.",
      rating: 4.7,
      price: 58
    },
  
    {
      id: "smart-003",
      name: "NanoFix Electric Precision Screwdriver",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/Hd0ca404a7d4c4bb0b6aaa1beef8cfc7bP.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H9f09132cbf734330a870a56527d15117h.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H118683f63de3458ea88d72f740ae010aB.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H118683f63de3458ea88d72f740ae010aB.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Electric mini screwdriver with magnetic bit storage.",
      fullDescription:
        "NanoFix delivers controlled torque, bright LED lighting, and magnetic bit alignment for repairing electronics, toys, and smart devices.",
      rating: 4.8,
      price: 42
    },
  
    {
      id: "smart-004",
      name: "GripSense Smart Tape Measure",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/H5f92fffc79134d06b013ecde2618a2fbW.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hfee7629d625048b4bef5e086702c17ecl.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H3b8bcc4a9cda4bac82d825de5818ecfdZ.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H3b8bcc4a9cda4bac82d825de5818ecfdZ.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H62f533bd28864927ac60c602eb7c7434O.jpg?avif=close&webp=close",
      ],
      shortDescription:
        "Digital tape measure with laser alignment and auto-read display.",
      fullDescription:
        "GripSense combines classic tape measurement with a precise laser pointer and instant digital readouts. Ideal for DIY, home setup, and studio adjustments.",
      rating: 4.6,
      price: 35
    },
  
    {
      id: "smart-005",
      name: "MagLift Wireless Tool Scale",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/Haa9ffc6265de44988470f72d29497accp.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H9c68cdd765d242beb863aa62142230c0j.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H65e2e3a59bb642c4b82737511c60c055K.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H9c732a70c85548afa1b5feb5b54e9338c.png?avif=close&webp=close"
      ],
      shortDescription:
        "Compact digital scale with wireless data sync.",
      fullDescription:
        "MagLift accurately measures parts and components, sending data directly to your phone for project tracking and inventory logs.",
      rating: 4.6,
      price: 28
    },
  
    {
      id: "smart-006",
      name: "PulseLine Laser Level Pro",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/H58d6817810f54e00a410c27895f38f2ej.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H849293da421441d6abfb3827d734acfeh.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H301437d76d3040dba3057698d44e647b4.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H6f6ed6b4159f45d8b73245d2867421c6e.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H49cc4b7164454d0fb4107519f70f06b3N.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H49cc4b7164454d0fb4107519f70f06b3N.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "High-precision laser level with self-leveling mode.",
      fullDescription:
        "PulseLine projects crisp horizontal and vertical lines for wall layouts, furniture setups, and renovation tasks. Includes smart tilt correction.",
      rating: 4.7,
      price: 55
    },
  
    {
      id: "smart-007",
      name: "ThermoGauge Compact IR Scanner",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/Ha3c15f229f72419592ae2c9e66e1a113o.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H7e899041385d483fb419e935e37d54afb.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hd6e97319bacd4428b584b2a6c012c950d.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H7e15fe852e4f476886ddddf9ce0004baR.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd50f30834bff45168737771a807aded6N.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H587a9023e6474572bd3a935e115bd1244.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Portable IR thermometer for instant surface readings.",
      fullDescription:
        "ThermoGauge uses infrared sensors to detect surface temperatures within milliseconds. Perfect for electronics diagnostics, cooking, and workshop safety checks.",
      rating: 4.5,
      price: 22
    },
  
    {
      id: "smart-008",
      name: "ClipCore Mini Tool Light",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/Hfe67edf3f5e840c3b810f286316cc354b.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H4418679cf2894a648b2b46e874418a32r.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hfdf3dea09a5242d2b2c5ff3726ad3eaa7.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/He471c68969304a87a05e1dfc862aeeacD.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hf3f519ea86d140ebaf13019aaacfccb9Y.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H73e3e417d1354f0cbd3deedd7df0d4acO.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Magnetic clip-on LED tool light for tight spaces.",
      fullDescription:
        "ClipCore attaches to metal surfaces or pockets to provide focused lighting during repairs or late-night desk work. Includes USB charging and adjustable brightness.",
      rating: 4.8,
      price: 18
    },
  
    {
      id: "smart-009",
      name: "BitSense Smart Socket Tester",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/H25e5e7ab9e294a8e97c613bca1fdfee7A.jpg?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/Hd7a0ff11d93d414a97ed4971c56d22c8I.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/Hf530fe23799e4e2f8fdebcd9bdf67b11n.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H80ba575ff899461c85d4ff3599a5489eb.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H5df650f0419f4fa99d356d297c809c2ct.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Smart outlet tester with fault detection diagnostics.",
      fullDescription:
        "BitSense identifies wiring issues such as open grounds, reverse polarity, or weak connections. Compact and essential for home maintenance and workshop safety.",
      rating: 4.7,
      price: 16
    },
  
    {
      id: "smart-010",
      name: "TrackLite Bluetooth Finder Tag",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/H12937e019bc94a98a155dc229fd11764P.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H559ea2f1cace404c97196d9f6a41aeaem.jpg?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H704494c7debe4ef59cfb6208942bc90aG.jpeg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H76ba4020fcca42cc84445eb15f80ae38K.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Heb9443463aa34f828b47f05db85e9696S.jpg?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hd085bc12ee0e4916a6c03967c758025bp.jpg?avif=close&webp=close"
      ],
      shortDescription:
        "Bluetooth tracker tag for keys, bags, and small devices.",
      fullDescription:
        "TrackLite syncs with your phone to help you locate missing items, trigger sound alerts, and track last-seen locations. Ultra-thin and battery-efficient.",
      rating: 4.6,
      price: 14
    },
    {
      id: "smart-011",
      name: "LiteMark Smart Label Printer",
      category: "smart-tools",
      image:
        "https://s.alicdn.com/@sc04/kf/Hb954414d4e334a749e91920bb080022a0.png?avif=close&webp=close",
      hoverImage:
        "https://s.alicdn.com/@sc04/kf/H86f31d171b1044b7859ff98ef68cd3855.png?avif=close&webp=close",
      imageGallery: [
        "https://s.alicdn.com/@sc04/kf/H4120aca4cb8b4d1db7385dc532a79000L.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/H3764d7849b2443ca99f8183f1861b961t.png?avif=close&webp=close",
        "https://s.alicdn.com/@sc04/kf/Hc38ec9938c52409fa78bcf50a5b1c4edZ.png?avif=close&webp=close",
        ""
      ],
      shortDescription:
        "Portable Bluetooth label printer for workspace and home organization.",
      fullDescription:
        "LiteMark connects to your phone via Bluetooth to create labels for cables, storage boxes, gadgets, and daily essentials. Features thermal printing, multiple template styles, and long-lasting battery life.",
      rating: 4.7,
      price: 24
    }
    
  
  
];

export const productsByCategory = products.reduce<Record<ProductCategory, Product[]>>(
  (acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  },
  {
    men: [],
    women: [],
    accessories: [],
    "tech-gear": [],
    workspace: [],
    "creator-studio": [],
    "smart-tools": [],
  }
);

