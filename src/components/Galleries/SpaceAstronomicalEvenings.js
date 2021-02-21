import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
import SpaceGHelper2 from './SpaceGHelper2';

export default function SpaceAstronomicalEvenings(props) {
	const [gallery, setGallery] = useState([]);

	const getCategoriesFromDb = async () => {
		const id = props.match.params.id1;
		let pathLink;
		props.pathLink ==="s" ? pathLink = `/space/images/${id}` :  pathLink = `/tpoach/images/${id}`;
		const categoriesArray = await axios.get(pathLink);
		const arr = categoriesArray.data.images;
		setGallery(arr);
	}

	useEffect(() => { getCategoriesFromDb(); }, []);

	return (
		<div>
			<h1>امسيات فلكية</h1>
			<div className="grid-container">
				{gallery.map(g => <SpaceGHelper2 gallery={g} key={g._id}/> )}
			</div>
		</div>
	);
}
