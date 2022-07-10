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
		<div style={{ margin: "1rem" }}>
			<h2>Users</h2>
			{users.map((user, i) => {
				return (
					<div
						key={user._id}
						onClick={() => {
							handleClick(user)
						}}
						style={{ cursor: "pointer" }}
					>
						{" "}
						<p>
							{i + 1} :{" "}
							<span
								style={{
									fontSize: "26px",
								}}
							>
								{user.name}
							</span>
						</p>{" "}
					</div>
				)
			})}

			<div style={{ margin: "2rem" }}>
				<button onClick={handleAddUser}>Add new User</button>
			</div>
		</div>
	)
}

export default Landing
