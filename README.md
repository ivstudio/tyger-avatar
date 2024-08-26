# tyger-avatar

![npm](https://img.shields.io/npm/v/tyger-avatar) ![npm type definitions](https://img.shields.io/npm/types/tyger-avatar) ![npm](https://img.shields.io/npm/dm/tyger-avatar) ![tests](https://img.shields.io/badge/tests-passing-brightgreen)

> An illustrated avatar react library

Tyger-avatar offers a unique collection of avatar illustrations for React. These avatars are SVG-based and provide a wide range of customization options.

-   [Tyger-Avatar Storybook](https://main--662d180db0870d8238437262.chromatic.com/)

---

## Installation

```bash
npm i tyger-avatar
```

## Usage

```jsx
import { TygerAvatar } from 'tyger-avatar';

<TygerAvatar name="TrIggy" size="md" />;
```

or

```jsx
import { TygerAvatar } from 'tyger-avatar';
import 'tyger-avatar/lib/bundle/styles.css';

<TygerAvatar name="TrIggy" size="2xl" rounded />;
```

## Options

| Prop    | Type                                                                                                                                                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| name    | `TrChelsea`, `TrEric`, `TrSamantha`, `TrTorsten`, `TrIggy`, `TrFranklin`, `TrImran`, `TrMaria`, `TrRachel`, `TrShamila`, `TrAlex`, `TrFelix`, `TrEnrique`, `TrSophia`, `TrHarry`, `TrHelen`, `TrStu`, `TrNancy`, `TrChad` |
| size    | `2xs`, `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`                                                                                                                                                                         |
| title   | string                                                                                                                                                                                                                    |
| id      | string                                                                                                                                                                                                                    |
| rounded | boolean                                                                                                                                                                                                                   |

-   [Storybook](https://main--662d180db0870d8238437262.chromatic.com/)

## License

MIT
