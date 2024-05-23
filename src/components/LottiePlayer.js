import { Player } from "@lottiefiles/react-lottie-player";

function LottiePlayer({ src }) {
  return (
    <Player
      src="https://assets1.lottiefiles.com/packages/lf20_myejiggj.json"
      className="player"
      loop
      autoplay
      style={{ width: "500px", height: "500px" }}
    />
  );
}

export default LottiePlayer;
