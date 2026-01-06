#!/usr/bin/env node
/**
 * Download Face-API.js models from CDN
 * These will be served from public/models
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, '../public/models');

// Create models directory if it doesn't exist
if (!fs.existsSync(modelsDir)) {
  fs.mkdirSync(modelsDir, { recursive: true });
  console.log('📁 Created public/models directory');
}

const models = [
  'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/models/tiny_face_detector_model-weights_manifest.json',
  'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/models/tiny_face_detector_model.weights.bin',
  'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/models/face_landmark_68_model-weights_manifest.json',
  'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/models/face_landmark_68_model.weights.bin',
];

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const filename = path.basename(url);
    const file = fs.createWriteStream(dest);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {}); // Delete file if error
      reject(err);
    });
  });
};

const downloadAll = async () => {
  try {
    console.log('📥 Starting model downloads...\n');
    for (const url of models) {
      const filename = path.basename(url);
      const dest = path.join(modelsDir, filename);
      
      if (fs.existsSync(dest)) {
        console.log(`⏭️  Skipping (exists): ${filename}`);
        continue;
      }

      await downloadFile(url, dest);
    }
    console.log('\n✨ All models downloaded successfully!');
  } catch (error) {
    console.error('❌ Error downloading models:', error.message);
    process.exit(1);
  }
};

downloadAll();
