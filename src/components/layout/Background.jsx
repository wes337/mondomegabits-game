import "./Background.scss";

function Background() {
  return (
    <div class="background">
      <video
        class="backdrop"
        autoplay="true"
        loop="true"
        playsinline="true"
        muted
        tabIndex={-1}
      >
        <source src="https://cdn2.mondomegabits.com/videos/web/backdrop-purp.mp4" />
      </video>
      <video
        class="logo"
        autoplay="true"
        loop="true"
        playsinline="true"
        muted
        tabIndex={-1}
      >
        <source src="https://cdn2.mondomegabits.com/videos/web/logo-purplegreen.mp4" />
      </video>
    </div>
  );
}

export default Background;
