import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'

export const DogWalkRow = ({destination, date, raining, offleash}) => (
	<tr>
		<td>
			{date}
		</td>
		<td>
			{destination}
		</td>
		<td>
			{(raining) ? <SnowFlake /> : null}
		</td>
		<td>
			{(offleash) ? <Terrain /> : null}
		</td>
	</tr>
)