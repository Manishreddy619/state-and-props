import React from 'react';

const WarningSign = (props) => {
	return <div>{alert(props.text)}</div>;
};

export default WarningSign;
