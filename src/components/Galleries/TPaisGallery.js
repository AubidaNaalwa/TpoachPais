import React from "react";
import { useEffect, useState } from "react";
import Gallery from './Gallery';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

export default function TPaisGallery() {
	const [gallery, setGallery] = useState([]);

	const getCategoriesFromDb = async () => {
		const categoriesArray = await axios.get('/imagesCategory/tpoach');
		setGallery(categoriesArray.data.categories);
	}

	useEffect(() => { getCategoriesFromDb() }, []);

	return (
		<Grid container direction="row" justify="space-between" spacing={3} style={{marginTop: 15}}>
		{
			gallery.map((g) => (
				<Grid className="grid-container" item key={g._id}>
					<Gallery gallery={g} path={'t'} key={g.imgUrl} />
				</Grid>
			))
		}
		</Grid>
	);
}