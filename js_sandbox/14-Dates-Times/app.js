let val

const today = new Date()
let birthday = new Date('9-10-1981 11:25:00')
birthday = new Date('September 10 1981')
birthday = new Date('09/10/1981')

val = today.getMonth()                                // Output: 3      (April)

val = today.getDate()                                 // Output: 26     (Today is April 26th)

val  = today.getDay()                                 // Output: 5      (Today is Friday)

val  = today.getFullYear()                            // Output: 2019   (Current Year: 2019)

val  = today.getHours()                               // Output: 17     (Current Time: 5:00 PM)

val  = today.getMinutes()                             // Output: 1      (Current Time: 5:01 PM)

val  = today.getSeconds()                             // Output: 22     (Current Time: 5:01:22 PM)

val  = today.getMilliseconds()                        // Output: 989     

val = today.getTime()                                 // Output: 1556324765820 (In Seconds)

birthday.setMonth(2)                                  // Output: Tue Mar 10 1981
birthday.setDate(12)                                  // Output: Thu Mar 12 1981
birthday.setFullYear(1985)                            // Output: Tue Mar 12 1985
birthday.setHours(3)                                  // Output: Tue Mar 12 1985 03:00:00
birthday.setMinutes(30)                               // Output: Tue Mar 12 1985 03:30:00
birthday.setSeconds(25)                               // Output: Tue Mar 12 1985 03:30:25

console.log(birthday)