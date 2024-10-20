//  Question number 1

const colors = ['red','green','blue']

const [firstColor,secondColor,thirdColor] = colors;

console.log(firstColor,secondColor,thirdColor)
// Question number 2

const person = {name:'alice',age:25,city:'Wonderland'}

const {name,age,city} = person

console.log(name,age,city)

// Question number 3

const settings = {theme:'dark',language:'en'}

const {theme,language,mode='light'} = settings

console.log(theme,language,mode)