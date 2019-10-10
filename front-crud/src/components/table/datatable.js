import React, { useEffect } from 'react'
import MaterialTable from 'material-table'
import { useQuery , useMutation } from '@apollo/react-hooks'

export default function DataTable({ type, title, columns, add, update, remove, list }) {

  const [state, setState] = React.useState({
    columns, 
    [type]: [],
  });

  const [ createAction, updateAction, removeAction ] = [ useMutation(add), useMutation(update), useMutation(remove) ]

  const { refetch } = useQuery(list)

  const fetchData = async () => {
    let data = await refetch().catch(e => console.log(e))
    if(type === 'courses') {
      data = [...data.data[type]].map(e => ({ id: e.id, title: e.title, user: e.user ? e.user.id : 'Unbound' }))
    } else if (type === 'users') {
      data = [...data.data[type]]
    } else {
      data = [...data.data[type]].map(e => ({ id: e.id, name: e.name, user: e.user ? e.user.id : 'Unbound' }))
    }
    setState({ ...state, [type]: data })
  };

  useEffect(() => {
    setTimeout(async () => {
      await fetchData();
    }, 2);
  }, []); // eslint-disable-line

  return (
    <MaterialTable
      title={title}
      columns={columns}
      data={state[type]}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(async () => {
              resolve();
              if (type === 'users') {
                createAction[0]({ variables: newData })
                const users = await refetch().catch(e => console.log(e))
                setState({ ...state, users: [...users.data.users] })
              } else if (type === 'courses') {
                createAction[0]({ variables: {...newData, userId: parseInt(newData.userId), id: parseInt(newData.id) } })
                const courses = await refetch().catch(e => console.log(e))
                setState({ ...state, courses: [...courses.data.courses].map(e => ({ id: e.id, title: e.title, user: e.user ? e.user.id : 'Unbound' })) })
              } else if (type === 'faculties') {
                createAction[0]({ variables: newData })
                const faculties = await refetch().catch(e => console.log(e))
                setState({ ...state, faculties: [...faculties.data.faculties].map(e => ({ id: e.id, name: e.name, user: e.user ? e.user.id : 'Unbound' })) })
              }
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(async () => {
              resolve();
              if (type === 'users') {
                updateAction[0]({ variables: newData })
                const users = await refetch().catch(e => console.log(e))
                setState({ ...state, users: [...users.data.users] })
              } else if (type === 'courses') {
                updateAction[0]({ variables: newData })
                const courses = await refetch().catch(e => console.log(e))
                setState({ ...state, courses: [...courses.data.courses].map(e => ({ id: e.id, title: e.title, user: e.user ? e.user.id : 'Unbound' })) })
              } else if (type === 'faculties') {
                updateAction[0]({ variables: newData })
                const faculties = await refetch().catch(e => console.log(e))
                setState({ ...state, faculties: [...faculties.data.faculties].map(e => ({ id: e.id, name: e.name, user: e.user ? e.user.id : 'Unbound' })) })
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(async () => {
              resolve();
              if (type === 'users') {
                removeAction[0]({ variables: oldData })
                const users = await refetch().catch(e => console.log(e))
                setState({ ...state, users: [...users.data.users] })
              } else if (type === 'courses') {
                removeAction[0]({ variables: oldData })
                const courses = await refetch().catch(e => console.log(e))
                setState({ ...state, courses: [...courses.data.courses].map(e => ({ id: e.id, title: e.title, user: e.user ? e.user.id : 'Unbound' })) })
              } else if (type === 'faculties') {
                removeAction[0]({ variables: oldData })
                const faculties = await refetch().catch(e => console.log(e))
                setState({ ...state, faculties: [...faculties.data.faculties].map(e => ({ id: e.id, name: e.name, user: e.user ? e.user.id : 'Unbound' })) })
              }
            }, 600);
          }),
      }}
    />
  );
}