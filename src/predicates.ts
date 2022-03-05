import { Predicate } from '.'

export function createdBy<T extends new (...args: any[]) => any>(
  constructor: T,
): Predicate {
  return (value): value is T => (value as object).constructor === constructor
}

export function instanceOf<T extends new (...args: any[]) => any>(
  type: T,
): Predicate {
  return function (value: unknown): value is T {
    return value instanceof type
  }
}

export function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return isObject(value)
}
