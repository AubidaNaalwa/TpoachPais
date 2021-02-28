import React, { useEffect, useState } from "react";
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Gallery from './Gallery';
import { API_PATH } from '../../Constants';

export default function SpaceGallery() {
	const [gallery, setGallery] = useState([]);

	const getCategoriesFromDb = async () => {
		const categoriesArray = await axios.get(`${API_PATH}/space/gallery`);
		setGallery(categoriesArray.data.categories);
	}

	useEffect(() => { getCategoriesFromDb(); }, []);

	return (
		<Grid container direction="row" justify="space-evenly" spacing={3}>
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