import React from 'react';
import { List as ListElement } from 'semantic-ui-react';
const List = ({ items = [] }) => (
	<ListElement as="ul">
		{items.length &&
			items.map((item, index) => (
				<ListElement.Item key={index} as="li">
					{item}
				</ListElement.Item>
			))}
	</ListElement>
);

export default List;
