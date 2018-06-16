const expect = require('chai').expect
const Person = require('./example')

describe('Test Class Person', () => {
	let A, B, C, D, people

	before(() => {
		A = new Person('A', ['B', 'D'])
		B = new Person('B', ['A', 'C', 'D'])
		C = new Person('C', ['B'])
		D = new Person('D', ['A', 'B'])
		people = { A, B, C, D }
	})

	it('should be C is friend of friend of A', () => {
		const friendsOfFriends = A.friendsOfFriends(people)
		expect(friendsOfFriends).to.deep.equal(['C'])
	})

	it('should be B has not friend of friend', () => {
		const friendsOfFriends = B.friendsOfFriends(people)
		expect(friendsOfFriends).to.deep.equal([])
	})

	it('should be A and D are friends of friends of C', () => {
		const friendsOfFriends = C.friendsOfFriends(people)
		expect(friendsOfFriends).to.deep.equal(['A', 'D'])
	})

	it('should be C is friend of friend of D', () => {
		const friendsOfFriends = D.friendsOfFriends(people)
		expect(friendsOfFriends).to.deep.equal(['C'])
	})
})
