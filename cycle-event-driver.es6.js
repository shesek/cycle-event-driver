import Rx from 'rx'

module.exports = emitter => out$ => (
  out$.subscribe(ev => emitter.emit(...ev)),
  { on: name => Rx.Observable.fromEvent(emitter, name) }
)
