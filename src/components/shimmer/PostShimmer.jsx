import React from "react";

export default function PostShimmer({}) {
	const singlePost = () => {
		return (
				<span class="spinner-grow text-muted">Loading...</span>
		)
	} 
  return (
		<>
			{singlePost()}
		</>
  )
}
