// let header = new Headers({
//     "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
// });

// header.append("Content-Type", "application/json")

// let request = new Request('test.json', {
//     method: "GET",
//     headers: header,
//     mode: "cors",
//     cache: "default"
// });

// fetch(request)
//     .then(response => response.body)
//     .then(rb => {
        
//     });

// const connectURL = async() => {
//     let response = await fetch("test.json");
    
//     if (response.ok) {
//         let json = await response.json();
//         // console.log(json);
//         return json;
//     }
// }

// const data = connectURL();
// data.then(console.log);








// fetch('coffee.jpg')
//     .then(response => response.blob())
//     .then(myBlob => {
//         let objectURL = URL.createObjectURL(myBlob);
//         let image = document.createElement('img');
//         image.src = objectURL;
//         document.body.appendChild(image);
//     })
//     .catch(e => {
//     console.log('There has been a problem with your fetch operation: ' + e.message);
// });



// async function myFetch() {
//     let response = await fetch("test.json");

//     if (!response.ok) {
//         throw new Error(`HTTP Error! status: ${response.status}`);
//     }

//     return response.blob();
// }

// myFetch().then(blob => {
//     let objectURL = URL.createObjectURL(blob);
//     let image = document.createElement('img');
//     image.src = objectURL;
//     document.body.appendChild(image);

// }).catch(e => {
//     console.log(`There has been a problem with your fetch operation: ${e.message}`);
// });









// function fetchAndDecode(url, type) {
//     return fetch(url).then(response => {
//         if (!response.ok) throw new Error(`HTTP ERROR! Status: ${response.status}`);

//         if (type === 'blob') {
//             return response.blob();
//         } else if (type === 'text') {
//             return response.text();
//         }
//     }).catch(e => {
//         console.log(`There has been a problem with your fetch operation for resource ${url}: ${e.message}`);
//     });
// }

// let coffe = fetchAndDecode("coffee.jpg", "blob");
// let tea = fetchAndDecode("tea.jpg", "blob");
// let description = fetchAndDecode("description.txt", "text");

// Promise.all([coffee, tea, description]).then(values => {
//     console.log(values);

//     let objectURL1 = URL.createObjectURL(values[0]);
//     let objectURL2 = URL.createObjectURL(values[1]);
//     let descText = values[2];

//     let image1 = document.createElement("img");
//     let image2 = document.createElement("img");
//     image1.src = objectURL1;
//     image2.src = objectURL2;
//     document.body.appendChild(image1);
//     document.body.appendChild(image2);

//     let para = document.createElement("p");
//     para.textContent = descText;
//     document.body.appendChild(para);
// })





// async function fetchAndDecode(url, type) {
//     let response = await fetch(url);
//     let content = null;

//     if (!response.ok) throw new Error(`HTTP Error! status: ${response.status}`);

//     if (type === "blob") {
//         content = await response.blob();
//     } else if (type === "text") {
//         content = await response.text();
//     }

//     return content;
// }

// async function displayContent() {
//     let coffee = fetchAndDecode("coffee.jpg", "blob");
//     let tea = fetchAndDecode("tea.jpg", "blob");
//     let description = fetchAndDecode("description.txt", "text");

//     let values = await Promise.all([coffee, tea, description]);

//     let objectURL1 = URL.createObjectURL(values[0]);
//     let objectURL2 = URL.createObjectURL(values[1]);
//     let descText = values[2];

//     let image1 = document.createElement("img");
//     let image2 = document.createElement("img");
//     image1.src = objectURL1;
//     image2.src = objectURL2;
//     document.body.appendChild(image1);
//     document.body.appendChild(image2);

//     let para = document.createElement("p");
//     para.textContent = descText;
//     document.body.appendChild(para);
// }

// displayContent()
//     .catch(console.log);












// async function logInOrder(urls) {
//     // fetch all the URLs in parallel
//     const textPromises = urls.map(async url => {
//         const response = await fetch(url);
//         return response.text();
//     });

//     // log them in sequence
//     for (const textPromise of textPromises) {
//         console.log(await textPromise);
//     }
// }
// // async function logInOrder(urls) {
// //     for (const url of urls) {
// //         const response = await fetch(url);
// //         console.log(await response.text());
// //     }
// // }

// logInOrder(["test.json", "test.json", "test.json", "test.json", "test.json", "test.json", "test.json", "test.json", "test.json"]);







async function loadJson(url) {
    let response = await fetch(url);
    if (!response.ok) throw new Error(response.status);
    return await response.json();
}


function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

loadJson('no-such-user.json')
    .catch(alert); // Error: 404