import EmployeesListItem from '../employees-list-item/employees-list-item';
import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleProp}) => {

  const elements = data.map(item => {
    const {id, ...itemProps} = item;
    return (
      // <EmployeesListItem name={item.name} salary={item.salary} />
      <EmployeesListItem
         key={id}
         {...itemProps} 
         onDelete={() => onDelete(id)}
         onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>
    )
  })

  
  return (
        <ul className="app-list list-group">

          {elements}

        {/* <EmployeesListItem name='John S.' salary={800}/>
        <EmployeesListItem name='Alex M.' salary={3000}/>
        <EmployeesListItem name='Karl V.' salary={5000}/> */}
        </ul>
  )
}

export default EmployeesList;