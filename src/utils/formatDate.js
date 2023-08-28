const formatDate = (date) => {
  const dateObject = new Date(date)
  let month = `${dateObject.getMonth() + 1}`
  let day = `${dateObject.getDate()}`
  const year = dateObject.getFullYear()

  if (month.length < 2) {
    month = `0${month}`
  }

  if (day.length < 2) {
    day = `0${day}`
  }

  return [year, month, day].join('-')
}

export default formatDate
