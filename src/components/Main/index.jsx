import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid } from '@material-ui/core'
import useStyles from './styles'
import Form from './Form'
import List from './List'
import { BudgetAlchemyContext } from '../../context/BudgetAlchemyContext'

const Main = () => {
  const classes = useStyles()

  const { balance } = useContext(BudgetAlchemyContext)
  console.log(balance)

  return (
    <Card className={classes.root}>
      <CardHeader title='Budget Alchemy' subheader='Manage your expenses and more!' />
      <CardContent>
        <Typography align='center' variant='h5'>
          Total Balance: ${balance}
        </Typography>
        <Typography variant='subtitle1' style={{ lineHeight: '1.5em', marginTop: '20px' }}>
        </Typography>
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
