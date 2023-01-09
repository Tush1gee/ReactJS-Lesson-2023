export default function Button() {
    function handleClick() {
        alert('You Clicked me!')
    }

    return (
        <button onClick={()=> {
            alert('You clicked me !')
        }}>
            Click me
        </button>
    )
}