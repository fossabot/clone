import { isRecord, Switcher } from '.'

export class Clone {
  private switchers: readonly Switcher[]

  public constructor(switchers: readonly Switcher[]) {
    this.switchers = switchers
  }

  private find = (value: unknown, switchers: readonly Switcher[]): unknown => {
    const switcher = switchers.find((switcher) => switcher.if(value))

    if (!switcher)
      throw new Error(`${value}: the value does not satisfy any condition`)

    if ('then' in switcher) {
      return this.find(value, switcher.then)
    } else {
      return switcher.handler(value, this)
    }
  }

  public it = (target: object, source: object) => {
    if (isRecord(target) && isRecord(source)) {
      const entries = Object.entries(source)
      for (const [key, value] of entries) {
        target[key] = this.find(value, this.switchers)
      }
      return target
    }
    throw new Error(
      `Invalid value for copying: target > ${target}, source > ${source}`,
    )
  }
}
