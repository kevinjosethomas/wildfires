export default function Tile({
  state,
  extinguish,
}: {
  state: number;
  extinguish: () => void;
}) {
  if (state != 0) {
    console.log(state);
  }

  return (
    <div className="relative h-[171px] w-[171px]">
      {state == 1 ? (
        <img className="absolute left-0 top-0" src="/textures/fire.png" />
      ) : (
        <></>
      )}
      <img className="absolute left-0 top-0" src="/textures/grass.jpg" />
    </div>
  );
}
