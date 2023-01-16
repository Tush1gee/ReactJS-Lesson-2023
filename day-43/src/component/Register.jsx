export default function Register(){
    return(
        <div className="register-area" >
            <h1>It is Register page</h1>
            <form>
                <label htmlfor="firstname">Firstname: </label>
                <input type="text" name="firstname"></input>
                <br/>
                <label  htmlfor="lastname">Lastname: </label>
                <input type="text" name="lastname" ></input>
                <br/>
                <label  htmlfor="password">Password: </label>
                <input type="password" name="password"></input>
                <br/>
                <label  htmlfor="password">Confirm password: </label>
                <input type="password" name="password"></input>
                <br/>
                <button>
                    Register
                </button>
            </form>
        </div>
    )
}