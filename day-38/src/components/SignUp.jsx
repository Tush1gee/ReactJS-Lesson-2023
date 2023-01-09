export default function SignUp() {
    return (
        <form 
        onSubmit={(e) => {
            e.preventDefault();
            alert('Sent!')}
        }
            >
            <input/>
            <button>Send</button>
        </form>
    );
}