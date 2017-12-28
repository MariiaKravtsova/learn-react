import React, { Component } from 'react'
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'
import { round, sum } from 'lodash'

const average = (data) => {
  return round(sum(data) / data.length)
}

const Chart = ({color, data}) => {

  return (
    <div>
      <Sparklines height={60} width={100} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type='avg' />
      </Sparklines>
      <div>{average(data)}</div>
    </div>
  )
}

export default Chart