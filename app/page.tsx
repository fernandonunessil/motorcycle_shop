"use client";
import React from "react";
import Image from "next/image";
// Icons
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Models = [
  {
    name: "Panigale V4",
    description: "Uma supermoto esportiva com 1103 cc de potência.",
    imgPath:
      "https://images.ctfassets.net/x7j9qwvpvr5s/2OBs5O43R9pYIWwupQZpcO/9885cb2b65e7b6efb2508397e0448f17/MY-22-Panigale-V4-S-Model-Blocks-630x390-V06.png"
  },
  {
    name: "Monster",
    description: "Uma naked bike icônica com motor de 937 cc.",
    imgPath:
      "https://images.ctfassets.net/x7j9qwvpvr5s/5zpRwIaUMZm5Pn08azVIKf/924485a505af12de3d2b014b30c53c1f/Monster-937-Rd-MY22-Model-Preview-1050x650-v06.png"
  },
  {
    name: "Multistrada",
    description: "Uma moto de aventura versátil com várias opções de motor.",
    imgPath:
      "https://images.ctfassets.net/x7j9qwvpvr5s/5zpRwIaUMZm5Pn08azVIKf/924485a505af12de3d2b014b30c53c1f/Monster-937-Rd-MY22-Model-Preview-1050x650-v06.png"
  },
  {
    name: "Diavel",
    description: "Uma power cruiser com motor de 1260 cc e design arrojado.",
    imgPath:
      "https://images.ctfassets.net/x7j9qwvpvr5s/VN1FRlbBgIA245bYixByM/e60f6931c8bceb3110fb368f0ec67027/Diavel-1260-S-BYG-MY22-Model-Preview-1050x650.png"
  }
];

interface StageParams {
  name: string;
  description: string;
  imgPath: string;
}

const stages = [
  {
    id: "01",
    title: "Model"
  },
  {
    id: "02",
    title: "Colour"
  },
  {
    id: "03",
    title: "Packages"
  },
  {
    id: "04",
    title: "Apparel"
  },
  {
    id: "05",
    title: "Outfit"
  }
];

export default function Home() {
  const [selectedStage, setSelectedselectedStage] =
    React.useState<string>("01");
  const [selectedBike, setSelectedBike] = React.useState<StageParams>({
    name: "Panigale V4",
    description: "Uma supermoto esportiva com 1103 cc de potência.",
    imgPath:
      "https://images.ctfassets.net/x7j9qwvpvr5s/2OBs5O43R9pYIWwupQZpcO/9885cb2b65e7b6efb2508397e0448f17/MY-22-Panigale-V4-S-Model-Blocks-630x390-V06.png"
  });
  const [showBikes, setShowBikes] = React.useState(true);
  return (
    <div>
      <div className="flex h-screen ">
        <div className=" w-1/3 flex">
          <div className="w-1/4 h-screen bg-[#C5B7A6] grid justify-center text-zinc-700 py-8">
            <div>
              <TwoWheelerIcon />
            </div>
            <div
              onClick={() => setShowBikes(!showBikes)}
              className="cursor-pointer"
            >
              <MenuIcon />
            </div>
          </div>
          <div>
            <div
              className={`w-full justify-between ${
                showBikes ? "flex" : "hidden"
              }`}
            >
              {stages.map((row, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedselectedStage(row.id);
                  }}
                  className="bg-[#282828] h-[70px] w-[calc(100%_/_5)] grid justify-center items-center cursor-pointer duration-500 ease-in-out"
                  style={{
                    backgroundColor:
                      selectedStage === row.id ? "white" : "#282828"
                  }}
                >
                  <div>
                    <p className="text-red-500 font-semibold text-xs">
                      {row.id}
                    </p>
                    <p
                      className="font-semibold text-xs"
                      style={{
                        color: selectedStage === row.id ? "black" : "white"
                      }}
                    >
                      {row.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`h-[calc(100%_-_70px)] bg-white ${
                showBikes ? "block" : "hidden"
              }`}
            >
              {Models.map((row, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedBike(row)}
                  className="p-6 h-[calc(100%_/_4)] flex items-center justify-between hover:bg-gray-200 cursor-pointer ease-in-out duration-700"
                >
                  <div
                    className="text-right"
                    style={{
                      order: selectedBike.name === row.name ? "1" : "2",
                      textAlign:
                        selectedBike.name === row.name ? "left" : "right"
                    }}
                  >
                    <h2 className="font-semibold text-red-600">{row.name}</h2>
                    <p className="text-xs">{row.description}</p>
                  </div>
                  {/* <div className="relative -right-1/4 z-50"> */}
                  <div
                    className={`${
                      selectedBike.name === row.name
                        ? "relative -right-1/4 z-50"
                        : ""
                    }`}
                    style={{
                      order: selectedBike.name === row.name ? "2" : "1"
                    }}
                  >
                    <Image
                      src={row.imgPath}
                      alt={"Imagem da Moto"}
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${showBikes ? "w-2/3" : "w-3/3"}`}>
          <div
            className={`${
              showBikes ? "w-full" : "w-3/3"
            } h-screen grid justify-center items-center bg-gradient-radial from-[#545353] via-[#282828] to-[#282828] p-8 realtive`}
          >
            <p className="text-[#C0B2A1] font-bold text-9xl absolute top-[17%] right-[15%] z-40">
              DUCATI
            </p>
            <div className="">
              <Image
                src={selectedBike.imgPath}
                alt={"Foto da Moto"}
                width={600}
                height={600}
                className="relative z-50"
              />
            </div>
            <p className="text-[#C0B2A1] text-lg">{selectedBike.name}</p>
          </div>
          {/* </div> */}
          <div
            className={`flex gap-8 items-center justify-between text-white absolute bottom-0 w-2/3 ${
              showBikes ? "w-2/3" : "w-3/3"
            }`}
          >
            <div className="flex justify-between items-center w-full">
              <div className="flex gap-8 items-center p-8">
                <FacebookIcon />
                <InstagramIcon />
              </div>
              <div className="text-center flex items-center justify-between">
                <div className="bg-white text-[#282828] p-8">Summary</div>
                <div className="bg-red-700 text-[#fff] p-8 ">Order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
