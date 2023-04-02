import React from 'react';
import { Input, Tile } from '../components';
import { BiSearch, BiHash } from 'react-icons/bi';
import { useSearchForm } from '../hooks';

const TilePanel = () => {
  const { notes, tagsInputRegister, titleInputRegister } = useSearchForm();

  return (
    <div className="tile-panel">
      <div className="tile-panel__header">
        <form className="tile-panel__search-form">
          <Input {...titleInputRegister} placeholder="Search by title" leftIcon={BiSearch} />
          <Input {...tagsInputRegister} placeholder="Search by hashtags" leftIcon={BiHash} />
        </form>
      </div>
      <div className="tile-panel__list">
        {notes?.map((note) => (
          <Tile note={note} key={`note_${note.id}`} />
        ))}
      </div>
    </div>
  );
};

export default TilePanel;
