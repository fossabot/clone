import { Clone } from '.'

export type Predicate = {
  (value: unknown): boolean
}

export type Handler<T = unknown> = {
  (value: T, ctx: Clone): T
}

export type Switcher<T = unknown> = { if: Predicate } & (
  | { handler: Handler<T> }
  | { then: Switcher<unknown>[] }
)
