
function fetchData(lectures) {

    fetch('./lectures.json')
        .then(res => res.json()) 
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err));
}

