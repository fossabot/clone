import { flatObject } from '../sets/flat-object'
import { flatArray } from '../sets/flat-array'
import { nestedObject } from '../sets/nested-object'
import { nestedArray } from '../sets/nested-array'
import { mixedArray } from '../sets/mixed-array'
import { mixedObject } from '../sets/mixed-object'
import { standartClone } from '../sets/clone'
import { fooObject } from '../sets/foo-object'
import { suite, test } from '@testdeck/mocha'
import chai from 'chai'

chai.should()

@suite
class CloneUnitTest {
  @test 'flat object'() {
    const obj = flatObject
    standartClone.it({}, obj).should.to.eql(obj)
  }

  @test 'flat array'() {
    const obj = flatArray
    standartClone.it([], obj).should.to.eql(obj)
  }

  @test 'nested object'() {
    const obj = nestedObject
    standartClone.it({}, obj).should.to.eql(obj)
  }

  @test 'nested array'() {
    const obj = nestedArray
    standartClone.it([], obj).should.to.eql(obj)
  }

  @test 'mixed object'() {
    const obj = mixedObject
    standartClone.it({}, obj).should.to.eql(obj)
  }

  @test 'mixed array'() {
    const obj = mixedArray
    standartClone.it([], obj).should.to.eql(obj)
  }

  @test instance() {
    const obj = fooObject
    standartClone.it({}, obj).should.to.eql(obj)
  }
}
