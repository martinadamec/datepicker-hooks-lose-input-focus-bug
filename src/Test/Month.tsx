import React from 'react';
import { FirstDayOfWeek, useMonth } from '@datepicker-react/hooks';
import Day from './Day';


interface IMonth {
	year: number;
	month: number;
	firstDayOfWeek: FirstDayOfWeek;
}


function Month ( { year, month, firstDayOfWeek }: IMonth ) {
	const { days, weekdayLabels, monthLabel } = useMonth( {
		year,
		month,
		firstDayOfWeek
	} );

	return (
		<div>
			<div style={{ textAlign: 'center', margin: '0 0 16px' }}>
				<strong>{monthLabel}</strong>
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(7, 1fr)',
					justifyContent: 'center'
				}}
			>
				{weekdayLabels.map( dayLabel => (
					<div style={{ textAlign: 'center' }} key={dayLabel}>
						{dayLabel}
					</div>
				) )}
			</div>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(7, 1fr)',
					justifyContent: 'center'
				}}
			>
				{days.map( day => {
					if ( typeof day !== 'number' ) {
						return (
							<Day date={day.date} key={day.dayLabel} day={day.dayLabel} />
						);
					}
					return null;
				} )}
			</div>
		</div>
	);
}

export default Month;
