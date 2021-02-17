import '../styles/TGallery.css';
import React from "react";
import { BrowserRouter as Link } from 'react-router-dom';

export default function TGallery() {
	return (
		<div className="container">
			<div className="gallery-container w-3 h-2">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/nature`}>
					<img src="http://source.unsplash.com/1600x900/?nature" alt="nature" />
					</Link>
				</div>
				<div className="text">nature 1</div>
				</div>
			</div>

			<div className="gallery-container w-3 h-3">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/people`}>
					<img src="http://source.unsplash.com/1600x900/?people" alt="people" />
					</Link>
				</div>
				<div className="text">people 2</div>
				</div>
			</div>

			<div className="gallery-container h-2">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/sport`}>
					<img src="http://source.unsplash.com/1600x900/?sport" alt="sport" />
					</Link>
				</div>
				<div className="text">sport 3</div>
				</div>
			</div>

			<div className="gallery-container w-2">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/fitness`}>
					<img src="http://source.unsplash.com/1600x900/?fitness" alt="fitness" />
					</Link>
				</div>
				<div className="text">fitness 4</div>
				</div>
			</div>

			<div className="gallery-container w-4 h-1">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/food`}>
					<img src="http://source.unsplash.com/1600x900/?food" alt="food" />
					</Link>
				</div>
				<div className="text">food 5</div>
				</div>
			</div>

			<div className="gallery-container">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/travel`}>
					<img src="http://source.unsplash.com/1600x900/?travel" alt="travel" />
					</Link>
				</div>
				<div className="text">travel 6</div>
				</div>
			</div>


			<div className="gallery-container w-3 h-2">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/nature`}>
					<img src="http://source.unsplash.com/1600x900/?nature" alt="nature" />
					</Link>
				</div>
				<div className="text">nature 1</div>
				</div>
			</div>

			<div className="gallery-container w-3 h-3">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/people`}>
					<img src="http://source.unsplash.com/1600x900/?people" alt="people" />
					</Link>
				</div>
				<div className="text">people 2</div>
				</div>
			</div>

			<div className="gallery-container h-2">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/sport`}>
					<img src="http://source.unsplash.com/1600x900/?sport" alt="sport" />
					</Link>
				</div>
				<div className="text">sport 3</div>
				</div>
			</div>

			<div className="gallery-container w-2">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/fitness`}>
					<img src="http://source.unsplash.com/1600x900/?fitness" alt="fitness" />
					</Link>
				</div>
				<div className="text">fitness 4</div>
				</div>
			</div>

			<div className="gallery-container w-4 h-1">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/food`}>
					<img src="http://source.unsplash.com/1600x900/?food" alt="food" />
					</Link>
				</div>
				<div className="text">food 5</div>
				</div>
			</div>

			<div className="gallery-container">
				<div className="gallery-item">
				<div className="image">
					<Link to={`/gallery/travel`}>
					<img src="http://source.unsplash.com/1600x900/?travel" alt="travel" />
					</Link>
				</div>
				<div className="text">travel 6</div>
				</div>
			</div>
		</div>
	)
}