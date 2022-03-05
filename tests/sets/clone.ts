import { Clone, instanceOf, isObject, not, retryFor } from '../../src'
import { Foo } from './foo'

export const standartClone = new Clone([
  {
    if: isObject,
    then: [
      {
        if: instanceOf(Foo),
        handler: (value) => (value as Foo).copy(),
      },
      {
        if: instanceOf(Array),
        handler: retryFor(() => []),
      },
      {
        if: instanceOf(Object),
        handler: retryFor(() => ({})),
      },
    ],
  },
  {
    if: not(isObject),
    handler: (value) => value,
  },
])
