import React from 'react';

import avatar from './assets/avatar.svg';
import './Avatar.css';
import classNames from 'classnames';

export interface IAvatarProps
	extends Omit<React.ComponentProps<'div'>, 'children'> {
	userName?: string;
	src?: string;
	size?: number;
}

export const Avatar: React.FC<IAvatarProps> = ({
	userName,
	src,
	size = 20,
	...props
}) => {
	let children = <img src={avatar} alt={userName ?? ''} />;
	if (src) children = <img src={src} alt={userName ?? ''} />;
	else if (userName) {
		const text = [userName.split(' ')[0][0], userName.split(' ')[1]?.[0]]
			.filter(Boolean)
			.join('')
			.toUpperCase();
		children = (
			<span className={'text'}>
				<span>{text}</span>
			</span>
		);
	}
	return (
		<div
			{...props}
			className={classNames('root', props.className)}
			style={{
				...props.style,
				minWidth: size,
				width: size,
				height: size,
				fontSize: size,
			}}
			title={props.title ?? userName}
		>
			{children}
		</div>
	);
};