console.log("As A, let's DO THIS!")

function greetUser (name,grade) {
    return `AS A, I greet you ${name}. Do your ${grade}'s exam very good! All the, as a, best!`
}

let asAName = prompt(`As a, Name?`)
let asAGrade = prompt(`As a, you study in?`)
console.log(greetUser(asAName,asAGrade))
document.write(greetUser(asAName,asAGrade))