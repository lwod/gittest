
const methods = require('../src/methods')

test('test sum', ()=>{
	expect(methods.sum(1,3)).toBe(4)
})