import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

function Post() {
	let { movieId } = useParams();
	console.log('Single Movie ID: ', movieId);

	const [movie, setMovie] = useState<any>({});

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			const response = await fetch(
				`${process.env.REACT_APP_SERVER_BASE_URL}/movie/movie/${movieId}`
			);
			const json = await response.json();
			setMovie(json);
		};
		fetchData();
		console.log('Single Movie Fetch Data: ', fetchData());
	}, [movieId]);

	return (
		<section className="post-area">
			<div className="container">
				<div className="row">
					<div className="col-lg-1 col-md-0" />
					<div className="col-lg-10 col-md-12">
						{movie && (
							<div className="main-post">
								<div className="post-top-area">
									<h5 className="pre-title">
										Nest-React Movie Database
									</h5>
									<h3 className="title">
										<span>
											<b>{movie.title}</b>
										</span>
									</h3>

									<p className="para">{movie.description}</p>
                                    <p>Released at: {movie.date_posted}</p>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Post;
