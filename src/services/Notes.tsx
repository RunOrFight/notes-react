import React, { FC, PropsWithChildren, createContext, useState } from 'react';
import { Note } from '../types';
import notesData from '../data/notes.json';

interface NotesContext {
  notes: Note[];
  getById(id: Note['id']): Note | null;
  updateById(id: Note['id'], payload: Omit<Note, 'id'>): void;
  create(payload: Note): void;
  deleteById(id: Note['id']): void;
}

//@ts-ignore
const NotesContext = createContext<NotesContext>();

const NotesContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [notes, setNotes] = useState(notesData);

  const getById = (id: Note['id']) => {
    return notes.find((note) => note.id === id) || null;
  };

  const updateById = (id: Note['id'], payload: Omit<Note, 'id'>) => {
    setNotes((prev) => {
      return prev.map((note) => (note.id === id ? { ...note, ...payload } : note));
    });
  };

  const create = (payload: Note) => {
    setNotes((prev) => {
      return [...prev, payload];
    });
  };

  const deleteById = (id: Note['id']) => {
    setNotes((prev) => {
      return prev.filter((note) => note.id !== id);
    });
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        getById,
        updateById,
        create,
        deleteById,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export default {
  Provider: NotesContextProvider,
  Context: NotesContext,
};
