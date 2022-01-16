import React, {useState} from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import DialogInput from './DialogInput'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import MarginWrapper from '../Container/MarginWrapper'
import { CREATE_NEW_CARD } from '../graphql'
import { useMutation } from '@apollo/client'
import { codeToString } from '../Constants/collegeName'


export default function NewCard() {

  const [open, setOpen] = useState(false)
  const [cardName, setCardName] = useState("")
  const [cardID, setCardID] = useState("")
  const [pickupLocation, setPickupLocation] = useState("")
  const [saveLocation, setSaveLocation] = useState("")
  const [pickupContact, setPickupContact] = useState("")

  const handleClickOpen = () => {
    setOpen(true)
    setCardName("")
    setCardID("")
    setPickupLocation("")
    setSaveLocation("")
    setPickupContact("")
  }

  const handleCancel = () => {
    setOpen(false)
  }


  const [createNewCard, {data, loading, error}] = useMutation(CREATE_NEW_CARD)


  const handleSubmit = () => {
    const { collegeString, departmentString } = codeToString(cardID.slice(3,6))
    setCardID(cardID.toLowerCase())

    alert(`此功能尚未開發: 
      date: ${new Date()},
      name: ${cardName},
      studentID: ${cardID},
      college: ${collegeString},
      department: ${departmentString},
      pickupLocation: ${pickupLocation},
      saveLocation: ${saveLocation},
      pickupContact: ${pickupContact},
    將會在未來加入資料庫`)
    setOpen(false)
  }



  return (
    <MarginWrapper left="30px">
      <Button variant="contained" onClick={handleClickOpen}>
        <MarginWrapper right="7px">新增</MarginWrapper>  
        <AddCircleIcon />
      </Button>
      <Dialog open={open} onClose={handleCancel}>
        <DialogTitle>新增遺失的學生證</DialogTitle>
        <DialogContent>
          <DialogContentText>
            請輸入以下資訊以新增遺失的學生證
          </DialogContentText>
          <DialogInput
            label="卡片姓名"
            setValue={setCardName}
          />
          <DialogInput 
            label="卡片學號"
            setValue={setCardID}
          />
          <DialogInput 
            label="拾獲地點"
            setValue={setPickupLocation}
          />
          <DialogInput 
            label="保管地點"
            setValue={setSaveLocation}
          />
          <DialogInput 
            label="拾獲者聯繫方式 (ex. NTU mail, FB)"
            setValue={setPickupContact}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>取消</Button>
          <Button onClick={handleSubmit}>新增</Button>
        </DialogActions>
      </Dialog>
    </MarginWrapper>
  )
}
