# tyger-avatar

![npm](https://img.shields.io/npm/v/tyger-avatar) ![npm type definitions](https://img.shields.io/npm/types/tyger-avatar) ![npm](https://img.shields.io/npm/dm/tyger-avatar)

> An illustrated avatar react library

[View all avatars](https://ivstudio.github.io/tyger-avatar-wiki/)

---

## Installation

```bash
npm i tyger-avatar
```

## Usage

```jsx
import { TygerAvatar } from 'tyger-avatar';

export default function App() {
  return (
    <TygerAvatar name="TrIggy" size="md"/>;
  );
}
```

or

```jsx
import { TygerAvatar } from 'tyger-avatar';
import 'tyger-avatar/lib/bundle/styles.css';

export default function App() {
  return (
    <TygerAvatar name="TrIggy" size="md" rounded/>;
  );
}
```

## Options

### Props

| Prop    | Type                                                                                                                                                                                                                       |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name\*  | `TrChelsea`, `TrEric`, `TrSamantha`, `TrTorsten`, `TrIggy`, `TrFranklin`, `TrImran`, `TrMaria`, `TrRachel`, `TrShamila`, `TrAlex`, `TrFelix`, `TrEnrique`, `TrSophia`, `TrHarry`, `TrHelen`, `TrStu`, `TrNancy`, `TrChad`, |
| size    | `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`,                                                                                                                                                                         |
| title   | string                                                                                                                                                                                                                     |
| id      | string                                                                                                                                                                                                                     |
| rounded | boolean                                                                                                                                                                                                                    |

[View all avatars](https://ivstudio.github.io/tyger-avatar-wiki/)

## License

MIT
