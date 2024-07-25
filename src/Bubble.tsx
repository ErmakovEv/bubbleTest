import { FC, ReactNode } from 'react';

import './Bubble.css';
import { Avatar } from './Avatar';
import classNames from 'classnames';


interface IContentBlock {
	content: string | ReactNode;
	className?: string;
}

export interface IBubbleProps {
	title?: IContentBlock;
	description?: IContentBlock;
	footer?: IContentBlock;
	avatar?: { src?: string; className?: string; userName?: string };
	className?: string;
	avatarPositinon?: 'left' | 'right';
}

export const Bubble: FC<IBubbleProps> = ({
	title,
	description,
	footer,
	avatar,
	className = '',
	avatarPositinon = 'left',
}) => {
	return (
		<div className={classNames('chatBubbleWrapper', avatarPositinon)}>
			<Avatar
				userName={avatar?.userName}
				src={avatar?.src}
				className={classNames(className, `bubbleAvatar-${avatarPositinon}`)}
			/>
			<div className={'chatBubble'}>
				<div className={'chatMessage'}>
					<div
						className={'chatMessageTitle'}
					>
						{title?.content}
					</div>
					<div
						className={'chatMessageDescription'}
					>
						{description?.content}
					</div>
					<div
						className={'chatMessageFooter'}
					>
						{footer?.content}
					</div>
				</div>
				<svg
					width='20'
					height='14'
					viewBox='0 0 20 14'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className={classNames(
						'chatBubbleArrow',
						`arrow-${avatarPositinon}`,
					)}
				>
					<path
						fill-rule='evenodd'
						clip-rule='evenodd'
						d='M4.9713 0H20C20 7.73199 13.732 14 6 14H0V13.6708C1.43107 12.4696 2.61566 10.987 3.4736 9.30324C4.59604 7.10032 4.89283 4.39657 4.9713 0Z'
						fill='#297FFF'
					/>
				</svg>
			</div>
		</div>
	);
};
