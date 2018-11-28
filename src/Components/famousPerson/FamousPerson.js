// import React, {Component} from 'react';

// class famousPeolpe extends Component {

//     state = {
//       user: {
//         name: '',
//         role: ''
//       }
//     }
  
//     famousPeople = (propertyName)=>{
//       console.log('this is famousPeolpe');
//       return (event)=>{
//         console.log('this is event handler');
//         this.setState({
//           user:{
//             ...this.state.user,
//             [propertyName] : event.target.value
//           }
//         })
  
//       }
//     }
// }

// // {/* <div>
// // <input type='text' onChange={this.famousPeople('name')} />
// // <input type='text' onChange={this.famousPeople('role')} />
// // <button onClick={this.handleClick}>Add</button>
// // <p> Name of famous person: {this.state.user.name} thier role: {this.state.user.role}</p>
// // </div> */}

// export default famousPeolpe;