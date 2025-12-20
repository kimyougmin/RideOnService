import {APIBuilder} from "@/utils/APIBuilder";
import Compress from 'compress.js';

const compress = new Compress();


export async function UploadProfileImage(file: File) {
  const options = {
    size: 1,       // 최대 1MB
    quality: 0.75, // 압축 품질 0~1
    maxWidth: 1024,
    maxHeight: 1024,
    resize: true,
    convertSize: 0  // 변환 최소 파일 크기, 0이면 항상 변환
  };

  const results = await compress.compress([file], options);
  const img = results[0];

  const base64str = img.data;
  const imgExt = 'webp';
  const byteString = atob(base64str);
  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: `image/${imgExt}` });

  const formData = new FormData();
  formData.append('file', blob, `profile_${Date.now()}.webp`);

  const response = await APIBuilder.post('/api/users/profile/image', {
    body: formData,
    credentials: 'include'
  }).withCredentials(true)
    .timeout(2000)
    .build()
    .call<{res: { profileImageUrl: string, message: string }}>();

  return response;
}
