import React from 'react'
import { columns, data } from './UserList'
import Table from 'material-table'
import { AddBox, ArrowDownward } from "@material-ui/icons";
function Users() {
    return (
        <Table title="User Listing" columns={columns} data={data} icons={AddBox,ArrowDownward} />
    )
}

export default Users
