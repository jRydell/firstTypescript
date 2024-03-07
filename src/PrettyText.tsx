import { useRef, useState } from "react";
import "./PrettyText.css";

const SETTINGS = { BOLD: "bold", ITALICS: "italics", LARGE: "large" };

type Settings = {
	bold: boolean;
	italics: boolean;
	large: boolean;
};

const PrettyText = () => {
	const [settings, setSettings] = useState({
		bold: false,
		italics: false,
		large: false,
	} as Settings);
	const [text, setText] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);
	const boldRef = useRef<HTMLInputElement>(null);
	const italicsRef = useRef<HTMLInputElement>(null);
	const largeRef = useRef<HTMLInputElement>(null);

	const handleClick = () => {
		if (
			inputRef.current &&
			boldRef.current &&
			italicsRef.current &&
			largeRef.current
		) {
			setSettings({
				bold: boldRef.current.checked,
				italics: italicsRef.current.checked,
				large: largeRef.current.checked,
			});
			setText(inputRef.current.value);
		}
	};

	return (
		<>
			<h1>PrettyText</h1>
			Text: <input type="text" ref={inputRef} />
			<br />
			<div>
				<input type="checkbox" name={SETTINGS.BOLD} ref={boldRef} /> Bold,{" "}
				<input type="checkbox" name={SETTINGS.ITALICS} ref={italicsRef} />{" "}
				Italics,{" "}
				<input type="checkbox" name={SETTINGS.LARGE} ref={largeRef} />{" "}
				Larger text
			</div>
			<button onClick={handleClick}>Make pretty!</button> <br />
			<p
				className={`${settings.bold && "bold"} ${
					settings.italics && "italics"
				} ${settings.large && "large"}`}
			>
				{text}
			</p>
		</>
	);
};

export default PrettyText;
