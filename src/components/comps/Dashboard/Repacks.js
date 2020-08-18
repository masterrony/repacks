import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import Card from "@material-ui/core/Card";
import IconButton from '@material-ui/core/IconButton'
import SortIcon from "@material-ui/icons/ArrowDownward";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import actions from '../../../redux/actions'
import { useSelector, useDispatch } from 'react-redux'
import { ImageUrl } from '../../../config'
import TableSubHeader from './TableSubHeader'
import GameFormDialog from './GameFormDialog'
import DeleteComfirmDialog from '../Utils/DeleteComfirmDialog'
import PopupNotify from '../Utils/PopupNotify'
import BackDrop from '../Utils/BackDrop'
import RowDetail from '../Utils/RowDetail'



const Repacks = () => {
  const repacks = useSelector(state => state.app.repacks)
  const actionResult =  useSelector(state => state.app.actionResult)
  const dispatch = useDispatch()
  const [openForm, setOpenForm] = useState(false)
  const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = useState(false)
  const [openBackDrop, setOpenBackDrop] = useState(false)
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
      cell: row => <div><img className="w-100" src={`${ImageUrl}/${row.image}`} /></div>,
      hide: 'sm'
    },
    {
      name: "Title",
      selector: "title",
      sortable: true
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
  
  useEffect(() => {
    if(!!actionResult) {
      if(actionResult.status === 'pending')
        setOpenBackDrop(true)
      else
        setOpenBackDrop(false)
      } 
  }, [actionResult])

  const openGameFormDialog = target => {
    setGameToEdit(target)
    setOpenForm(true)
  }

  const handleCloseGameFormDialog = () => {
    setOpenForm(false)
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
          pointerOnHover
          highlightOnHover
          responsive
          progressPending={!repacks}
          defaultSortField="title"
          sortIcon={<SortIcon />}
          pagination
          subHeader
          subHeaderComponent={<TableSubHeader onAddBtnClick={() => openGameFormDialog(null)} />}
          expandableRows
          expandOnRowClicked
          expandableRowsHideExpander
          expandableRowsComponent={<RowDetail />}
        />
      </Card>
      <PopupNotify />
      <BackDrop open={openBackDrop} />
      <GameFormDialog 
        open={openForm} 
        target={gameToEdit} 
        handleClose={handleCloseGameFormDialog} 
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
