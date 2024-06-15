


// const content = document.querySelectorAll('p');

// console.log(content);

// content.forEach(tag => {
//     if (tag.textContent.includes('error')) {
//         tag.classList.add('error');
//     }
//     if (tag.textContent.includes('success')) {
//         tag.classList.add('success');
//     }   
// });

// console.log(content);

// const title = document.querySelector('.title');

// title.classList.toggle('test');
// title.classList.toggle('test');


// //innerText gets visible text while textContent gets all possible text in code

// // const content = document.querySelector('p');

// // console.log(content.classList);
// // content.classList.add('error');
// // content.classList.remove('error');
// // content.classList.add('success');

// // // const title = document.querySelector('h1');

// // // //overwrites the css properties in h1 tag
// // // // title.setAttribute("style", "margin: 50px;");

// // // console.log(title.style);
// // // console.log(title.style.color);

// // // title.style.margin = '50px';
// // // title.style.color = 'crimson';
// // // title.style.fontSize = '60px';
// // // title.style.margin = '';

// // // // const link = document.querySelector('a');

// // // // console.log(link.getAttribute('href'));
// // // // link.setAttribute('href', 'https://www.thenetninja.co.uk');
// // // // link.innerText = 'The Net Ninja Website';

// // // // const msg = document.querySelector('p');

// // // // console.log(msg.getAttribute('class'));
// // // // msg.setAttribute('class', 'success');
// // // // msg.setAttribute('style', 'color: green;');

// // // // // const para = document.querySelector('p');

// // // // // // console.log(para.innerText);
// // // // // // para.innerText = 'ninjas are awesome';

// // // // // const paras = document.querySelectorAll('p');
// // // // // // paras.forEach(para => {
// // // // // //     console.log(para.innerText);
// // // // // //     para.innerText += ' new text';
// // // // // // });

// // // // // const content = document.querySelector('.content');

// // // // // // console.log(content.innerHTML);
// // // // // // content.innerHTML = '<h2>This is a new h2</h2>';

// // // // // const people = ["mario", "yoshi", "luigi"];

// // // // // people.forEach(person => {
// // // // //     content.innerHTML += `<p>${person}</p>`;
// // // // // });


// // // // // // const paras = document.getElementsByTagName('p');
// // // // // // console.log(paras);

// // // // // // // const title = document.getElementById("page-title");
// // // // // // // console.log(title);

// // // // // // // const errors = document.getElementsByClassName('error');
// // // // // // // console.log(errors);
// // // // // // // //can't use forEach loop on HTML collection

// // // // // // // // const paras = document.querySelectorAll('p');
// // // // // // // // const errors = document.querySelectorAll('.error');

// // // // // // // // console.log(errors);

// // // // // // // // const para = document.querySelector('body > h1');

// // // // // // // // console.log(para);

// // // // // // // // let user = {
// // // // // // // //     name: 'crystal',
// // // // // // // //     age: 30,
// // // // // // // //     email: 'crystal@gmail.com',
// // // // // // // //     location: 'berlin',
// // // // // // // //     blogs: [
// // // // // // // //         { title: 'why mac & cheese', likes: 30 },
// // // // // // // //         { title: 'wh', likes: 2 }
// // // // // // // //     ],
// // // // // // // //     login() {
// // // // // // // //         console.log('the user logged in.');
// // // // // // // //     },
// // // // // // // //     logout() {
// // // // // // // //         console.log('the user logged out.');
// // // // // // // //     },
// // // // // // // //     logBlogs() {
// // // // // // // //         console.log('this user has written the following blogs: ');
// // // // // // // //         this.blogs.forEach(blog => {
// // // // // // // //             console.log(blog.title, blog.likes);
// // // // // // // //         })
// // // // // // // //     }
// // // // // // // // };

// // // // // // // // user.login();
// // // // // // // // user.logBlogs();



// // // // // // // // const names = ['hi', 'bye'];
// // // // // // // // for(let num = 0; num < names.length; num++) {
// // // // // // // //     let html = `<div>${names[num]}</div>`;
// // // // // // // //     console.log(html);
// // // // // // // // }

// // // // // // // // let i = 5;
// // // // // // // // do {
// // // // // // // //     console.log('val of i is: ', i);
// // // // // // // //     i++;
// // // // // // // // }
// // // // // // // // while (i < 5);


// // // // // // // // const calcArea = radius => 3.14 * radius ** 2;

// // // // // // // // const area = calcArea(5);
// // // // // // // // console.log('area is: ', area);

// // // // // // // // const myFunc = (callbackFunc) => {
// // // // // // // //     let value = 50;
// // // // // // // //     callbackFunc(value);
// // // // // // // // };

// // // // // // // // myFunc(value => {
// // // // // // // //     console.log(value);
// // // // // // // // });

// // // // // // // // const ul = document.querySelector('.people');

// // // // // // // // const people = ['bob', 'luigi', 'ryu'];

// // // // // // // // let html = ``;

// // // // // // // // people.forEach(person => {
// // // // // // // //     html += `<li style="color: purple">${person}</li>`;
// // // // // // // // });

// // // // // // // // console.log(html);
// // // // // // // // ul.innerHTML = html;
// // // // // // // // // let people = ['bob', 'knox', 'greg'];

// // // // // // // // // const logPerson = (person, index) => {
// // // // // // // // //     console.log(`${index} - hello ${person}`);
// // // // // // // // // };

// // // // // // // // // people.forEach(logPerson);

// // // // // // // // // let radius = 10;
// // // // // // // // // const pi = 3.14;
// // // // // // // // // const author = 'Kailey';

// // // // // // // // // console.log(radius, pi);

// // // // // // // // // let result = `The lovergirl ${author} has many fans.`;
// // // // // // // // // console.log(result);

// // // // // // // // // let html = `
// // // // // // // // //     <h2>${author}</h2>
// // // // // // // // //     <p>A lot</p>
// // // // // // // // //     <span>Hello</span>
// // // // // // // // // `;

// // // // // // // // // console.log(html);

// // // // // // // // // let ninjas = ['shawn', 'ryu', 'chun-li'];
// // // // // // // // // console.log(ninjas);

// // // // // // // // // let product = ninjas.join(' ');
// // // // // // // // // product = ninjas.indexOf('chun-li');
// // // // // // // // // //destructive method
// // // // // // // // // product = ninjas.push('ken');
// // // // // // // // // product = ninjas.pop();

// // // // // // // // // console.log(product);

// // // // // // // // // let email = 'luigi@netninja.org';
// // // // // // // // // let job = email.includes('l');

// // // // // // // // // console.log(job);

// // // // // // // // // console.log(pi === 3.14);
// // // // // // // // // console.log(pi == '3.14');

// // // // // // // // // let score = '100';
// // // // // // // // // score = Number('hello');
// // // // // // // // // console.log(score);
