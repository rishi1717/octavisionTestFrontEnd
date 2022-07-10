import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Landing() {
	const navigate = useNavigate()
	const [users, setUsers] = useState([])
	useEffect(() => {
		;(async () => {
			try {
				const { data } = await axios.get("http://localhost:3001/user")
				console.log(data)
				setUsers(data)
			} catch (err) {
				console.log(err.message)
			}
		})()
	}, [])

	const handleClick = (user) => {
		navigate("/userdetails", { state: user })
	}

	const handleAddUser = () => {
		navigate("/adduser")
	}

	return (
		<div>
			<h3>Users</h3>
			{users.map((user) => {
				return (
					<div
						key={user._id}
						onClick={() => {
							handleClick(user)
						}}
					>
						{" "}
						<p>{user.name}</p>{" "}
					</div>
				)
			})}

			<div>
				<button onClick={handleAddUser}>Add User</button>
			</div>
		</div>
	)
}

export default Landing
