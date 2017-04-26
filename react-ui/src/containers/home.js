import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {userFetchData,setActiveUser,homeError} from '../actions/home.js';
import Home from '../components/home/home.js'

const mapStateToProps=(state)=>{
return{
        id_user:state.rootReducer.id_user,
        users: state.rootReducer.users,
        activeUser: state.rootReducer.activeUser,
        error: state.rootReducer.error,
        loading: state.rootReducer.loading
    };
};

const mapDispatchToProps = (dispatch) =>{
    return{
        addUser:  bindActionCreators(userFetchData,dispatch),
        selectUser: bindActionCreators(setActiveUser,dispatch),
        acknowledgeError: bindActionCreators(homeError,dispatch)
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);