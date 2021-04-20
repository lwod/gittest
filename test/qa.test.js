const methods = require('../project/src/methods')

test('add method', ()=>{
	expect(methods.sum(1,3)).toBe(4)
})