import React, { useState, useRef } from 'react'
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Card,
  CircularProgress,
  Alert,
} from '@mui/material'
import { useMutation } from '@apollo/client'
import { SIGNUP_USER } from '../graphql/mutations'

const AuthScreen = () => {
  const [showLogin, setShowLogin] = useState(true)
  const [formData, setFormData] = useState({})
  const authForm = useRef(null)
  const [signupUser, { data: signupData, loading: l1, error: e1 }] =
    useMutation(SIGNUP_USER)

  if (l1) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Stack direction="column" spacing={2} alignItems="center">
          <CircularProgress />
          <Typography variant="h6">Authenticating...</Typography>
        </Stack>
      </Box>
    )
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (showLogin) {
      //signin user
    } else {
      signupUser({
        variables: {
          userNew: formData,
        },
      })
    }
  }

  return (
    <Box
      ref={authForm}
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Card variant="outlined" sx={{ padding: '10px' }}>
        <Stack direction="column" spacing={2} sx={{ width: '400px' }}>
          {signupData && (
            <Alert severity="success">
              {signupData.signupUser.firstName} Signed Up
            </Alert>
          )}
          {e1 && <Alert severity="error">{e1.message}</Alert>}
          <Typography variant="h5">
            Please {showLogin ? 'Login' : 'Signup'}
          </Typography>
          {!showLogin && (
            <>
              <TextField
                name="firstName"
                label="First Name"
                variant="standard"
                onChange={handleChange}
              />
              <TextField
                name="lastName"
                label="Last Name"
                variant="standard"
                onChange={handleChange}
              />
            </>
          )}

          <TextField
            type="email"
            name="email"
            label="email"
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            type="password"
            name="password"
            label="password"
            variant="standard"
            onChange={handleChange}
          />
          <Typography
            textAlign="center"
            variant="subtitle1"
            onClick={() => {
              setShowLogin((preValue) => !preValue)
              setFormData({})
              authForm.current.reset()
            }}
          >
            {showLogin ? 'Click here to Signup' : 'Click here to Login'}
          </Typography>
          <Button variant="outlined" type="submit">
            {showLogin ? 'Login' : 'Signup'}
          </Button>
        </Stack>
      </Card>
    </Box>
  )
}

export default AuthScreen
