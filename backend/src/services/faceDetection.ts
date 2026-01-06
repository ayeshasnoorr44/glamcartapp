import sharp from 'sharp';
import { createCanvas, loadImage } from 'canvas';

/**
 * Detect lips region in an image and apply lipstick color
 * Uses approximate lip detection based on image processing
 */
export const detectAndApplyLipstick = async (
  imageBuffer: Buffer,
  colorHex: string
): Promise<Buffer> => {
  try {
    console.log(`🎨 Starting professional lipstick detection with ${colorHex}`);

    // Get image metadata
    const metadata = await sharp(imageBuffer).metadata();
    if (!metadata.width || !metadata.height) {
      throw new Error('Invalid image dimensions');
    }

    const width = metadata.width;
    const height = metadata.height;
    console.log(`📐 Image: ${width}x${height}`);

    // Load image with canvas for pixel manipulation
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Convert buffer to data URL for canvas
    const pngData = await sharp(imageBuffer).png().toBuffer();
    const base64 = pngData.toString('base64');
    const img = await loadImage(`data:image/png;base64,${base64}`);

    ctx.drawImage(img as any, 0, 0);

    // Get image data for processing
    const imageData = ctx.getImageData(0, 0, width, height);
    const data = imageData.data;

    // Convert hex to RGB
    const r = parseInt(colorHex.slice(1, 3), 16);
    const g = parseInt(colorHex.slice(3, 5), 16);
    const b = parseInt(colorHex.slice(5, 7), 16);
    console.log(`🎨 Color RGB: (${r}, ${g}, ${b})`);

    // **Professional Lip Detection Algorithm**
    // Lips typically have:
    // - Higher red channel
    // - Lower green channel
    // - Medium-low blue channel
    // - Located in lower center of face

    const lipPixels = new Uint8ClampedArray(imageData.data.length);
    let lipPixelCount = 0;

    for (let i = 0; i < data.length; i += 4) {
      const pixelR = data[i];
      const pixelG = data[i + 1];
      const pixelB = data[i + 2];
      const pixelA = data[i + 3];

      const pixelIndex = i / 4;
      const pixelY = Math.floor(pixelIndex / width);
      const pixelX = pixelIndex % width;

      // Lip detection heuristics:
      // 1. Red dominant (R > G and R > B)
      // 2. Located in lower-middle area (y > height * 0.5)
      // 3. Not too saturated (avoid extreme colors)
      const isRedDominant = pixelR > pixelG + 20 && pixelR > pixelB + 10;
      const isLowerArea = pixelY > height * 0.5 && pixelY < height * 0.85;
      const isCenterArea = pixelX > width * 0.2 && pixelX < width * 0.8;
      const isNotExtreme = pixelR < 255; // Avoid pure white/black

      if (isRedDominant && isLowerArea && isCenterArea && isNotExtreme) {
        // This pixel likely contains lip color
        // Blend the new color with the original
        const blendFactor = 0.6; // 60% new color, 40% original

        lipPixels[i] = Math.round(pixelR * (1 - blendFactor) + r * blendFactor);
        lipPixels[i + 1] = Math.round(pixelG * (1 - blendFactor) + g * blendFactor);
        lipPixels[i + 2] = Math.round(pixelB * (1 - blendFactor) + b * blendFactor);
        lipPixels[i + 3] = pixelA; // Keep original alpha

        lipPixelCount++;
      } else {
        // Keep original pixel
        lipPixels[i] = pixelR;
        lipPixels[i + 1] = pixelG;
        lipPixels[i + 2] = pixelB;
        lipPixels[i + 3] = pixelA;
      }
    }

    console.log(`👄 Detected ${lipPixelCount} lip pixels`);

    if (lipPixelCount === 0) {
      console.warn('⚠️ No lips detected, using fallback method');
      return applyLipstickFallback(imageBuffer, colorHex, width, height);
    }

    // Put modified image data back
    imageData.data.set(lipPixels);
    ctx.putImageData(imageData, 0, 0);

    // Convert canvas back to buffer
    const resultBuffer = canvas.toBuffer('image/png');
    console.log(`✅ Lipstick applied successfully to ${lipPixelCount} pixels`);

    return resultBuffer;
  } catch (error) {
    console.error('❌ Error in lip detection:', error);
    throw error;
  }
};

/**
 * Fallback method: Apply color to estimated lip region
 */
const applyLipstickFallback = async (
  imageBuffer: Buffer,
  colorHex: string,
  width: number,
  height: number
): Promise<Buffer> => {
  console.log('📍 Using fallback lip region estimate');

  // Estimate lip region in center-lower area
  const lipCenterX = width / 2;
  const lipCenterY = (height * 2) / 3;
  const lipWidth = width * 0.2;
  const lipHeight = height * 0.08;

  const svgMask = `<svg width="${width}" height="${height}">
    <defs>
      <radialGradient id="lipGradient" cx="50%" cy="50%">
        <stop offset="0%" style="stop-color:white;stop-opacity:1" />
        <stop offset="100%" style="stop-color:white;stop-opacity:0.3" />
      </radialGradient>
      <mask id="lipMask">
        <rect width="${width}" height="${height}" fill="black"/>
        <ellipse cx="${lipCenterX}" cy="${lipCenterY}" rx="${lipWidth}" ry="${lipHeight}" fill="url(#lipGradient)"/>
      </mask>
    </defs>
    <rect width="${width}" height="${height}" fill="${colorHex}" mask="url(#lipMask)" opacity="0.75"/>
  </svg>`;

  const result = await sharp(imageBuffer)
    .composite([
      {
        input: Buffer.from(svgMask),
        blend: 'screen',
      },
    ])
    .png()
    .toBuffer();

  return result;
};
