//file system

const fs = require('fs');
const path = require('path');

module.exports = {
    validatePath: function(mdFile) {
  const pathExtension = path.extname(mdFile);
  if (pathExtension == '.md') {
    console.log('Es un archivo .md');
    return true;
  } else {
    console.log('Tu archivo no es .md');
    return false;
  }
},
absolutePath: function(pathRoute) {
  const absolute = path.resolve(pathRoute);
    return absolute;
},
readingFile: function(mdFile){
    return new Promise((resolve, reject) =>{
        fs.readFile(mdFile, "utf-8", (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve(data);
            }
    });

  });
},

fileExist: function(mdFile){
    console.log(fileExist, mdFile);
    return new Promise((resolve, reject)=>{
        fs.existsSync(mdFile, function(exists){
            if (exists){
                console.log("the file exists");
                resolve(true);
            } else{
                console.log("the file does not exist");
                reject (false);
            }
        })
    }) 
},

}

/*module.exports = {
    pathTrue: function (pathFile){
        if (pathFile!=undefined){
            console.log('Ingresaste una ruta de archivo');
            return true;
        } else{
            console.log('Ingresa una ruta');
            return false;
        }
    },
    //the file exists
    existFile: function (pathFile){
        return new Promise((resolve, reject)=>{
            fs.existsSync(pathFile, function(exists){
                if(exists){
                    console.log('The file exists');
                    resolve(true);
                } else{
                    console.log('the file does not exist');
                    resolve(false);
                }
            });
        })
    },
}*/
