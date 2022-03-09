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
