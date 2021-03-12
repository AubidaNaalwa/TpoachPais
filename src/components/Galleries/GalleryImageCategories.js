import React, { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { API_PATH, SNACKBAR_PROPS } from '../../Constants';
import SnackBar from '../SnackBar';

export default function GalleryImageCategories() {
	const [gallery, setGallery] = useState([]),
	getSitePath = useLocation().pathname.includes('/space') ? "space" : "tpais",
	[snack, setSnack] = useState('');

	useEffect(() => {
		const getCategoriesFromDb = async () => {
			try {
				const categoriesArray = await axios.get(`${API_PATH}/${getSitePath}/gallery`);
				setGallery(categoriesArray.data.categories);
			}
			catch {
				setSnack({ message: SNACKBAR_PROPS.MessageType.CONNECTION_ERROR, severity: SNACKBAR_PROPS.SeverityType.ERROR });
			}
		}
		getCategoriesFromDb();
	}, [getSitePath]);

	return (
		<>
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
			<SnackBar open={setSnack} message={snack.message} severity={snack.severity} />
		</>
	);
}