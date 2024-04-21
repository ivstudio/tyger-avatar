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

You can use path imports to avoid pulling in unused avatars.

```jsx
// 🐌 Named
import { TygerAvatar } from 'tyger-avatar';

export default function App() {
  return (
    <TygerAvatar name="TrIggy" />;
  );
}
```

```js
// 🚀 Default
import TygerAvatar from 'tyger-avatar/lib/TrIggy';

export default function App() {
  return (
    <TygerAvatar name="TrIggy" />;
  );
}
```

## Options

### Props

| Prop   | Type                                                                                                                                                                                                                       |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name\* | `TrChelsea`, `TrEric`, `TrSamantha`, `TrTorsten`, `TrIggy`, `TrFranklin`, `TrImran`, `TrMaria`, `TrRachel`, `TrShamila`, `TrAlex`, `TrFelix`, `TrEnrique`, `TrSophia`, `TrHarry`, `TrHelen`, `TrStu`, `TrNancy`, `TrChad`, |
| size   | `xxsm`, `xsm`, `sm`, `md`, `lg`, `xlg`, `xxlg`, `xxxlg`,                                                                                                                                                                   |
| title  | string                                                                                                                                                                                                                     |
| id     | string                                                                                                                                                                                                                     |

[View all avatars](https://ivstudio.github.io/tyger-avatar-wiki/)

## License

MIT
