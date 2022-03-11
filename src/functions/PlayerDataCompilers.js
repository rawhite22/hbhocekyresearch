export const playerInfo = (data) => {
  const pi = {
    id: data[0].id,
    name: data[0].fullName,
    position: data[0].primaryPosition.name,
    rookie: data[0].rookie,
  }
  return pi
}

export const playerStats = (data) => {
  const lastTen = data.stats[0].splits.splice(0, 10)

  if (!lastTen[0].stat.shifts) {
    let arr = []
    lastTen.forEach((game) => {
      const statObj = {
        date: game.date,
        stats: {
          saves: game.stat.saves,
          savePct: game.stat.savePercentage,
          shutouts: game.stat.shutouts,
          decision: game.stat.decision,
          goalsAgainst: game.stat.goalsAgainst,
        },
      }
      arr.push(statObj)
    })
    return arr
  } else {
    let arr = []
    lastTen.forEach((game) => {
      const { stat, date } = game
      const {
        assists,
        blocked,
        goals,
        hits,
        shots,
        evenTimeOnIce,
        powerPlayTimeOnIce,
        powerPlayPoints,
        shortHandedPoints,
        pim,
        plusMinus,
      } = stat
      const statObj = {
        date,
        assists,
        blocked,
        goals,
        hits,
        evenTimeOnIce,
        powerPlayTimeOnIce,
        powerPlayPoints,
        shortHandedPoints,
        pim,
        plusMinus,
        shots,
      }
      arr.push(statObj)
    })
    return arr
  }
}

export const playerRankings = (data) => {
  if (data.wins) {
    const goalieRankings = {
      gaa: data.goalsAgainstAverage,
      svpct: data.savePercentage,
      sv: data.saves,
      saavg: data.shotsAgainst,
      so: data.shutOuts,
      w: data.wins,
    }
    return goalieRankings
  } else {
    const skaterRankings = {
      g: data.rankGoals,
      a: data.rankAssists,
      h: data.rankHits,
      bs: data.rankBlockedShots,
      s: data.rankShots,
      ppg: data.rankPowerPlayGoals,
      pm: data.rankPlusMinus,
    }
    return skaterRankings
  }
}

export const compareCompiler = (info, lastTen) => {
  const q = {}
  q.name = info.name
  q.id = info.id
  q.position = info.position
  const g = (lastTen, category) => {
    let n = []
    if (info.position === 'Goalie') {
      lastTen.forEach((game) => {
        n.push(game.stats[category])
      })
      return n.reduce((a, b) => a + b) / 10
    } else {
      lastTen.forEach((game) => {
        n.push(game[category])
      })
      return n.reduce((a, b) => a + b) / 10
    }
  }

  if (info.position !== 'Goalie') {
    q.stats = {
      goals: g(lastTen, 'goals'),
      assists: g(lastTen, 'assists'),
      blocks: g(lastTen, 'blocked'),
      hits: g(lastTen, 'hits'),
      plusMinus: g(lastTen, 'plusMinus'),
      penatlyMinutes: g(lastTen, 'pim'),
      powerPlayPoints: g(lastTen, 'powerPlayPoints'),
      shp: g(lastTen, 'shortHandedPoints'),
      shots: g(lastTen, 'shots'),
    }
  }
  if (info.position === 'Goalie') {
    console.log(lastTen)
    q.stats = {
      saves: g(lastTen, 'saves'),
      ga: g(lastTen, 'goalsAgainst'),
      svPct: g(lastTen, 'savePct').toFixed(2),
      so: g(lastTen, 'shutouts'),
    }
  }
  return q
}
