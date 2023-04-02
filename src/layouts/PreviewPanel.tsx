import React from 'react';
import { Button, Highlight, Input, Tag } from '../components';
import { useNoteForm } from '../hooks';

const PreviewPanel = () => {
  const {
    formSubmitEvent,
    titleInputRegister,
    bodyInputRegister,
    hideForm,
    tags,
    highlightRegister,
  } = useNoteForm();

  return (
    <form className="perview-panel" onSubmit={formSubmitEvent}>
      <div className="perview-panel__header">
        <Input
          className="input__control clean-control"
          {...titleInputRegister}
          placeholder="Title"
        />
      </div>
      <div className="perview-panel__body">
        <div className="perview-panel__textarea-wrapper">
          <Highlight {...highlightRegister} className="perview-panel__highlight text-lg" />
          <textarea className="perview-panel__textarea text-lg" {...bodyInputRegister} />
        </div>
        <div className="perview-panel__tags">
          {tags?.map((tag) => (
            <Tag tag={tag} key={`tag_${tag}`} />
          ))}
        </div>
        <div className="perview-panel__toolbar">
          <Button type="submit">Ok</Button>
          <Button type="button" variant="outline" onClick={hideForm}>
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
};

export default PreviewPanel;
