import { FC } from "react";
import { VideoProps } from "./VideoPlayer.types";

import styled from "styled-components";

const VideoWrapper = styled.video``;

const VideoPlayer: FC<VideoProps> = ({
  src,
  resizeMode,
  width,
  height,
  aspectRatio,
}) => {
  return (
    <div>
      <VideoWrapper
        style={{ width, aspectRatio }}
        preload="auto"
        poster="/assets/poster.png"
        src={src}
        controls
      />
      <p>{src}</p>
    </div>
  );
};

VideoPlayer.defaultProps = {
  width: "100%",
  height: "100%",
};

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
