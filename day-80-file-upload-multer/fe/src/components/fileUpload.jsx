import React from "react";


export default function FileUpload() {

  const URL = "http://localhost:8083/fileUpload"

  const handleFileSubmit =  async(event) =>  {
    event.preventDefault();
    console.log(event.target.image.files[0]);

    const data = new FormData();
    const files = event.target.image.files;
    
   data.append("image", files[0])

    const options = {
      method: "POST",
      body: data
    }

  const FETCHED_DATA = await fetch (URL, options);
  const FETCHED_JSON = await FETCHED_DATA.json()
  console.log(FETCHED_JSON);
  }

  return (
    <div>
      <h1>File Upload Multer</h1>


      <form method="post" encType="multipart/form-data" onSubmit={handleFileSubmit}>
        <input type="file" name="image"></input>
        <br />
        <button type="submit" className="sbutton">Submit</button>
      </form>



    </div>
  );
}
