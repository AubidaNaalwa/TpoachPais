import React from "react";
import { useEffect, useState } from "react";
import Gallery from './Gallery';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { API_PATH } from '../../Constants';

export default function TPaisGallery() {
	const [gallery, setGallery] = useState([]);

	const getCategoriesFromDb = async () => {
		const categoriesArray = await axios.get(`${API_PATH}/tpais/gallery`);
		setGallery(categoriesArray.data.categories);
	}

	useEffect(() => { getCategoriesFromDb(); }, []);

	return (
		<Grid container direction="row" justify="space-between" spacing={3}>
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