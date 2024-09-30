import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

class App extends Component {
  state={nameinput: '', addressInput:''}

  onSubmission= async ()=>{
    const {nameinput, addressInput}= this.state
    const userdata= {
      userId: uuidv4(),
      addressId: uuidv4(),
      name: nameinput,
      address: addressInput
    }
    const url='http://localhost:2999/api/register'
    const option= {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userdata)
    }
    await fetch(url, option)
    console.log('Successfully added')
    this.setState({nameinput:'', addressInput:''})
  }

  onInpName=(e)=>{
    this.setState({nameinput: e.target.value})
  }

  onInpAddress=(e)=>{
    this.setState({addressInput: e.target.value})

  }

  render(){
    const {nameinput, addressInput}= this.state
    return (
      <div className='bg-container'>
      <h1 className='heading'>Registration Form</h1>
        <form className='form' onSubmit={this.onSubmission}>
          <label htmlFor='name' className='lable'>Name</label>
          <input value={nameinput} id='name' onChange={this.onInpName} type='text' />
          <label htmlFor='address' className='lable'>Address</label>
          <input value={addressInput} id='address' onChange={this.onInpAddress} type='text'/>
          <button className='button' type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
