export function getCurrentTime() {

  const now = new Date()

  const hours = String(now.getHours()).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const seconds = String(now.getSeconds()).padStart(2, '0')
  
  return `${hours}:${minutes}:${seconds}`
}

export function getCurrentDate() {

  const currentDate = new Date(); 

  const day = currentDate.getDate()
  const month = currentDate.getMonth() + 1
  const year = currentDate.getFullYear()

  const formattedDay = day < 10 ? `0${day}` : day
  const formattedMonth = month < 10 ? `0${month}` : month

  return `${formattedDay}.${formattedMonth}.${year}`
}