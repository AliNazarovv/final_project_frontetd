fetch("http://localhost:3000/Base")
    .then(resp => resp.json())
    .then(data =>
        data.Base.forEach(element => {
            document.querySelector(".line_text").innerHTML += `<div class="l_words">
            <a href="#">${element.name}</a>
            <p></p>
            <a href="#" class="btn2">Book Now</a>
        </div>`
        })
    )
    .catch(error => {
        console.log(error);
    })