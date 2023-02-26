import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';

import VideoPlayer from './VideoPlayer';


describe('<Video />', () => {
  it('Video should render passed label correctly', () => {
    let videoLabel: RenderResult;
    videoLabel = render(<VideoPlayer
      width={500}
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      aspectRatio={16 / 9}
      testId="video-comp"
    />);
    expect(videoLabel.getByTestId("video-comp")).toBeDefined()
  });
});
