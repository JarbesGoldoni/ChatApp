import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  TextField,
} from '@mui/material'

const ChatScreen = () => {
  const { id, name } = useParams()
  return (
    <Box flexGrow={1}>
      <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: 0 }}>
        <Toolbar>
          <Avatar
            src={`https://ui-avatars.com/api/?name=${name}`}
            sx={{ width: '32px', height: '32px', mr: 2 }}
          />
          <Typography variant={'h6'} color={'black'} sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box backgroundColor={'#f5f5f5'} height={'80vh'}>
        Hi
      </Box>
      <TextField
        placeholder={'Enter a message'}
        variant={'standard'}
        fullWidth
        multiline
        rows={2}
      />
    </Box>
  )
}

export default ChatScreen
