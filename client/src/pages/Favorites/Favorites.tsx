import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { RootStoreType } from "../../redux/store";
import Spinner from "../../UI/Spinner/Spinner";
import DisplayActivities from "../../components/activities/DisplayActivities";

const Favorites = () => {
	const [favorites, setFavorites] = useState<any[]>([]);
	const { token } = useSelector((state: RootStoreType) => state.user);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get("/api/users/favorites", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setFavorites(data);
		})();
	}, [token]);

	const removeOne = (id: string) => {
		setFavorites(favorites.filter((favorite) => favorite._id !== id));
	};

	return (
		<div>
			{favorites.length === 0 && <Spinner />}
			{favorites.length > 0 && (
				<div>
					<h1>Favorites :</h1>
					<DisplayActivities
						activities={favorites}
						removeOne={removeOne}
					/>
				</div>
			)}
		</div>
	);
};

export default Favorites;
