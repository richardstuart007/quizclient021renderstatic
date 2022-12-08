//
//  Libraries
//
import { useSnapshot } from 'valtio'
import { Container, Grid, Typography } from '@mui/material'
//
//  Debug Settings
//
import debugSettings from '../../debug/debugSettings'
//
//  Controls
//
import MyButton from '../../components/controls/MyButton'
//
//  Utilities
//
import { ValtioStore } from '../ValtioStore'
//..............................................................................
//.  Initialisation
//.............................................................................
//
// Debug Settings
//
const debugLog = debugSettings()
//===================================================================================
const QuizSplash = () => {
  if (debugLog) console.log('Start QuizSplash')
  //
  //  Define the ValtioStore
  //
  const snapShot = useSnapshot(ValtioStore)
  const CurrentPage = snapShot.v_Page
  //...................................................................................
  //.  Render the form
  //...................................................................................
  return (
    <Grid container>
      <Container>
        <Typography variant='h6' sx={{ marginTop: '8px', color: 'blue' }}>
          STATIC VERSION 021
        </Typography>
        <Typography variant='subtitle2' sx={{ marginTop: '8px' }}>
          Developed by Richard Stuart
        </Typography>
        <Typography variant='subtitle2' sx={{ marginTop: '8px' }}>
          Contact Details
        </Typography>
        <Typography variant='subtitle2' sx={{ marginTop: '8px', color: 'green' }}>
          email: richardstuart007@hotmail.com
        </Typography>
        <Typography variant='subtitle2' sx={{ marginTop: '8px', color: 'green' }}>
          mobile: +64211460242
        </Typography>
        {/*.................................................................................................*/}
        <Typography variant='subtitle2' sx={{ marginTop: '32px' }}>
          Click on the button below to use new database version
        </Typography>

        <Grid item xs={12}>
          <MyButton
            color='secondary'
            type='submit'
            text='New Database Version'
            value='Submit'
            href='https://quizclient021render.onrender.com/'
          />
        </Grid>
        {/*.................................................................................................*/}
        <Typography variant='subtitle2' sx={{ marginTop: '32px' }}>
          Alternatively click on the button below to use the old static version, soon to be disabled
        </Typography>

        <Grid item xs={12}>
          <MyButton
            color='secondary'
            type='submit'
            text='Continue'
            value='Submit'
            variant='outlined'
            onClick={() => {
              ValtioStore.v_PagePrevious = CurrentPage
              ValtioStore.v_Page = 'QuizRestart'
            }}
          />
        </Grid>
        {/*.................................................................................................*/}
      </Container>
    </Grid>
  )
}

export default QuizSplash
