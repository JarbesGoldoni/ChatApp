import { Box, Typography, Divider, Stack } from '@mui/material'
import React, { useState } from 'react'
import UserCard from './UserCard'
import LogoutIcon from '@mui/icons-material/Logout'

const SideBar = () => {
  const users = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Ane', lastName: 'Kay' },
    { id: 3, firstName: 'Mary', lastName: 'Smith' },
  ]
  return (
    <Box
      backgroundColor={'#f5f5f5'}
      height={'100vh'}
      width={'250px'}
      padding={'10px'}
    >
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography variant="h6">Chat</Typography>
        <LogoutIcon />
      </Stack>
      <Divider />
      {users.map((user) => {
        return <UserCard key={user.id} user={user} />
      })}
    </Box>
  )
}

export default SideBar
