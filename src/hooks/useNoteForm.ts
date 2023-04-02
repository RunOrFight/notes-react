import {
  ChangeEventHandler,
  UIEventHandler,
  createRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { NotesService, PreviewPanelService } from '../services';
import { Note } from '../types';
import { useForm } from 'react-hook-form';
import { debounce, findHashtags } from '../utils';

const defaultFormValues = {
  title: '',
  body: '',
  tags: [] as string[],
};

export default function () {
  const [note, setNote] = useState<Note | null>(null);
  const [visibleId, setVisibleId] = useContext(PreviewPanelService.Context);
  const { getById, updateById, create } = useContext(NotesService.Context);
  const { register, handleSubmit, reset, setValue, watch } = useForm({
    defaultValues: defaultFormValues,
  });
  const highlightRef = createRef<HTMLDivElement>();

  useEffect(() => {
    setNote(getById(visibleId));
  }, [visibleId]);

  useEffect(() => {
    note ? reset(note) : reset(defaultFormValues);
  }, [note]);

  const tagsWatch = watch('tags');

  const hideForm = () => {
    setVisibleId('');
  };

  const onSubmit = (data: typeof defaultFormValues) => {
    note ? updateById(note.id, data) : create({ ...data, id: visibleId });
    hideForm();
  };

  const onBodyChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const value = e.target.value;
    const hashtags = findHashtags(value);
    setValue('tags', hashtags);
    setValue('body', value);
  };

  const onBodyChangeDebounced = debounce(onBodyChange, 500);

  const onBodyScroll: UIEventHandler<HTMLTextAreaElement> = (e) => {
    highlightRef?.current?.scrollTo({ top: e.currentTarget.scrollTop });
  };

  return {
    formSubmitEvent: handleSubmit(onSubmit),
    bodyInputRegister: {
      ...register('body'),
      onScroll: onBodyScroll,
      onChange: onBodyChangeDebounced,
    },
    titleInputRegister: register('title'),
    tags: tagsWatch,
    highlightRegister: {
      text: watch('body'),
      highlight: tagsWatch,
      ref: highlightRef,
    },
    hideForm,
  };
}
