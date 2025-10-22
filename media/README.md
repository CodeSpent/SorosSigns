# Media Assets for Hero Section

This directory contains media assets for the hero video background.

## Required Video File

Add your protest video as `protest-background.webm` (WebM format recommended for best quality/compression).
Alternatively, you can also provide `protest-background.mp4` as a fallback.

## Where to Get Protest Footage

### Free Stock Video Sources

1. **Pexels** (https://www.pexels.com/videos/)
   - Search for: "protest", "march", "demonstration", "rally", "crowd"
   - Free to use, no attribution required
   - High-quality footage available

2. **Pixabay** (https://pixabay.com/videos/)
   - Search for: "protest", "demonstration", "people marching"
   - Free for commercial use
   - No attribution required

3. **Videvo** (https://www.videvo.net/)
   - Search for: "protest", "political rally", "demonstration"
   - Mix of free and paid content
   - Check license for each video

4. **Coverr** (https://coverr.co/)
   - Search for: "crowd", "people", "march"
   - Free for personal and commercial use

## Video Specifications

For best results, your video should:
- **Resolution**: 1920x1080 (Full HD) or higher
- **Format**: MP4 (H.264 codec) for best compatibility
- **Duration**: 10-30 seconds (it will loop automatically)
- **File Size**: Keep under 5MB for faster loading (optimize/compress if needed)
- **Aspect Ratio**: 16:9 is ideal
- **Content**: Peaceful protests or demonstrations showing civic engagement

## How to Add the Video

1. Download your chosen protest video
2. Rename it to `protest-background.mp4`
3. (Optional) Convert to WebM format for better compression: `protest-background.webm`
4. Place the file(s) in this directory (`videos/`)

## Video Optimization Tips

To reduce file size while maintaining quality:

### Using FFmpeg (command line)
```bash
# Compress MP4
ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -preset medium protest-background.mp4

# Create WebM version
ffmpeg -i input.mp4 -c:v libvpx-vp9 -crf 35 -b:v 0 protest-background.webm
```

### Online Tools
- **Clideo Video Compressor**: https://clideo.com/compress-video
- **FreeConvert**: https://www.freeconvert.com/video-compressor
- **HandBrake** (desktop app): https://handbrake.fr/

## Testing Without a Video

The site will work without a video - it will show a navy blue background instead. The poster attribute provides a fallback solid color while the video loads or if it's unavailable.

## License Considerations

- Ensure you have the right to use any video you download
- Most stock video sites offer free licenses, but always check
- For public demonstrations, footage may have different considerations
- This is a political satire/educational site, which may qualify as fair use in some cases, but verify licensing

## Recommended Search Terms

- "peaceful protest"
- "democracy march"
- "civic demonstration"
- "people marching"
- "political rally crowd"
- "voting rights protest"
- "social movement"
- "public demonstration"

Choose footage that shows genuine civic engagement and peaceful protest to support the site's message.
