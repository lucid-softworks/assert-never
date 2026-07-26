# `@lucid-softworks/assert-never`

Make discriminated-union switches exhaustive and retain the unexpected runtime
value when old code receives a new variant.

```ts
import { assertNever } from "@lucid-softworks/assert-never";

type State = { type: "idle" } | { type: "ready"; value: string };

function label(state: State): string {
  switch (state.type) {
    case "idle":
      return "Idle";
    case "ready":
      return state.value;
    default:
      return assertNever(state);
  }
}
```

Failures throw `UnexpectedValueError`, whose `value` property contains the
unexpected input.
