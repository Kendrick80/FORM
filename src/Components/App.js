import React from 'react';


const App=()=> {
  const [formData, setFormData]=React.useState({
    name:"Bing",
    value:" "
  })
  function toggleChange(event){
    const {name,value}=event.target
    setFormData(previousData=>({
      ...previousData,[name]:value
    }))
  }
  return (
<div className="form">
<div className='Box'>

</div>
  <form>
    <input
      type='text'
      className='txt'
      name={formData.name}
      value={formData.value}
      onChange={toggleChange}
    />
  </form>
</div>
  );
};


export default App;