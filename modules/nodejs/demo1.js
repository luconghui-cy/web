const path = require('path');
const fs = require('fs');

let root = 'C:\\Users\\Public\\Desktop';
let content = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <title>首页</title>
  </head>
  <body>
  <div>
      <p><a href="html/htmlHome.html">HTML</a></p>
  </div>
  </body>
  </html>
`;
let obj = {
  projectName : 'demo',
  data : [
    { name : 'css', type : 'dir', data :[
      { name : 'index.css', type : 'file'},
      { name : 'phoneStyle', type : 'dir', data : [
        { name : 'phone.css', type : 'file'}
      ]}
    ]},
    { name : 'js', type : 'dir', data :[
      { name : 'footer.js', type : 'file'}
    ]},
    { name : 'images', type : 'dir'},
    { name : 'index.html', type : 'file'},
    { name : 'main.js', type : 'file'}
  ]
}

fs.exists(path.join(root, obj.projectName), (exists) => {
  if (exists) {
    console.log(path.join(root, obj.projectName) + '目录已经存在');
  } else {
    fs.mkdir(path.join(root, obj.projectName), (err) => {
      if (err) {
        console.log('create project DIR failed!!!!!!');
      } else {
        //创建子目录以及文件
        createDirFiles(path.join(root, obj.projectName),obj.data);
      }
    });
  }
});

function createDirFiles(dirname,data){
  data.forEach(e => {
    if (e.type === 'dir') {
      fs.mkdir(path.join(dirname, e.name), (err) => {
        if (err) {
          console.log('create children`s dir failed!!!');
        } else {
          console.log('dir created success !!!');
          if (e.data) {
            createDirFiles(path.join(dirname, e.name),e.data);
          }
        }
      });
    } else if (e.type === 'file') {
      fs.writeFile(path.join(dirname, e.name), content, (err) => {
        if (!err) {
          console.log('File saved success !!!');
        }
      });
    }
  });
}