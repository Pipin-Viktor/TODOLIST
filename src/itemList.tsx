interface ItemListProps {
	itemNumber: number;
	itemElement: { todoName: string };
	date: any
}

export const ItemList = (props: ItemListProps) => {
	console.log(props);
	return ( 
		<div className={props.itemNumber === 1 || props.itemNumber === 2 ? "ItemListColored" : "ItemList"}>
		
			{props.itemNumber}
			<li> Hello!</li>
			<p>Current Date: { props.date }</p>
			<p>
				{(props.itemNumber + 1) % 2 === 0 ? props.itemElement.todoName : null}
				{props.itemElement.todoName}
				<br />
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
		</div>
	);
};
