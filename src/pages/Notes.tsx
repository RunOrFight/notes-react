import React, { useContext } from 'react';
import { PreviewPanel, Sidebar, TilePanel } from '../layouts';
import { PreviewPanelService } from '../services';

const Notes = () => {
  const [isVisible] = useContext(PreviewPanelService.Context);
  return (
    <div className="wrapper">
      <Sidebar />

      <section className="main">
        <TilePanel />
        {isVisible && <PreviewPanel />}
      </section>
    </div>
  );
};

export default Notes;
