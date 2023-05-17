import React from 'react';


const App=()=> {
  const [formData, setFormData]=React.useState({
    name:"Bing",
  })
  function toggleChange(event){
    const {name,value}=event.target
    setFormData(previousData=>({
      ...previousData,[name]:value
    }))
  }
  const styles={
    
      height: "50px",
      width:"90px",
      border:'none',
      margin:"10px 10px",
      backgroundColor:`${formData.name}`
  
  }
  const Style={
    height:"50px",
    width:"300px",
    border:'black solid 0.5px',
    borderRadius:'10px',
    borderColor:formData.name.length<4 ?'red':"green"
  }
  return (
<div className="form">
<div className='Box' style={styles}>

</div>
  <form>
    <input
      type='text'
      style={Style}
      name='name'
      value={formData.name}
      onChange={toggleChange}
    />
  </form>
</div>
  );
};


export default App;