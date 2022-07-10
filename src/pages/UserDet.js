import axios from "axios"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

function UserDet() {
	const navigate = useNavigate()
	const handleDelete = async () => {
		try {
			await axios.delete("http://localhost:3001/user/" + user._id)
			navigate("/")
		} catch (err) {
			console.log(err.message)
		}
	}
	const handleUpdate = () => {
		navigate("/updateuser", { state: user })
	}
	const location = useLocation()
	const user = location.state
	return (
		<div>
			<div>
				<p> Name : {user.name}</p>
			</div>
			<div>
				<p> email : {user.email}</p>
			</div>
			<div>
				<p> phone : {user.mobile}</p>
			</div>

			<div>
				<button onClick={handleUpdate}>update</button>
				<button onClick={handleDelete}>delete</button>
			</div>
		</div>
	)
}

export default UserDet
