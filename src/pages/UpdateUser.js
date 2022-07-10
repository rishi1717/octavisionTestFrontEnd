import axios from "axios"
import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

function UpdateUser() {
	const navigate = useNavigate()
	const location = useLocation()
	const [user, setUser] = useState(location.state)
	const handleChangeName = (e) => {
		setUser({ ...user, name: e.target.value })
	}
	const handleChangeEmail = (e) => {
		setUser({ ...user, email: e.target.value })
	}
	const handleChangeMobile = (e) => {
		setUser({ ...user, mobile: e.target.value })
	}
	const handleSubmit = async () => {
		try {
			console.log(user._id)
			const res = await axios.patch(
				"http://localhost:3001/user/" + user._id,
				{
					name: user.name,
					email: user.email,
					mobile: user.mobile,
				}
			)
			alert("User updated successfully")
			navigate("/")
			console.log(res)
		} catch (err) {
			console.log(err.message)
		}
	}

	return (
		<div style={{ margin: "1rem" }}>
			<h2>Update User</h2>
			<div style={{ margin: "1rem" }}>
				<label>
					Name:
					<input
						type="text"
						value={user.name}
						onChange={(e) => {
							handleChangeName(e)
						}}
					/>
				</label>
			</div>
			<div style={{ margin: "1rem" }}>
				<label>
					Email:
					<input
						type="text"
						value={user.email}
						onChange={(e) => {
							handleChangeEmail(e)
						}}
					/>
				</label>
			</div>
			<div style={{ margin: "1rem" }}>
				<label>
					Phone:
					<input
						type="number"
						value={user.mobile}
						onChange={(e) => {
							handleChangeMobile(e)
						}}
					/>
				</label>
			</div>
			<button style={{ margin: "1rem" }} onClick={handleSubmit}>
				Update user
			</button>
		</div>
	)
}

export default UpdateUser
