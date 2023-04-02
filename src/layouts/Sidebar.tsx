import React, { useContext } from 'react';
import { BiPlus, BiSlider, BiMessageSquare } from 'react-icons/bi';
import { PreviewPanelService } from '../services';
import { v4 as uuid } from 'uuid';

const Sidebar = () => {
  const [, setVisibleId] = useContext(PreviewPanelService.Context);
  return (
    <aside className="sidebar">
      <div className="sidebar__title-wrapper">
        <h2 className="sidebar__title title-lg">Notes</h2>
      </div>
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__item" onClick={() => setVisibleId(uuid())}>
            <BiPlus />
            <span className="text-md">Add Note</span>
          </li>
          <li className="sidebar__item">
            <BiSlider />
            <span className="text-md">Settings</span>
          </li>
          <li className="sidebar__item">
            <BiMessageSquare />
            <span className="text-md">Help</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
