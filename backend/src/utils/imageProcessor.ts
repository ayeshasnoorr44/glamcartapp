import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';
import { detectAndApplyLipstick } from '../services/faceDetection.js';

export const processLipstickOverlay = async (
  imageBuffer: Buffer,
  colorHex: string
): Promise<Buffer> => {
  try {
    console.log(`🎨 Processing lipstick with professional face detection`);
    
    // Use the new professional face detection
    const result = await detectAndApplyLipstick(imageBuffer, colorHex);
    
    console.log(`✅ Lipstick processing complete`);
    return result;
  } catch (error) {
    console.error('❌ Error processing lipstick overlay:', error);
    throw error;
  }
};

export const validateImage = async (buffer: Buffer): Promise<boolean> => {
  try {
    const metadata = await sharp(buffer).metadata();
    return !!metadata.width && !!metadata.height;
  } catch {
    return false;
  }
};

export const resizeImage = async (
  buffer: Buffer,
  width: number = 800,
  height: number = 800
): Promise<Buffer> => {
  return sharp(buffer).resize(width, height, { fit: 'inside' }).png().toBuffer();
};
