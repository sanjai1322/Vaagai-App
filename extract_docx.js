const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const coursesDir = 'd:/Vaagai tamil APP/Vaagai-App/public/Courses 2026';
const tmpDir = 'd:/Vaagai tamil APP/Vaagai-App/tmp_extract';

if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

const files = fs.readdirSync(coursesDir).filter(f => f.endsWith('.docx'));

const results = {};

files.forEach(file => {
    const filePath = path.join(coursesDir, file);
    const fileTmpDir = path.join(tmpDir, file.replace(/\s/g, '_').replace(/[^\w]/g, ''));
    if (!fs.existsSync(fileTmpDir)) fs.mkdirSync(fileTmpDir, { recursive: true });
    
    try {
        console.log(`Extracting ${file}...`);
        // Use tar for cross-platform unzipping since .docx is a zip
        execSync(`tar -xf "${filePath}" -C "${fileTmpDir}"`);
        const xmlPath = path.join(fileTmpDir, 'word/document.xml');
        if (fs.existsSync(xmlPath)) {
            const xml = fs.readFileSync(xmlPath, 'utf8');
            const matches = xml.match(/<w:t[^>]*>(.*?)<\/w:t>/g);
            if (matches) {
                const text = matches.map(t => {
                    return t.replace(/<[^>]+>/g, '')
                            .replace(/&amp;/g, '&')
                            .replace(/&lt;/g, '<')
                            .replace(/&gt;/g, '>')
                            .replace(/&quot;/g, '"')
                            .replace(/&apos;/g, "'");
                });
                results[file] = text.join(' ');
            }
        }
    } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
    }
});

fs.writeFileSync('d:/Vaagai tamil APP/Vaagai-App/courses_extracted.json', JSON.stringify(results, null, 2));
console.log('Extraction complete. Results saved to courses_extracted.json');
