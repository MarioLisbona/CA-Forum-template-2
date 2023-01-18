import React from 'react'

const PreviewCard = ({author, date, previewText}) => {
	return (
		<>
			<div class="border border-secondary col-md-6 col-lg-4 col-xl-3 bg-light">
				<div class=" \bg-light p-3">
						<h2>Alaska</h2>
						<h6>Author: Mario</h6>
						<h6>Posted: 19/01/2023</h6>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea modi eveniet quod nulla harum tempore, ipsam nihil, quaerat, placeat qui obcaecati perferendis ab quam consequatur commodi ducimus architecto quas odit pariatur veniam. Dolore quae sed fugit deserunt, quos porro?</p>
						<p><a href="https://www.tutorialrepublic.com/html-tutorial/" target="_blank" class="btn btn-success">Learn More &raquo;</a></p>
				</div>
			</div>
		</>
	)
}

export default PreviewCard