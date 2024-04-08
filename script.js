const inputNameForm = document.querySelector('#inputNameForm');
const output = document.querySelector('#output');

inputNameForm.addEventListener('submit', (e)=>
{
    e.preventDefault();
    const nameInput = document.getElementById('nameInput').value;
    getApi(nameInput);
    e.target.reset();

});

function getApi(inputName) 
{
    fetch(`https://www.swapi.tech/api/people/?name=${inputName}`)
    .then(res => res.json())
    .then(data =>
    {
        output.innerHTML = '';
        if(data.result && data.result.length > 0)
        {
            data.result.forEach(info =>
                {
                    output.innerHTML += `
                    Name: ${info.properties.name}
                    Height: ${info.properties.height}
                    Mass: ${info.properties.mass}
                    Gender: ${info.properties.gender}
                    Hair-Color: ${info.properties.hair_color}
                    `
                })
        }
        else
        {
          output.innerHTML = 'Name not found';
        };

    })
    .catch(err => console.log(err))
};

function showMessage(message){
    output.innerHTML += message +"<br>";
}
