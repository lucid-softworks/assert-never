export class UnexpectedValueError extends Error {
  public override readonly name = "UnexpectedValueError";
  public readonly value: unknown;

  public constructor(value: never, message = "Unexpected value") {
    super(message);
    this.value = value;
  }
}

/**
 * Marks an unreachable branch and throws if it is reached at runtime.
 */
export function assertNever(value: never, message?: string): never {
  throw new UnexpectedValueError(value, message);
}
