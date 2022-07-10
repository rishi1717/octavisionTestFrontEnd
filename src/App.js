import Landing from "./pages/Landing"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import UserDet from "./pages/UserDet"
import AddUser from "./pages/AddUser"
import UpdateUser from "./pages/UpdateUser"

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/userdetails" element={<UserDet />} />
					<Route path="/adduser" element={<AddUser />} />
					<Route path="/updateuser" element={<UpdateUser />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
