// import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import ContactForm from './pages/Contact/ContactForm';

// class NameForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
//       handleChange(event) {    
//         this.setState({value: event.target.value});  
//       }
//       handleSubmit(event) {
//         alert('Um nome foi enviado: ' + this.state.value);
//         event.preventDefault();
//       }
    
//       render() {
//         return (
//           <form onSubmit={this.handleSubmit}>
//             <label>
//               Nome:
//               <input type="text" value={this.state.value} 
//               onChange={this.handleChange}/>    
//               <ContactForm/>    
//             </label>
//             <input type="submit" value="Enviar formulário!"/>
//           </form>
//         );
//       }
// }

// export default NameForm;