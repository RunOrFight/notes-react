import React, { FC, MouseEventHandler, useContext, useState } from 'react';
import { Note } from '../types';
import { NotesService, PreviewPanelService } from '../services';
import { BiTrash } from 'react-icons/bi';
import Tag from './Tag';
import Highlight from './Highlight';

interface TileProps {
  note: Note;
}

const Tile: FC<TileProps> = ({ note }) => {
  const [visibleId, setVisibleId] = useContext(PreviewPanelService.Context);
  const { deleteById } = useContext(NotesService.Context);

  const [isTrashIconVisible, setIsTrashIconVisible] = useState(false);

  const onTrashIconClick: MouseEventHandler<SVGElement> = (e) => {
    e.stopPropagation();
    visibleId === note.id && setVisibleId('');
    deleteById(note.id);
  };

  return (
    <article
      className="tile"
      onMouseMove={() => setIsTrashIconVisible(true)}
      onMouseOut={() => setIsTrashIconVisible(false)}
      onClick={() => setVisibleId(note.id)}
    >
      <div className="tile__title-wrapper">
        <h2 className="tile__title title-lg">{note.title}</h2>
        {isTrashIconVisible && <BiTrash onClick={onTrashIconClick} />}
      </div>
      <Highlight text={note.body} highlight={note.tags} className="tile__body text-md" />
      <div className="tile__tags">
        {note.tags.map((tag) => (
          <Tag key={`tile_tag_${tag}`} tag={tag} />
        ))}
      </div>
    </article>
  );
};

export default Tile;
