const fs = require('fs');
const path = require('path');
const inputFilePath= path.join(__dirname,'input.txt');
const outputFilePath = path.join(__dirname, "output.txt");
fs.readFileSync(inputFilePath,'utf-8',(err,data)=>{
    if(err){
        console.log('error aagya')
        return;
    }
    const lines = data.trim().split("\n");
    let total = 0;
    lines.forEach(line=>{
        const parts = line.split(" ");
        const number= Number(parts[1])
        total+=number
    });
    fs.writeFileSync(outputFilePath,total.toString(),'utf-8',(err)=>{
        if(err){
            console.log('eeror aaya')
            return ;
        }
        console.log('ouput aagyaa');
    })
})

