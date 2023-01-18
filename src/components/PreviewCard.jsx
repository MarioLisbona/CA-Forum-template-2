import React from 'react'

const PreviewCard = ({author, date, previewText}) => {
	return (
		<>
			<div class="col-md-6 col-lg-4 col-xl-3 bg-light mt-1">
				<h2>Alaska</h2>
				<h6>Author: Mario</h6>
				<h6>Posted: 19/01/2023</h6>
				<p>A brief description of post - perhaps the first sentence or two</p>
				<p><a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank" class="btn btn-success">Learn More &raquo;</a></p>
			</div>
		</>
	)
}

export default PreviewCard