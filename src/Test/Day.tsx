import React, { useContext, useRef } from 'react';
import { useDay } from '@datepicker-react/hooks';
import DatepickerContext from './datepickerContext';


interface IDay {
	day: number | string;
	date: Date;
}


function Day ( { day, date }: IDay ) {
	const dayRef = useRef( null );
	const {
		focusedDate,
		isDateFocused,
		isDateSelected,
		isDateHovered,
		isDateBlocked,
		isFirstOrLastSelectedDate,
		onDateSelect,
		onDateFocus,
		onDateHover
	} = useContext( DatepickerContext );
	const {
		isSelected,
		isSelectedStartOrEnd,
		onClick,
		onKeyDown,
		onMouseEnter,
		tabIndex
	} = useDay( {
		date,
		focusedDate,
		isDateFocused,
		isDateSelected,
		isDateHovered,
		isDateBlocked,
		isFirstOrLastSelectedDate,
		onDateFocus,
		onDateSelect,
		onDateHover,
		dayRef
	} );

	if ( !day ) {
		return <div />;
	}

	return (
		<button
			onClick={onClick}
			onKeyDown={onKeyDown}
			onMouseEnter={onMouseEnter}
			tabIndex={tabIndex}
			type="button"
			ref={dayRef}
			style={{
				color: isSelected || isSelectedStartOrEnd ? 'white' : 'black',
				background: isSelected || isSelectedStartOrEnd ? 'blue' : 'white'
			}}
		>
			{day}
		</button>
	);
}

export default Day;
