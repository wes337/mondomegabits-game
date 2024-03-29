import "./Background.scss";

function Background() {
  return (
    <>
      <div class="background">
        <video
          class="backdrop"
          autoplay="true"
          loop="true"
          playsinline="true"
          muted
          tabIndex={-1}
        >
          <source src="./videos/backdrop-purp.mp4" />
        </video>
        <video
          class="logo"
          autoplay="true"
          loop="true"
          playsinline="true"
          muted
          tabIndex={-1}
        >
          <source src="./videos/logo-purplegreen.mp4" />
        </video>
      </div>
      <div class="copyright">
        &copy; 2023 Homosexual Male CoupleKissing and Touching NFT Co.
      </div>
    </>
  );
}

export default Background;
