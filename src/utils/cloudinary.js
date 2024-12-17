import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from 'fs';

    // Configuration
    cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUDINARY_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

    const UploadOnCloudinary = async(localFilePath)=>{
        try {
            if (!localFilePath) {
                return null;
            }
            //upload file on Cloudinary
            const response= await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            })
            //after uploading the file
            log("File uploaded to Cloudinary", response.url);
            return response;
        } catch (error) {
            fs.unlinkSync(localFilePath);
            return null
        }
    }

    export default UploadOnCloudinary