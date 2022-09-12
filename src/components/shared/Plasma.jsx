import "./Plasma.scss";

function Plasma() {
  const numberOfBubbles = 10;

  return (
    <div class="plasma">
      {[...Array(numberOfBubbles)].map((_, i) => (
        <div class={`bubble x${i + 1}`} />
      ))}
    </div>
  );
}

export default Plasma;
