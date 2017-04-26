//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Compare from '../components/compare/compare.js'
import {setUser} from '../actions/compare.js';
import {bindActionCreators} from 'redux';


const mapStateToProps=(state)=>{
return{
        users: state.rootReducer.users,
        first: state.rootReducer.compare.first,
        second: state.rootReducer.compare.second,
        first_data:state.rootReducer.compare.first_data,
        second_data:state.rootReducer.compare.second_data,
        loading:state.rootReducer.compare.loading
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        setUser:  bindActionCreators(setUser,dispatch),
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Compare);