import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import SortIcon from "@material-ui/icons/ArrowDownward";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import actions from '../../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { ImageUrl } from '../../../config'
import TableSubHeader from './TableSubHeader'
import GameFormDialog from './GameFormDialog'
import DeleteComfirmDialog from './utils/DeleteComfirmDialog'


const isIndeterminate = indeterminate => indeterminate;
const selectableRowsComponentProps = { indeterminate: isIndeterminate };

const Repacks = () => {
  const repacks = useSelector(state => state.app.repacks)
  const dispatch = useDispatch()
  const [openForm, setOpenForm] = useState(false)
  const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = useState(false)
  const [gameToEdit, setGameToEdit] = useState(null)
  const [gameToDelete, setGameToDelete] = useState(null)

  const columns = [
    {
      name: "No",
      cell: (row, index) => <div>{index+1}</div>,
      width: "5px"
    },
    {
      name: "Image",
      selector: "image",
      cell: row => <div><img src={`${ImageUrl}/${row.image}`} /></div>,
      grow: 2,
      hide: 'sm'
    },
    {
      name: "Title",
      selector: "title",
      sortable: true
    },
    {
      name: "Detail",
      selector: "detail",
      sortable: true,
    },
    {
      name: "Tags",
      selector: "tags",
      sortable: true,
    },
    {
      name: "Companies",
      selector: "companies",
      sortable: true,
    },
    {
      name: "Languages",
      selector: "languages",
      sortable: true,
    },
    {
      name: "Original Size",
      selector: "original_size",
      sortable: true,
    },
    {
      name: "Repacked Size",
      selector: "repacked_size",
      sortable: true,
    },
    {
      name: "Created",
      selector: "date",
      sortable: true
    },
    {
      name: "Action",
      cell: (row, index, column, id) => <>
        <IconButton 
          color="primary" 
          aria-label="edit"
          onClick={() => openGameFormDialog(row)}
        >
          <EditIcon />
        </IconButton>
        <IconButton 
          color="secondary" 
          aria-label="remove"
          onClick={() => readyToDelete(row._id)}
        >
          <DeleteIcon />
        </IconButton>
      </>
    }
  ];  

  useEffect(() => {
    actions.getRepacks(dispatch)
  }, [])

  const openGameFormDialog = target => {
    setGameToEdit(target)
    setOpenForm(true)
  }

  const readyToDelete = target => {
    setOpenDeleteConfirmDialog(true)
    setGameToDelete(target)
  }

  const deleteGame = () => {
    actions.deleteRepack(gameToDelete, dispatch)
  }

  return (
    <div className="App">
      <Card>
        <DataTable
          title="Games"
          columns={columns}
          data={repacks}
          keyField="_id"
          highlightOnHover
          responsive
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          subHeader
          subHeaderComponent={<TableSubHeader onAddBtnClick={() => openGameFormDialog(null)} />}
        />
      </Card>
      <GameFormDialog 
        open={openForm} 
        target={gameToEdit} 
        handleClose={() => setOpenForm(false)} 
      />
      <DeleteComfirmDialog
        open={openDeleteConfirmDialog}
        handleClose={() => setOpenDeleteConfirmDialog(false)}
        onConfirm={deleteGame}
      />
    </div>
  );
}

export default Repacks
