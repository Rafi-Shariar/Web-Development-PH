
import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import FamilyTree from './Components/FamilyTree/FamilyTree'
import FormAction from './Components/FromAction/FormAction'
import HookField from './Components/HookField/HookField'
import ProductManagement from './Components/ProductManagement/ProductManagement'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UnControlledField from './Components/UnCrontrolledField/UnControlledField'

function App() {
  

  return (
    <>

    <h1>Explore React Froms</h1>

    <h2>Simple Form</h2>
  
    <SimpleForm></SimpleForm>
    
    <h2>Form Action</h2>
    <FormAction></FormAction>

    <h2>Controlled Field</h2>
    <ControlledField></ControlledField>

    <h2>Uncrontrolled Field</h2>
    <UnControlledField></UnControlledField>

    {/* <h2>Hook Field</h2>
    <HookField></HookField> */}
     
     <h2>Product Management</h2>
    <ProductManagement></ProductManagement>

    <h2>Family tree</h2>
    <FamilyTree></FamilyTree>      
    </>
  )
}

export default App
