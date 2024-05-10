 import { ChatEngine } from "react-chat-engine";
import LoginForm from "./components/LoginForm";
 import ChatFeed from "./components/ChatFeed";
 import './App.css';

 const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm/>
  return(
    <ChatEngine
    height = "100vh"
    projectID="d32c1fe1-a1f0-4abd-80f4-0a645fd7288a"
    userName= {localStorage.getItem('username')}
    userSecret= {localStorage.getItem('password')}
    renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps } />}
    >/</ChatEngine>
    );
}

 export default App ;