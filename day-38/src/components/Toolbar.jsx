import AlertButton from "./alerbutton";
export default function Toolbar(){
    return(
        <div>
            <AlertButton message="Playing!">Play Movie</AlertButton>
            <AlertButton message="Uploading!">Upload</AlertButton>
            <AlertButton message="Downlaoding Image!">Download</AlertButton>
        </div>
    )
}