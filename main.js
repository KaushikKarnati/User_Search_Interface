const result = document.getElementById('results');
const filter = document.getElementById('filter');
const listItems = [];

getData();
filter.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch('https://randomuser.me/api?results=60');

  const { results } = await res.json();
  //console.log(data);

  //clearing resuts
  result.innerHTML = '';
  results.forEach((user) => {
    console.log(user);
    const li = document.createElement('li');
    listItems.push(li);
    li.innerHTML = `<img src="${user.picture.large}" alt ="${user.name.first}"
            <div class=" user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <P>${user.location.city}, ${user.location.country}</P>
            </div>
            `;

    result.appendChild(li);
  });
}

// function filterData(searchTerm) {
//     console.log(searchTerm);
//     listItems.forEach(item => {
//             if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {

//             }
//         }
//     })
// }
