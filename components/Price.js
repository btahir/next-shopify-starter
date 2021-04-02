function Price({currency, num, numSize }) {
  return (
    <>
      {currency}<span className={numSize}>{num}</span>
    </>
  )
}

export default Price
