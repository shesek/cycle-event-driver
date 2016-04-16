import { EventEmitter } from 'events'
import { deepEqual } from 'assert'
import Cycle from '@cycle/core'
import makeEventDriver from '../cycle-event-driver.es6'

let main = ({ test$ }) => ({ test$: test$.on('foo').map(x => [ 'bar', x*2 ]) })
  , emitter = new EventEmitter
  , values = []

emitter.on('bar', x => values.push(x))

Cycle.run(main, { test$: makeEventDriver(emitter) })

setTimeout(_ => {
  emitter.emit('foo', 1)
  emitter.emit('foo', 5)

  deepEqual(values, [ 2, 10 ])
  console.log('test passed')
}, 200)
