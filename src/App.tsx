import './App.css'
import { saigon, createRoninModal } from "@roninbuilders/modal"
import { getW3Address, getW3Provider } from '@w3vm/react'

createRoninModal({
	chain: saigon,
	projectId: "cdbd18f9f96172be74c3e351ce99b908",
})

function App() {
	const address = getW3Address()
	const provider = getW3Provider()

	console.log(address, provider)

  return <ronin-button/>
}

export default App
