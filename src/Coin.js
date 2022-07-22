import React from 'react'
import './coin.css'

const Coin = ({coin}) => {

    const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
        maximumFractionDigits: 0,
    })

    const formatOperand = (operand) => {
        if (operand == null) return
        const [integer, decimal] = operand.split(".")
        if (decimal == null) return INTEGER_FORMATTER.format(integer)
        return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
    }

  return (
    <div className='coin'>
        <div className='coin-1'>
            <img src={coin.image} alt={coin.name}/>
            <h4 className='coin-name'>{coin.name}</h4>
        </div>
        <div>
            <span className='coin-info'>Rs.{coin.current_price}</span>
        </div>
        <div>
            <span className={coin.market_cap_change_percentage_24h < 0 ? 'coin-info red' : 'coin-info green'}>{coin.market_cap_change_percentage_24h.toFixed(2)}%</span>
        </div>
        <div>
            <span className='coin-info'>Mkt Cap: {formatOperand(String(coin.market_cap))}</span>
        </div>
    </div>
  )
}

export default Coin