import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {push} from 'redux-little-router';
import {setFirstUser,setSecondUser} from '../actions/compare.js';
import NavToolBar from '../components/navtoolbar/navtoolbar.js'


const mapDispatchToProps = (dispatch) =>{
    return{
        push:  bindActionCreators(push,dispatch),
        setFirst:  bindActionCreators(setFirstUser,dispatch),
        setSecond: bindActionCreators(setSecondUser,dispatch)
    }
};

export default connect(null,mapDispatchToProps)(NavToolBar);