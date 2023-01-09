import ChildButton from "./components/ChildButton";

export default function UploadButton(){
    return (
        <ChildButton onClick={() => alert('Uploading!')}>
            Upload Image
        </ChildButton>
    )
}