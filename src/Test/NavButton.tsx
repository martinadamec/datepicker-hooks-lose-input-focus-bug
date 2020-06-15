import React, { PropsWithChildren } from 'react';


interface INavButton {
	callback: ( e: React.MouseEvent ) => void;
}


export default function NavButton ( { children, callback }: PropsWithChildren<INavButton> ) {
	return (
		<button type="button" onClick={callback}>
			{children}
		</button>
	);
}
