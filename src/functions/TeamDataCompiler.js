export const TeamInfoDataCompiler = (data) => {
  const teamName = data.teams[0].name
  const teamStats = {
    gpg: data.teams[0].teamStats[0].splits[0].stat.goalsPerGame.toFixed(1),
    gapg: data.teams[0].teamStats[0].splits[0].stat.goalsAgainstPerGame.toFixed(
      1
    ),
    ppp: data.teams[0].teamStats[0].splits[0].stat.powerPlayPercentage,
    pkp: data.teams[0].teamStats[0].splits[0].stat.penaltyKillPercentage,
    shpg: data.teams[0].teamStats[0].splits[0].stat.shotsPerGame.toFixed(1),
    shapg: data.teams[0].teamStats[0].splits[0].stat.shotsAllowed.toFixed(1),
  }

  return { name: teamName, stats: teamStats }
}

export const rosterCompile = (data) => {
  let arr = []
  data.forEach((player) => {
    const p = {
      id: player.person.id,
      name: player.person.fullName,
      number: player.jerseyNumber,
      postion: {
        code: player.position.abbreviation,
        type: player.position.type,
      },
    }
    arr.push(p)
  })
  return arr
}

export const filterPlayers = (arr, filter) => {
  switch (filter) {
    case 'All':
      return arr.filter((player) => true)
    case 'Forward':
      return arr.filter((player) => player.postion.type === 'Forward')
    case 'Defenseman':
      return arr.filter((player) => player.postion.type === 'Defenseman')
    case 'Goalie':
      return arr.filter((player) => player.postion.type === 'Goalie')
    default:
      return console.log('error in filter players')
  }
}

export const sortByJerseyNumber = (roster) => {
  const numArr = []
  const strNum = []
  roster.forEach((player) => numArr.push(parseFloat(player.number)))
  numArr.sort((a, b) => a - b)
  numArr.forEach((num) => {
    strNum.push(num.toString())
  })
  const compareArr = (arr1, arr2) => {
    let orderedTeam = []
    if (arr1.length !== arr2.length) {
      return false
    } else {
      for (let i = 0; i < arr1.length; i++) {
        arr2.forEach((player) => {
          if (player.number === arr1[i]) {
            orderedTeam.push(player)
          }
        })
      }
      return orderedTeam
    }
  }
  const filterArr = compareArr(strNum, roster)
  return filterArr
}
