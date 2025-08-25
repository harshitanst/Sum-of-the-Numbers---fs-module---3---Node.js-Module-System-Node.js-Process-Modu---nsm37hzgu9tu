const fs = require('fs');
const path = require('path');

const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, "output.txt");

try {
    const data = fs.readFileSync(inputFilePath, 'utf-8');
    const lines = data.trim().split("\n");
    let total = 0;
    lines.forEach(line => {
        const parts = line.split(" ");
        const number = Number(parts[1]);
        total += number;
    });

    fs.writeFileSync(outputFilePath, total.toString(), 'utf-8');
    console.log('output aagya');
} catch (err) {
    console.log('error aagya');
}


