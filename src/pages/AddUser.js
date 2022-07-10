import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddUser() {
	const navigate = useNavigate()
	const [user, setUser] = useState({
		name: "",
		email: "",
		mobile: 0,
	})

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
			if (user.name === "" || user.email === "" || user.mobile === 0) {
				alert("Please fill all the fields")
			} else if (user.mobile.length !== 10) {
				alert("Please enter valid mobile number")
			} else if (
				user.email.indexOf("@") === -1 ||
				user.email.indexOf(".") === -1
			) {
				alert("Please enter valid email")
			} else if (user.name.length < 2) {
				alert("Name should be atleast 2 characters")
			} else {
				await axios.post("http://localhost:3001/user", user)
				alert("User added successfully")
				navigate("/")
			}
		} catch (err) {
			console.log(err.message)
		}
	}

	return (
		<div style={{ margin: "1rem" }}>
			<h2>Add User</h2>
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
						value={user.phone}
						onChange={(e) => {
							handleChangeMobile(e)
						}}
					/>
				</label>
			</div>
			<button style={{ margin: "1rem" }} onClick={handleSubmit}>
				add user
			</button>
		</div>
	)
}

export default AddUser
