import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { DogWalkRow } from './DogWalkRow'

export const DogWalkList = ({days}) => (
	<table>
		<thead>
			<tr>
				<th>Date</th>
				<th>Destination</th>
				<th>Raining</th>
				<th>Offleash</th>
			</tr>
		</thead>
		<tbody>
			{days.map((day, i) =>
				<DogWalkRow key={i}
							{...day}/>
			)}
		</tbody>

	</table>
)