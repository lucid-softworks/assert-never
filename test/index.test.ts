import { describe, expect, it } from "vitest";

import { assertNever, UnexpectedValueError } from "../src/index.js";

describe("assertNever", () => {
  it("throws an identifiable error with the unexpected value", () => {
    const unexpected = { type: "future-variant" };

    let thrown: unknown;
    try {
      assertNever(unexpected as never);
    } catch (error) {
      thrown = error;
    }

    expect(thrown).toBeInstanceOf(Error);
    expect(thrown).toBeInstanceOf(UnexpectedValueError);
    expect(thrown).toMatchObject({
      name: "UnexpectedValueError",
      message: "Unexpected value",
      value: unexpected,
    });
  });

  it("accepts a custom message", () => {
    expect(() => assertNever("new-state" as never, "Unknown state")).toThrow(
      "Unknown state",
    );
  });
});
