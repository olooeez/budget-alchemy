import React from 'react'
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import useStyles from './styles'
import useTransactions from '../../hooks/useTransactions'

const Details = ({ title }) => {
  Chart.register(ArcElement, Tooltip, Legend)

  const classes = useStyles()
  const { total, chartData } = useTransactions(title)

  return (
    <Card className={title === 'Income' ? classes.income : classes.expenses}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant='h5'>
          ${total}
        </Typography>
        <Doughnut  data={chartData} />
      </CardContent>
    </Card>
  )
}

export default Details
