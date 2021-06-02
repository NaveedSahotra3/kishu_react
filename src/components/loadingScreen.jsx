import React from 'react'
import Image06 from '../images/06-small.gif'

const LoadingScreen = ()=>{

    return(<div>

<div id="divLoading" style={{margin: '0px' , padding: '0px', position: 'fixed',  right: '0px', top: '0px', width: '100%', height: '100%', backgroundColor: '#ffffff', zIndex: '30001'}}>
{/* <p style={{position: 'absolute' ,color: 'White' , top: '50%' , left: '45%'}}>
Loading, please wait...
</p> */}
<img style={{position: 'absolute' ,color: 'White' , top: '6%' , left: '33%'}} src={Image06}/>
</div>

    </div>)
}

export default LoadingScreen