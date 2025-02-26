#!/bin/bash

# Check if input file is provided
if [ -z "$1" ]; then
    echo "Usage: ./convert-to-hls.sh <input_video.mp4>"
    exit 1
fi

INPUT_FILE="$1"
FILENAME=$(basename "$INPUT_FILE" .mp4)
OUTPUT_DIR="../public/about/hls/$FILENAME"
SEGMENT_TIME=6

# Create output directory
mkdir -p "$OUTPUT_DIR"

# Create different quality variants
ffmpeg -i "$INPUT_FILE" \
    -filter_complex \
    "[0:v]split=3[v1][v2][v3]; \
    [v1]scale=1920:-2[v1out]; \
    [v2]scale=1280:-2[v2out]; \
    [v3]scale=854:-2[v3out]" \
    -map "[v1out]" -c:v:0 h264 -b:v:0 5000k \
    -map "[v2out]" -c:v:1 h264 -b:v:1 3000k \
    -map "[v3out]" -c:v:2 h264 -b:v:2 1500k \
    -map a:0 -map a:0 -map a:0 \
    -c:a aac -b:a:0 192k -b:a:1 128k -b:a:2 96k \
    -f hls \
    -hls_time $SEGMENT_TIME \
    -hls_list_size 0 \
    -hls_segment_filename "$OUTPUT_DIR/%v_segment%d.ts" \
    -master_pl_name "master.m3u8" \
    -var_stream_map "v:0,a:0 v:1,a:1 v:2,a:2" \
    "$OUTPUT_DIR/stream_%v.m3u8"

# Create a symbolic link to the master playlist with the original filename
ln -sf "$OUTPUT_DIR/master.m3u8" "../public/about/$FILENAME.m3u8"

echo "Conversion complete! Files are in $OUTPUT_DIR"
echo "Master playlist is available at: ../public/about/$FILENAME.m3u8" 