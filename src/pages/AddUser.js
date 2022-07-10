import axios from "axios"
import React, { useState } from "react"

function AddUser() {
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
			const res = await axios.post("http://localhost:3001/user", user)
			console.log(res)
		} catch (err) {
			console.log(err.message)
		}
	}

	return (
		<div>
			<div>
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
			<div>
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
			<div>
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
			<button onClick={handleSubmit}>add user</button>
		</div>
	)
}

export default AddUser
