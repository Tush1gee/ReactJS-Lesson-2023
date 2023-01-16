export default function Login(){
    return(
        <div className="login-form">
            <h1>It is Login page</h1>
            <form>
                <label for="email">Email: </label>
                <input type="email" name="email"></input>
                <br/>
                <label for="password">Password </label>
                <input type="password" name="password"></input>
                <br/>
                <button>
                    Sign In
                </button>
            </form>
        </div>
    )
}