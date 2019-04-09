export type Color = 'main' | 'error';

export interface Theme {
  color: { [key in Color]: string };
}

const main = (): Theme => ({
  color: {
    main: '#68cb16',
    error: 'red'
  }
});

export default { main };
