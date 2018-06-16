class Person {
	constructor(name, friends) {
		this.name = name
		this.friends = friends ? friends : []
	}

	friendsOfFriends(people) {
		let result = []

		// ตรงนี้โปรเจคจริงน่าจะต้องเป็น asynchronous แล้วใช้ Promise.all มาจัดการ เพื่อเพิ่มประสิทธิภาพ
		this.friends.map(friend => {
			console.log(`-- This friend is '${friend}'`)

			let newFriends = people[friend].getFriends()
			console.log(`-- Friends of ${friend} are '${newFriends}'`)

			newFriends = this.findNewFriends([this.name, ...this.friends], newFriends)
			console.log(`-- My new friends are '${newFriends}'`)

			this.addNewFriends(result, newFriends)
		})

		result.sort()
		console.log(`My friends of friends are '${result}'\n`)

		return result
	}

	findNewFriends(oldFriends, newFriends) {
		return newFriends.filter(friend => oldFriends.indexOf(friend) === -1)
	}

	addNewFriends(friends, newFriends) {
		newFriends.map(friend => {
			if (friends.indexOf(friend) === -1) friends.push(friend)
		})

		return friends
	}

	getName() {
		console.log(`My name is '${this.name}'`)
		return this.name
	}

	getFriends() {
		return this.friends
	}
}

module.exports = Person

// RUN

// const people = ['A', 'B', 'C', 'D']
// const A = new Person('A', ['B', 'D']),
// 	B = new Person('B', ['A', 'C', 'D']),
// 	C = new Person('C', ['B']),
// 	D = new Person('D', ['A', 'B'])

// people.map(person => {
// 	eval(person).getName()
// 	eval(person).friendsOfFriends()
// })
