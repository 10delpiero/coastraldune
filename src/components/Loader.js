import React from 'react'; 
import ReactLoading from 'react-loading';
 
function Loader({type, color, message}) { 
    return ( 
    <div class="contentWrap"> 
    <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}> 
    <h2>{message}</h2> 
    <h2>자료를 불러오고 있습니다.</h2> 
    <ReactLoading type={type} color={color} height={'20%'} width={'20%'} /> 
    </div> 
    </div> 
    ); 
} 

export default Loader;

