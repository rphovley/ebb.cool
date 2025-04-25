export const APPLE_SILICON_DOWNLOAD_URL = "https://github.com/CodeClimbersIO/ebb-app/releases/latest/download/Ebb_aarch64.dmg"
export const INTEL_DOWNLOAD_URL = "https://github.com/CodeClimbersIO/ebb-app/releases/latest/download/Ebb_x64.dmg"

// Default URL - Client-side detection attempts to override this.
export const DEFAULT_DOWNLOAD_URL = APPLE_SILICON_DOWNLOAD_URL // Defaulting to Apple Silicon

/**
 * Attempts to detect Mac architecture client-side using WebGL renderer info.
 * Returns the appropriate download URL or a default if detection fails.
 */
export function getDownloadLink(): string {
  // Return default if not in a browser environment
  if (typeof window === 'undefined') {
    return DEFAULT_DOWNLOAD_URL;
  }

  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    
    if (gl && 'getExtension' in gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        // console.log("WebGL Renderer:", renderer); // Optional: for debugging
        
        // Check if the renderer string indicates Apple Silicon (M1, M2, etc.)
        if (typeof renderer === 'string' && renderer.toLowerCase().includes('apple')) {
           // console.log("Detected Apple Silicon based on renderer.");
           return APPLE_SILICON_DOWNLOAD_URL;
        }
         // Assuming non-Apple renderer means Intel for macOS
         // console.log("Assuming Intel based on renderer.");
         return INTEL_DOWNLOAD_URL;
      }
    }
  } catch (error) {
    console.error("WebGL detection failed:", error);
  }

  // Fallback if WebGL detection fails or doesn't provide info
  // console.log("Falling back to default URL.");
  return DEFAULT_DOWNLOAD_URL;
} 