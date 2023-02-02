import React from 'react'
import landingIllustration from './assets/landingIllustration.png'
function MainForm() {
  return (
    <div>
    <form className='mainForm'>
      <label htmlFor="">City</label><br />
        <input type="text" placeholder="Location" className='homeFields'></input>'
        <br></br>
        <label htmlFor="">Type</label> <br />
        <select placeholder="Hospital Type" className='homeFields2'>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
</select>
    </form>
<img src={landingIllustration} alt="landingIllustration" className='illustration' />
    </div>
  )
}

export default MainForm