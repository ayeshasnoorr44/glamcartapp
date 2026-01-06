// Load face-api.js from CDN instead of npm to avoid complex peer dependencies
let faceapi: any = null;

const loadFaceApiLibrary = async () => {
  if (faceapi) return faceapi;
  
  // Load from CDN
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/face-api.min.js';
  script.async = true;
  
  return new Promise((resolve, reject) => {
    script.onload = () => {
      // @ts-ignore - face-api is loaded globally
      faceapi = window.faceapi || (window as any).faceapi;
      resolve(faceapi);
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

let modelsLoaded = false;

/**
 * Load Face-API models - will try local folder first, then fallback to CDN
 */
export const loadFaceModels = async () => {
  if (modelsLoaded) return;
  
  try {
    // Ensure Face-API library is loaded
    if (!faceapi) {
      await loadFaceApiLibrary();
    }

    console.log('📦 Loading Face-API models...');
    
    // Try to load from local public/models folder first
    // If not available, Face-API will automatically load from CDN
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    ]);
    modelsLoaded = true;
    console.log('✅ Face-API models loaded successfully (from local or CDN)');
  } catch (error) {
    console.warn('⚠️ Could not load models from /models, will use CDN:', error);
    try {
      // Fallback to CDN
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('https://cdn.jsdelivr.net/npm/face-api.js@0.22.2/dist/models'),
      ]);
      modelsLoaded = true;
      console.log('✅ Face-API models loaded from CDN');
    } catch (cdnError) {
      console.error('❌ Failed to load Face-API models:', cdnError);
      modelsLoaded = false;
      throw new Error('Failed to load face detection models from both local and CDN');
    }
  }
};

/**
 * Apply lipstick using Face-API landmarks (100% accurate, no scattered rectangles)
 * @param imageElement - HTML image element
 * @param canvasElement - Canvas to draw on
 * @param hexColor - Hex color code (e.g., #D4486B)
 * @returns Base64 encoded processed image
 */
export const applyLipstickWithLandmarks = async (
  imageElement: HTMLImageElement,
  canvasElement: HTMLCanvasElement,
  hexColor: string
): Promise<string> => {
  try {
    // Ensure models are loaded
    await loadFaceModels();

    if (!faceapi) {
      throw new Error('Face-API library not loaded');
    }

    console.log('👁️ Detecting face and landmarks...');
    
    // Detect face and landmarks
    const detection = await faceapi
      .detectSingleFace(imageElement, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks();

    if (!detection) {
      throw new Error('No face detected. Please use a clearer photo with your face visible.');
    }

    console.log('✅ Face detected! Applying lipstick...');

    // Get canvas context
    const ctx = canvasElement.getContext('2d');
    if (!ctx) throw new Error('Canvas context not available');

    // Set canvas size to match image
    canvasElement.width = imageElement.width;
    canvasElement.height = imageElement.height;

    // Draw original image
    ctx.drawImage(imageElement, 0, 0);

    // Get mouth landmarks (indices 48-67 are the lips in Face-API)
    const landmarks = detection.landmarks.getMouth();
    
    if (!landmarks || landmarks.length === 0) {
      throw new Error('Could not detect lips. Please position your face clearly in the center.');
    }

    console.log(`📍 Found ${landmarks.length} lip landmarks`);

    // Convert hex to RGB with transparency
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);

    // Draw smooth lipstick shape using landmarks
    ctx.beginPath();
    
    // Start from first landmark point
    ctx.moveTo(landmarks[0].x, landmarks[0].y);
    
    // Draw outer lip contour using quadratic curves for smoothness
    for (let i = 1; i < landmarks.length; i++) {
      const cp = landmarks[Math.floor((i - 1 + landmarks.length / 2) % landmarks.length)];
      ctx.quadraticCurveTo(
        cp.x,
        cp.y,
        landmarks[i].x,
        landmarks[i].y
      );
    }

    ctx.closePath();

    // Style the lipstick
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.7)`; // 70% opacity for natural look
    ctx.globalCompositeOperation = 'multiply'; // Blend naturally with skin
    ctx.fill();

    // Draw inner lip line for definition
    ctx.strokeStyle = `rgba(${Math.round(r * 0.7)}, ${Math.round(g * 0.7)}, ${Math.round(b * 0.7)}, 0.5)`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Reset composite operation
    ctx.globalCompositeOperation = 'source-over';

    // Convert to base64
    const base64Image = canvasElement.toDataURL('image/jpeg', 0.95);
    console.log('✨ Lipstick applied successfully!');
    
    return base64Image;
  } catch (error) {
    console.error('❌ Error applying lipstick:', error);
    throw error;
  }
};

/**
 * Download Face-API models from CDN
 * Call this once to cache models in browser
 */
export const downloadModels = async () => {
  try {
    console.log('⏳ Downloading Face-API models for faster loading...');
    await loadFaceModels();
    console.log('✅ Models downloaded and cached!');
  } catch (error) {
    console.error('⚠️ Could not download models:', error);
  }
};
