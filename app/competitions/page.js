import Image from "next/image";
import { Roboto } from "next/font/google";
import macbook from "../images/macbookLarge.png";
import { redirect } from "next/dist/server/api-utils";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });
const robotoLight = Roboto({ subsets: ["latin"], weight: ["300"] });

function Button() {
  return (
    <button
    className={`${roboto.className} text-cyan-400`}
      type="button"
      // onClick={() => redirect('/')} Find how we can render a button on server side
    >
      Participate
    </button>
  )
}

function Card({ title, description, price, img }) {
  return (
    <div className="m-5 text-white items-center flex flex-col text-center rounded-lg border border-red-500">
      <Image src={img} width={200} height={200} alt="Product Image" />
      <h1 className={roboto.className}>{title}</h1>
      <p className={robotoLight.className}>{description}</p>
      <p className={robotoLight.className}>
        {price}
      </p>
      <Button/>
    </div>
  );
}




export default function Dashboard() {
  const data = [
    {
      img: macbook,
      title: "MacBook Pro M1 (2020)",
      description: "Superfast M1 chip & beautiful retina display",
      price: `1200.50лв`,
    },
    {
      img: macbook,
      title: "MacBook Pro M1 (2020)",
      description: "Superfast M1 chip & beautiful retina display",
      price: `1200.50лв`,
    },
    {
      img: macbook,
      title: "MacBook Pro M1 (2020)",
      description: "Superfast M1 chip & beautiful retina display",
      price: `1200.50лв`,
    },
    {
      img: macbook,
      title: "MacBook Pro M1 (2020)",
      description: "Superfast M1 chip & beautiful retina display",
      price: `1200.50лв`,
    },
  ];

  return (
    <main className="flex flex-col items-center justify-between max-h-screen">
      {/* <h1 className={`${roboto.className} + text-white`}>Catalog</h1> */}
      <div className="flex flex-row item-center justify-between m-5">
        {data.map((element, index) => (
          <Card className="max-w-max" key={index} {...element} />
        ))}
      </div>
    </main>
  );
}
