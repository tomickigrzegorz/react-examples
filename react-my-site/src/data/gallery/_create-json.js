// example array
// [
//     {
//         "id": 1,
//         "path": "images/gallery/1000/agnieszka-i-andrzej-plener/IMG_6479.jpg"
//     },
//     {
//         "id": 2,
//         "path": "images/gallery/1000/agnieszka-i-andrzej-plener/IMG_640.jpg"
//     },
// ]


const fs = require("fs");

const nameGallery = "monika-i-pawel-slub";
const name = nameGallery;

const test = [];

fs.readdir(`../../../build/images/gallery/1000/${nameGallery}/`, function (err, files) {
if (err)
    throw err;
for (let index in files) {
let path = `
    {
        "id": ${index},
        "img": "${files[index]}"
    }`;
    test.push(path);
}

const template = (`[ ${test} 
]`);

    fs.writeFile(`./${name}.json`, template, function (err) { });
});