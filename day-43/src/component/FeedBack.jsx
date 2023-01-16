import { useState } from "react";
export default function FeedBackFunc() {
    
    const [text, setText] = useState('');
    const [isSending, setisSending] = useState(false);
    const [isSent, setisSent] = useState(false);
  
    
    async function handleSubmit(e){
      e.preventDefault();
      setisSending(true);
      await setMessage(text)
      setisSending(false)
      setisSent(true)
    }
  
    function setMessage(text) {
      return new Promise(resolve => {
        setTimeout(resolve, 2000);
      });
    }
  
    return(
        isSent ? (<h1>Opened Feedback</h1>):
        <div className="App">
        <form onSubmit={handleSubmit}>
        <h1>Та текст оруулна уу ?</h1>
          <textarea 
          disabled={isSending}
          value={text} 
          onChange={e => setText(e.target.value)}>
  
          </textarea>
          <div>
            <button>
                  Send
            </button>
            {isSending && <p>Sending...📩</p>}
          </div>
        </form>
      </div>
    );
}

