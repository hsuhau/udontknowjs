// 担心代码是否会引入Zalgo这样的副作用.在这类问题中,一个任务有时同步完成,有时异步完成,这可能会导致竞态条件
// 根据定义,Promise就不用担心这种问题,因为即使是立即完成的Promise,也无法被觉察到
// 即使Promise已经决议,提供给then(..)的回调也总会被异步调用
