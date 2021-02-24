import React, { useEffect, useState } from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Gallery from './Gallery';

export default function SpaceGallery() {
	const [gallery, setGallery] = useState([]);

	const getCategoriesFromDb = async () => {
		const categoriesArray = await axios.get('/imagesCategory/space');
		setGallery(categoriesArray.data.categories);
	}

	useEffect(() => { getCategoriesFromDb(); }, []);

	return (
		<Grid container direction="row" justify="space-between" spacing={3} style={{marginTop: 15}}>
		{
			gallery.map((g) => (
				<Grid className="grid-container" item key={g._id}>
					<Gallery gallery={g} path={'s'} key={g.imgUrl}/>
				</Grid>
			))
		}
		</Grid>
	);
}