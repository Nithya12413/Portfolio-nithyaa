const fs = require('fs');
const path = require('path');

function replaceInDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            replaceInDir(fullPath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            const original = content;
            content = content.replace(/primary-pink/g, 'primary-cyan');
            content = content.replace(/primary-purple/g, 'primary-blue');
            content = content.replace(/primary-lavender/g, 'primary-light');
            if (content !== original) {
                fs.writeFileSync(fullPath, content);
                console.log('Updated ' + file);
            }
        }
    }
}

replaceInDir('./src');
console.log('Done');
