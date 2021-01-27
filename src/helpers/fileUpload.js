export const fileUpload = async (file) => {

  const cloudUrl = 'https://api.cloudinary.com/v1_1/fakloud/upload';

  const formData = new FormData();
  formData.append('upload_preset', 'react-journal')
  formData.append('file', file)

  try{

    const rsp = await fetch(cloudUrl, {
      method:'POST', 
      body:formData
    }); 

    if(rsp.ok){

      const cloudResp = await rsp.json();
      return cloudResp.secure_url

    }else{

      return null;
    }

  }catch (error) {
    throw error;
  }
}
