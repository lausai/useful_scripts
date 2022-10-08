:: pools can be none or thread number
K:\Software\ffmpeg-master-latest-win64-gpl\bin\ffmpeg.exe -threads 2 -i %1 -c:v libx265 -x265-params pools=none "encode\%~1"

