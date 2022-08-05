import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '../contexts/auth0-context';

function Home(): JSX.Element {
	let history = useHistory();
	const { isAuthenticated, getIdTokenClaims, user } = useAuth0();

	const [movies, setMovies] = useState();

	const deleteMovie = async (id: string) => {
		const accessToken = await getIdTokenClaims();
		await fetch(
			`${process.env.REACT_APP_SERVER_BASE_URL}/movie/delete?movieID=${id}`,
			{
				method: 'delete',
				headers: new Headers({
					'Content-Type': 'application/json',
					Accept: 'application/json',
					authorization: `Bearer ${accessToken.__raw}`,
				}),
			}
		);
		_removeMovieFromView(id);
		history.push('/');
	};

	const _removeMovieFromView = (id: string) => {
		const index = movies.findIndex(
			(movie: { _id: string }) => movie._id === id
		);
		movies.splice(index, 1);
	};

	useEffect(() => {
		const fetchMovies = async (): Promise<any> => {
			const response = await fetch(
				`${process.env.REACT_APP_SERVER_BASE_URL}/movie/movies`
			);
			const json = await response.json();
			setMovies(json);
		};
		fetchMovies();
	}, []);

	return (
		<section className="blog-area section">
			<div className="container">
				<div className="row">
					{movies &&
						movies.map(
							(movie: {
								title: React.ReactNode;
								description: React.ReactNode;
								_id: any;
								author: any;
							}) => (
								<div
									className="col-lg-4 col-md-6"
									key={movie._id}
								>
									<div className="card h-100">
										<div className="single-post post-style-1">
											<div className="blog-image">
												<img
													src="https://picsum.photos/400/350"
													alt="Blog"
												/>
											</div>

											<span className="avatar">
												<img
													src="https://randomuser.me/api/portraits/men/46.jpg"
													alt="Profile"
												/>
											</span>

											<div className="blog-info">
												<h4 className="title">
													<span>
														<b>{movie.title}</b>
													</span>
												</h4>
												<p>{movie.description}</p>
											</div>
										</div>

										<ul className="post-footer mt-4">
											<li>
												<Link
													to={`/movie/${movie._id}`}
													className="btn btn-sm btn-outline-secondary"
												>
													<i className='fa fa-eye'></i> View{' '}
												</Link>
											</li>
											<li className='px-2'>
												{isAuthenticated &&
													user.name ===
														movie.author && (
														<Link
															to={`/edit/${movie._id}`}
															className="btn btn-sm btn-outline-secondary"
														>
															<i className='fa fa-pencil'></i> Edit{' '}
														</Link>
													)}
											</li>
											<li>
												{isAuthenticated &&
													user.name ===
														movie.author && (
														<button
															className="btn btn-sm btn-outline-secondary"
															onClick={() =>
																deleteMovie(
																	movie._id
																)
															}
														>
															<i className='fa fa-trash'></i> Delete 
														</button>
													)}
											</li>
										</ul>
									</div>
								</div>
							)
						)}
				</div>
			</div>
		</section>
	);
}

export default Home;
