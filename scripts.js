const app = document.getElementById('root');




const container = document.createElement('div');
container.setAttribute('class', 'container');


app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/people', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(people => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = people.name;

      const p = document.createElement('p');
      people.gender = people.gender.substring(0, 300);
      p.textContent = `${people.gender}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    app.appendChild(errorMessage);
  }
}

request.send();