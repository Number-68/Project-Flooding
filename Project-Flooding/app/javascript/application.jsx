import React from "react"
import { createRoot } from "react-dom/client"

function App() {
    return <h1>Hello from React + ESBuild + Rails 8</h1>
}

const root = document.getElementById("app")
if (root) {
    createRoot(root).render(<App />)
}
