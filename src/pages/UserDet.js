import axios from "axios"
import React from "react"
import { useLocation, useNavigate } from "react-router-dom"

function UserDet() {
	const navigate = useNavigate()
	const handleDelete = async () => {
		try {
			if (window.confirm("Delete the item?")) {
				await axios.delete("http://localhost:3001/user/" + user._id)
				navigate("/")
			}
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
		<div style={{ margin: "1rem" }}>
			<h2>User Details</h2>
			<div>
				<p> Name : {user.name}</p>
			</div>
			<div>
				<p> email : {user.email}</p>
			</div>
			<div>
				<p> phone : {user.mobile}</p>
			</div>

			<div style={{ padding: "1rem" }}>
				<button style={{ margin: "10px" }} onClick={handleUpdate}>
					update
				</button>
				<button style={{ margin: "10px" }} onClick={handleDelete}>
					delete
				</button>
			</div>
		</div>
	)
}

export default UserDet
