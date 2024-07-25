import Link from "next/link";

export default function Home() {
  const items = [
    {
      icon: "fad fa-fire-alt text-red-600",
      title: "Wildfire History",
      description: "Look at the all wildfire history between 1992 and 2015",
      href: "/wildfire/history",
    },
    {
      icon: "fad fa-fire text-red-600",
      title: "Wildfire Predictions",
      description: "Predict the size of future wildfires at a given location",
      href: "/wildfire/predict",
    },
  ];

  return (
    <div className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-black">
      <div className="z-20 mb-64 flex flex-col items-center justify-center gap-4">
        <h1 className="inline-block bg-gradient-to-br from-orange-700 to-red-900 bg-clip-text font-serif text-9xl text-transparent">
          wildfires
        </h1>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="flex cursor-pointer select-none items-center justify-start gap-3 rounded-lg border border-white border-opacity-10 bg-white bg-opacity-5 p-4 transition hover:bg-opacity-10"
            >
              <i className={`${item.icon} text-4xl`} />
              <div className="flex flex-col">
                <p className="text-lg">{item.title}</p>
                <p className="text-xs text-white text-opacity-60">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-[15rem] z-10 h-screen w-screen">
        <div className="absolute left-0 top-0 h-screen w-screen bg-gradient-to-b from-black to-transparent" />
        <img
          alt="Wildfire"
          src="/backgrounds/wildfire.jpg"
          className="w-screen"
        />
      </div>
    </div>
  );
}
