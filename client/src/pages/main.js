import html from '../core/jsx';
import { createElement } from '../core/createElement';
import MainHeader from '../components/MainHeader';
import InputBar from '../components/InputBar';
import RecordContainer from '../components/RecordContainer';
// import WeekBar from '../components/WeekBar';
// import Calendar from '../components/Calendar';
// import CalendarRow from '../components/CalendarRow';

export default function Main() {
	// main
	const render = () => {
		return html`<div id="main">
			${createElement(MainHeader)} ${createElement(InputBar)}
			${createElement(RecordContainer)}
		</div>`;
	};

	// calender
	// const render = () => {
	// 	return html`<div id="main">
	// 		${createElement(MainHeader)} ${createElement(WeekBar)}
	// 		${createElement(Calendar)}
	// 		${createElement(CalendarRow, {
	// 			inAmount: '1,822,480',
	// 			outAmount: '834,640',
	// 			totalAmount: '987,840',
	// 		})}
	// 	</div>`;
	// };

	return { render };
}
