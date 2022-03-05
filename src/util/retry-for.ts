import { Handler } from '..'

export function retryFor(producer: () => object): Handler {
  return (value, clone) => clone.it(producer(), value as object)
}
