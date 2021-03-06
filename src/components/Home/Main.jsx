import React, { Fragment, useState, useEffect, useContext } from 'react';
import { ViewportContext } from '../Common/Context';
import { Grid } from 'semantic-ui-react';
import Button from './Button';
import Header from './Header';
import Image from './Image';

const Main = ({ headerVisible, setMenuItemClicked, setImgLoaded }) => {
	const [imgSrc, setImgSrc] = useState('');
	const [arrowMoving, setArrowMoving] = useState(true);
	const { stackable, breakpoint } = useContext(ViewportContext);
	
	//move arrow up and down
	useEffect(() => {	
		if (!headerVisible) return;
		
		const timeout = setTimeout( () => {
			setArrowMoving(!arrowMoving);	
		}, 1500); 

		return () => clearTimeout(timeout);

	}, [arrowMoving, headerVisible]);

	useEffect(
		() => {
			const img = require(`../../images/header_img.jpg`); 
			setImgSrc(img);			
		}, []
	);

	const props = {
		visible: headerVisible,
		stackable,
		breakpoint
	};
		
	const buttonProps = {
		...props,
		arrowMoving,
		setArrowMoving,
		setMenuItemClicked
	};

	return (
		<Fragment>
			<Grid.Row> {/**logo coming soon */}</Grid.Row>
				
			<Header {...props} />							
				
			<Image {...props} setImgLoaded={setImgLoaded} src={imgSrc} />
					
			<Button {...buttonProps} />	
		</Fragment>		
	);
}

export default Main;