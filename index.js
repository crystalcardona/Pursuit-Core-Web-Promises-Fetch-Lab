document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector("button");
    button.addEventListener("click", () =>{
        fetch("https://cors-anywhere.herokuapp.com/https://official-joke-api.appspot.com/random_ten/").then(res => {
            if(!res.ok){
                throw Error(res.statusText)
            }
            return res.json()
        }).then(joke => {
            let ul = document.createElement("ul")
            ul.id =  "Question"
            joke.forEach(joke => {
                let li = document.createElement("li")
                li.innerText = joke.setup
                ul.appendChild(li)
            })
            document.body.appendChild(ul)

        }).catch(err => {
        })
        ul.addEventListener("click", joke => {
            let punch = document.createElement(li)
            let answer = joke.punchline
            let selected = answer.target
            punch.innerText = selected

        })
    })
})

