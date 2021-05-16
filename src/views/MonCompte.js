//*--- MODULES
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//*--- COMPOSANTS
import Aperçu from './Aperçu.js';
import Galerie from './Galerie.js';
import Favoris from './Favoris.js';
import Ressources from './Ressources.js';
import APropos from './APropos.js';
import Statistiques from './Statistiques.js';

//*--- STYLES
import '../assets/css/view/MonCompte.css';

class MonCompte extends Component {
  render(){
    return(
      <div className="perimetreMonCompte">
			<div className="Rw6FN IcyS1" style={{backgroundImage: 'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d227bedd-ad80-4263-ab73-ad2712643afb/deeorvx-1f9bb7c8-1429-4adc-8377-90dbf0091536.png/v1/crop/w_1920,h_520,x_0,y_521,scl_1,q_85,strp/device_computer_by_kenjimaru36_deeorvx-fullview-cover.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcL2QyMjdiZWRkLWFkODAtNDI2My1hYjczLWFkMjcxMjY0M2FmYlwvZGVlb3J2eC0xZjliYjdjOC0xNDI5LTRhZGMtODM3Ny05MGRiZjAwOTE1MzYucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Xb9-kqzDTgdsET-5H2Jqc823l3TbFf5MGLETkkSAkhY")'}} />
        	    <div className="_2mK2v">
					<div id="content-container" className="_2u8eq">
						<div className="_2EDy-" />
						<div className="_2eTWG">
							<div className="_3HAOe">
								<div className="_2xLBr b-LAZ">
									<div className="_3kuta">
										<button data-role="edit-control">
											<span className="_3HH04 _3s0_v _2PPPp _3kEx1 _2SUwn">
												<svg
													xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<path fillRule="evenodd" d="M4 11a1 1 0 011 1v.5a6.5 6.5 0 006.267 6.496L11.5 19h1a6.481 6.481 0 004.69-2H16a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-1.993.117L19 20l.001-2.024A8.482 8.482 0 0112.5 21h-1A8.5 8.5 0 013 12.5V12a1 1 0 011-1zm8.5-8a8.5 8.5 0 018.5 8.5v.5a1 1 0 01-2 0v-.5a6.5 6.5 0 00-6.267-6.496L12.5 5h-1c-1.749 0-3.336.69-4.505 1.814L6.81 7H8a1 1 0 110 2H4a1 1 0 01-1-1V4a1 1 0 011.993-.117L5 4l-.001 2.024A8.482 8.482 0 0111.5 3h1z" />
												</svg>
											</span>
											<span className="_2JIyM">Change
												<span className="_3c9b0">Avatar</span>
											</span>
										</button>
									</div>
									<span>
										<span className="_23Ekg">
											<img alt="Kenjimaru36's avatar" data-hook="user_avatar" width={100} height={100} src="https://a.deviantart.net/avatars-big/k/e/kenjimaru36.png?4" className="_1h5md" loading="lazy" />
										</span>
									</span>
									<div className="_30ky0">
										<h1 className="AEPha">
											<a data-hook="user_link" data-username="Kenjimaru36" data-icon="https://a.deviantart.net/avatars-big/k/e/kenjimaru36.png?4" data-usertype="regular" data-userid={65790742} data-useruuid="d227bedd-ad80-4263-ab73-ad2712643afb" href="https://www.deviantart.com/kenjimaru36" title="Kenjimaru36" className="user-link _2diFW _2_8l-">Nom_Utilisateur_Membre
												<span className="IiKmn _9VPm0 _1NU-8" style={{cursor: 'pointer'}} />
											</a>
										</h1>
										<div className="gWmFn">
											<span className="_3_eQe _89OO9">
												Profession_Membre
											</span>
											<span className="R9rT4">
												<span className="_3HH04 _3y1P2 _3kEx1">
													<svg
														xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
														<path d="M9.225 20.427a1 1 0 01-1.414-1.414l7.07-7.071-7.07-7.071a1 1 0 011.414-1.414l7.778 7.778a1 1 0 010 1.414l-7.778 7.778z" clipRule="evenodd" />
													</svg>
												</span>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className="DImwh">
								<div style={{minHeight: '52px'}}>
									<div className style={{zIndex: 30}}>
									<BrowserRouter>
										<nav className="cUIp3 _3VEWa" data-hook="profile_nav">
											<span className="_3c9b0">
												<h2>Profile Navigation</h2>
											</span>
											<div className="_2dp2Z">
												<div className="_3_l2P ToiCg">
													<div className="_2DrVR">
														<span className="_23Ekg _2rqRl">
															<img alt="Kenjimaru36's avatar" data-hook="user_avatar" width={40} height={40} src="https://a.deviantart.net/avatars-big/k/e/kenjimaru36.png?4" className="_1h5md" loading="lazy" />
														</span>
														<div className="_2T9KV">
															<span className="F1KyP">Kenjimaru36</span>
														</div>
													</div>
												</div>
											</div>

											
												<div className="_2IzNv">
													<Link className="_3rUER" to="/ressources_relationnelles/aperçu">Aperçu</Link>
													<Link className="_3rUER" to="/ressources_relationnelles/galerie">Galerie</Link>
													<Link className="_3rUER" to="/ressources_relationnelles/favoris">Favoris</Link>
													<Link className="_3rUER" to="/ressources_relationnelles/ressources">Ressources</Link>
													<Link className="_3rUER" to="/ressources_relationnelles/apropos">À propos</Link>
													<Link className="_3rUER" to="/ressources_relationnelles/statistiques">Statistiques</Link>
												</div>

												<div className="_3v-Py">
													<div tabIndex={0} role="button" aria-haspopup="listbox" aria-expanded="false">
														<button className="_13eQn _1RQYI _1Hokl">
															<span className="_3HH04 _3s0_v _2H5le _3kEx1 _3bHO3">
																<svg width={0} height={0} viewBox="0 0 24 24" version="1.1"
																	xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
																	<g>
																		<path d="M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-7 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm14 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
																	</g>
																</svg>
															</span>
														</button>
													</div>
												</div>
												<span>
													<span>
														<div>
															<div className="_1aF7c">
																<button className="_13eQn _1RQYI _1Hokl _3bHO3 HD49n">
																	<span className="_3HH04 _3s0_v _3kEx1">
																		<svg
																			xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
																			<path d="M5 16v2a1 1 0 01-.883.993L4 19a1 1 0 01-1-1v-2a8 8 0 018-8h1V3.562c0-.28.204-.511.471-.555L12.562 3h.144a1 1 0 01.613.21l.1.088 7.294 7.41a1 1 0 01.279.571l.008.13v.215a1 1 0 01-.174.564l-.073.095-7.33 8.376a1 1 0 01-.63.333l-.122.008h-.108a.563.563 0 01-.556-.471L12 20.438V16H5zm9-6h-3a6.102 6.102 0 00-1.431.172l-.324.089c-.14.043-.28.09-.415.144l-.304.127-.221.106-.216.114-.175.101-.122.076-.318.216-.079.058a6.024 6.024 0 00-.284.228l-.135.118-.205.195-.188.195-.129.144-.163.199-.136.179-.12.17-.14.213-.113.192-.115.213-.15.309-.147.363-.029.08L14 14v2.962l4.735-5.412L14 6.74V10z" />
																		</svg>
																	</span>
																</button>
															</div>
														</div>
													</span>
												</span>
												<div className="_4HnhN _3izvs">
													<div className="_38VMd">
														<div tabIndex={0} className="_3yGwx" role="button" aria-haspopup="listbox" aria-expanded="false">
															<button className="_13eQn _1RQYI _1Hokl">
																<span className="qFWIQ">
																	<span className="_3HH04 _3s0_v _3kEx1 _3bHO3">
																		<svg width={0} height={0} viewBox="0 0 24 24"
																			xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
																			<g>
																				<path d="M13 14h8v5.644c0 .75-.683 1.356-1.524 1.356H13v-7zm-2 0v7H4.525C3.683 21 3 20.393 3 19.644V14h8zM7.228 3.965a1.346 1.346 0 0 1 1.968 0c.268.297.68 1.435 1.07 2.86a2.11 2.11 0 0 0-.156.386c-1.43-.424-2.588-.881-2.882-1.173a1.524 1.524 0 0 1 0-2.073m7.539.031c.262-.277.612-.43.984-.43s.722.153.985.43.407.645.407 1.037c0 .391-.144.76-.405 1.035-.294.292-1.445.746-2.868 1.17a2.065 2.065 0 0 0-.163-.413c.387-1.41.794-2.533 1.06-2.829m4.78 3.708h-2.67c.37-.186.678-.379.865-.575 1.099-1.158 1.099-3.035 0-4.192a2.738 2.738 0 0 0-1.99-.868c-.721 0-1.442.289-1.991.868-.457.48-.896 1.667-1.254 2.89a1.865 1.865 0 0 0-.52-.082c-.182 0-.354.033-.52.081-.36-1.233-.803-2.436-1.264-2.92a2.734 2.734 0 0 0-1.99-.869c-.72 0-1.441.29-1.99.868-1.1 1.158-1.1 3.035 0 4.192.196.208.527.412.925.607H4.42c-.784 0-1.42.67-1.42 1.495v1.273c0 .826.636 1.495 1.42 1.495h6.495V7.763h2.134v4.204h6.497c.784 0 1.42-.67 1.42-1.495V9.199c0-.826-.636-1.495-1.42-1.495" />
																			</g>
																		</svg>
																	</span>
																</span>
															</button>
														</div>
													</div>
												</div>
												<div className="_3izvs">
													<button type="button" className="ucOYB LeP7k _30Ifr iQAgn _1jsZj" data-hook="user_watch_button">
														<span className="_3HH04 _3OIXv">
															<svg
																xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 8">
																<path d="M4.75,3.25 L7,3.25 L7,4.75 L4.75,4.75 L4.75,7 L3.25,7 L3.25,4.75 L1,4.75 L1,3.25 L3.25,3.25 L3.25,1 L4.75,1 L4.75,3.25 Z" />
															</svg>
														</span>
														<span className>Watch</span>
													</button>
												</div>
												
										</nav>
										<div>
													<Route path="/ressources_relationnelles/aperçu" component={Aperçu}/>
													<Route path="/ressources_relationnelles/galerie" component={Galerie}/>
													<Route path="/ressources_relationnelles/favoris" component={Favoris}/>
													<Route path="/ressources_relationnelles/ressources" component={Ressources}/>
													<Route path="/ressources_relationnelles/apropos" component={APropos}/>
													<Route path="/ressources_relationnelles/statistiques" component={Statistiques}/>
												</div>
											</BrowserRouter>
									</div>
								</div>
							</div>
						</div>
						<div className="KCgOw Wwbv8">
							<div className="_1_XQ-">
								<span>
									<span className="qFWIQ">
										<button className="_2BDBB _21aMl" data-role="edit-control" aria-label="Remove Cover Image">
											<span className="_3HH04 _3s0_v _2PPPp _3kEx1 _13wfF">
												<svg
													xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
													<path d="M14 3a1 1 0 011 1v1h5a1 1 0 010 2h-1v11.586a1 1 0 01-.293.707l-1.414 1.414a1 1 0 01-.707.293H7.414a1 1 0 01-.707-.293l-1.414-1.414A1 1 0 015 18.586V7H4a1 1 0 110-2h5V4a1 1 0 011-1h4zm3 4H7v11.171l.829.829h8.341l.83-.83V7zm-7 3a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1zm4 0a1 1 0 011 1v5a1 1 0 01-2 0v-5a1 1 0 011-1z" />
												</svg>
											</span>
										</button>
									</span>
								</span>
								<span className="qFWIQ _78ZUK">
									<button type="button" className="ucOYB _36ZWN _2BDBB" aria-label="Edit Cover Image" data-role="edit-control">
										<span className="_2efqq">
											<span className="_3HH04 _3s0_v _2PPPp _3kEx1 _13wfF">
												<svg viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg">
													<g fillRule="evenodd">
														<path fillRule="nonzero" d="M3 21a1 1 0 01-1-1V6a1 1 0 011-1h10a1 1 0 010 2H4v9.271l1.879-1.878a1 1 0 011.32-.083l.094.083 1.619 1.62L6.084 19h2.754l5.862-6.192a1 1 0 011.413-.039l.038.038L18 14.973V12a1 1 0 012 0v8a1 1 0 01-1 1H3zm7.5-12a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
														<path d="M19 3a1 1 0 011 1l-.001 1H21a1 1 0 010 2h-1.001L20 8a1 1 0 01-2 0l-.001-1H17a1 1 0 010-2h.999L18 4a1 1 0 011-1z" />
													</g>
												</svg>
											</span>
											<span className="_1RqWW">Edit Cover Image</span>
										</span>
									</button>
								</span>
							</div>
						</div>
					</div>
				</div>
      </div>
    )
  }
}

export default MonCompte;