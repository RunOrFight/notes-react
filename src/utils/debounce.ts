type Func<T extends object[], R> = (...args: T) => R;

export default function <T extends object[], R>(func: Func<T, R>, timeout: number): Func<T, void> {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function debouncedFunc(...args: T) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
