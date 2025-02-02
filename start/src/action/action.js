'use server'

import {S3, PutObjectCommand, S3Client} from '@aws-sdk/client-s3'


export async function handleFormSubmit(currentState, formData) {
    const file = formData.get('my-file');
    if (!file) {
      return { status: 'error', message: 'No file found', path: '' };
    }
    const fileName = file.name;
    const fileType = file.type;
  
    console.log("fileName ", fileName);
    console.log("fileType ", fileType);
  
    const binaryFile = await file.arrayBuffer();
    const fileBuffer = Buffer.from(binaryFile);
  
    const s3Client = new S3Client({
      region: 'eu-north-1',
      credentials: {
        accessKeyId: process.env.AWS_IAM_USER_ACCESS_KEY,
        secretAccessKey: process.env.AWS_IAM_USER_SECRET_KEY
      }
    });
  
    const param = {
      Bucket: 'e-mart',
      Key: fileName,
      Body: fileBuffer,
      ContentType: fileType
    };
  
    try {
      const upload = await s3Client.send(new PutObjectCommand(param));
      return {
        status: 'success',
        message: `file ${fileName} upload successfully`,
        path: `https://d1vkuao1gkuwze.cloudfront.net/${fileName}`,
        fileName
      };
    } catch (error) {
      console.error("Upload error: ", error);
      return {
        status: 'error',
        message: error.message,
        path: '',
        fileName: ''
      };
    }
  }
  


