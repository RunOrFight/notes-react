import { useContext, useEffect, useState } from 'react';
import { NotesService } from '../services';
import { Note } from '../types';
import { useForm } from 'react-hook-form';
import { compareTags, compareTitles } from '../utils';

export default function () {
  const { notes } = useContext(NotesService.Context);
  const [filteredNotes, setFilteredNotes] = useState<Note[]>([]);

  const defaultValues = {
    title: '',
    tags: '',
  };

  const { register, watch } = useForm({
    defaultValues,
  });

  const titleInputWatch = watch('title');
  const tagsInputWatch = watch('tags');

  useEffect(() => {
    setFilteredNotes(
      notes.filter(
        (note) =>
          compareTags(tagsInputWatch, note.tags) && compareTitles(titleInputWatch, note.title)
      )
    );
  }, [notes, titleInputWatch, tagsInputWatch]);

  return {
    titleInputRegister: register('title'),
    tagsInputRegister: register('tags'),
    notes: filteredNotes,
  };
}
