import React, { FC } from 'react';
import { Note } from '../types';

interface TapProps {
  tag: Note['tags'][0];
}

const Tag: FC<TapProps> = ({ tag }) => {
  return <div className="tag">{tag}</div>;
};

export default Tag;
