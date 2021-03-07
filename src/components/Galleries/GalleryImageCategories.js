import React, { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { API_PATH } from '../../Constants';

export default function GalleryImageCategories() {
	const [gallery, setGallery] = useState([]),
	getSitePath = useLocation().pathname.includes('/space') ? "space" : "tpais";

	useEffect(() => {
		const getCategoriesFromDb = async () => {
			const categoriesArray = await axios.get(`${API_PATH}/${getSitePath}/gallery`);
			setGallery(categoriesArray.data.categories);
		}
		getCategoriesFromDb();
	}, [getSitePath]);

	return (
		<Grid container direction="row" justify="space-between" spacing={3}>
		{
			gallery.map((gallery) => (
				<Grid className="gallery-category-grid-container" item key={gallery._id}>
					<div>
						<Link to={`/${getSitePath}/gallery/images/${gallery._id}`}>
							<img src={`${gallery.imgUrl}`} alt={`${gallery._id}`} />
						</Link>
						<p>{gallery._id}</p>
					</div>
				</Grid>
			))
		}
		</Grid>
	);
}