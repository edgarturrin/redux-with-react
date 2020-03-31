import { connect } from 'react-redux';

import { Counter } from '../components/Counter';

const mapStateToProps = state => {
	return { counter: state.counter };
}

const mapDispathToProps = dispatch => {
	return {
		increment: () => dispatch({ type: 'INCREMENT' }),
		decrement: () => dispatch({ type: 'DECREMENT' })
	}
}

const createConnection = connect(mapStateToProps, mapDispathToProps);

export default createConnection(Counter);