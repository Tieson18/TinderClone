import { Box, Stack } from "@mui/material"
import Header from "./components/Header"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Tinder } from "./pages/Tinder"
import { Chats } from "./pages/Chats"
import { ChatScreen } from "./pages/ChatScreen"
import { useState } from "react"

function App() {
  const [backButton, setBackButton] = useState(false);

  return (
    <Box>
      <Router>
        <Header backButton={backButton} setBackButton={setBackButton} />
        <Routes>
          <Route path="/" element={<Tinder />} />
          <Route path="/chat" element={<Chats setBackButton={setBackButton} />} />
          <Route path="/chat/:person" element={<ChatScreen />} />
        </Routes>
      </Router>
    </Box>
  )
}

export default App
