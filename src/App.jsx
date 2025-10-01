import { useDispatch, useSelector } from "react-redux"
import { setQuery } from "./features/querySlice"

export default function App() {
	const dispatch = useDispatch()
	const query = useSelector(s => s.query.value)

	const submit = e => {
		e.preventDefault()
		if (!query.trim()) return
		alert(query)
	}

	return (
		<div className="page">
			<header className="safe-area" />
			<main className="center">
				<h1 className="title">How can I help you today?</h1>
				<form className="search" onSubmit={submit}>
					<input
						className="box"
						type="text"
						value={query}
						onChange={e => dispatch(setQuery(e.target.value))}
						placeholder="Ask anything"
						aria-label="Ask anything"
					/>
					<button className="go" type="submit" aria-label="Submit">
						<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
							<path d="M4 20l8-16 8 16-8-4z" fill="currentColor"/>
						</svg>
					</button>
				</form>
			</main>
			<footer className="safe-area" />
		</div>
	)
}
