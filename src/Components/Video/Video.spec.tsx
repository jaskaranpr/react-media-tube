import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';

import Video from './Video';


describe('<Video />', () => {
  it('Video should render passed label correctly', () => {
    let videoLabel: RenderResult;
    videoLabel = render(<Video onClick={() => {}} title="Video Label" />);
    expect(videoLabel.getAllByTitle('Video Label')[0]).toBeInTheDocument();
  });
});
