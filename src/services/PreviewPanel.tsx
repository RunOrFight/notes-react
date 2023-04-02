import React, { Dispatch, FC, PropsWithChildren, createContext, useState } from 'react';
import { Note } from '../types';

const PreviewPanelContext =
  //@ts-ignore
  createContext<[Note['id'], Dispatch<Note['id']>]>();

const PreviewPanelContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [visibleId, setVisibleId] = useState<string>('');

  return (
    <PreviewPanelContext.Provider value={[visibleId, setVisibleId]}>
      {children}
    </PreviewPanelContext.Provider>
  );
};

export default {
  Context: PreviewPanelContext,
  Provider: PreviewPanelContextProvider,
};
