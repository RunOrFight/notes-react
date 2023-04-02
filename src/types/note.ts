export interface Note {
  readonly id: string;
  title: string;
  body: string;
  readonly tags: string[];
}
