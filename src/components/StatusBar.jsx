import React, {useContext} from "react";
import { AuthContext } from "../context/authContext"; 

const StatusBar = () => {
	const { statusMessage } = useContext(AuthContext);
	const getClass = (category) => {
		category = category ? category : "info";
		return `alert alert-${category} text-dark`
	}
	return (
		<>
			{statusMessage.statusMessage && <div class={getClass(statusMessage.category)} style={{marginTop:'70px',marginBottom:'-70px',height:'47px'}} role="alert">{statusMessage.statusMessage}</div>}
		</>
	)
}

export default StatusBar;