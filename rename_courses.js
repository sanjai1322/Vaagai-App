const fs = require('fs');
const path = require('path');

const dir = 'd:/Vaagai tamil APP/Vaagai-App/public/Courses 2026';
const files = fs.readdirSync(dir);

const mapping = {};

files.forEach((file, index) => {
    const ext = path.extname(file);
    const newName = `${index + 1}${ext}`;
    const oldPath = path.join(dir, file);
    const newPath = path.join(dir, newName);
    
    fs.renameSync(oldPath, newPath);
    mapping[newName] = file;
});

fs.writeFileSync('d:/Vaagai tamil APP/Vaagai-App/course_mapping.json', JSON.stringify(mapping, null, 2));
console.log('Renaming complete. Mapping saved to course_mapping.json');
