export const draftKingsCompiler = (arr) => {
  // data containers
  const goalsArr = []
  const assistsArr = []
  const shotsArr = []
  const blocksArr = []
  const shpArr = []
  // goals
  const goals = arr.filter((game) => {
    return game.stat.goals > 0
  })
  goals.forEach((game) => {
    goalsArr.push(game.stat.goals)
  })
  // short handed points
  const shp = arr.filter((game) => {
    return game.stat.shortHandedPoints > 0
  })
  shp.forEach((game) => {
    shpArr.push(game.stat.goals)
  })
  // assists
  const assists = arr.filter((game) => {
    return game.stat.assists > 0
  })
  assists.forEach((game) => {
    assistsArr.push(game.stat.assists)
  })
  // shots
  const shots = arr.filter((game) => {
    return game.stat.shots > 0
  })
  shots.forEach((game) => {
    shotsArr.push(game.stat.shots)
  })
  const shtBonus = shots.filter((game) => {
    return game.stat.shots >= 5
  })
  // blocks
  const blocks = arr.filter((game) => {
    return game.stat.blocked > 0
  })
  const blkBonus = blocks.filter((game) => {
    return game.stat.blocked >= 3
  })
  blocks.forEach((game) => {
    blocksArr.push(game.stat.blocked)
  })
  // points
  const points = arr.filter((game) => {
    return game.stat.points >= 3
  })

  // totals
  const goalTotal = goalsArr.reduce((a, b) => a + b, 0)
  const assistTotal = assistsArr.reduce((a, b) => a + b, 0)
  const shotTotal = shotsArr.reduce((a, b) => a + b, 0)
  const blockTotal = blocksArr.reduce((a, b) => a + b, 0)
  const shpTotal = shpArr.reduce((a, b) => a + b, 0)
  const b = (blockTotal * 1.3) / 1.3
  // obj
  const dkTotals = {
    g: (goalTotal * 8.5) / 8.5,
    a: (assistTotal * 5) / 5,
    sht: (shotTotal * 1.5) / 1.5,
    shtb: (shtBonus.length * 3) / 3,
    blk: Number(b.toFixed(1)),
    blkb: (blkBonus.length * 3) / 3,
    pointB: (points.length * 3) / 3,
    shp: (shpTotal * 2) / 2,
  }
  const dkTotalsArr = [
    (dkTotals.a * 5) / 5,
    (b * 1.3) / 5,
    (dkTotals.blkb * 3) / 5,
    (dkTotals.g * 8.5) / 5,
    (dkTotals.pointB * 3) / 5,
    (dkTotals.shp * 2) / 5,
    (dkTotals.sht * 1.5) / 5,
    (dkTotals.shtb * 3) / 5,
  ]

  const tga = dkTotalsArr.reduce((a, b) => {
    return a + b
  }, 0)
  const tenGameAvg = Number(tga.toFixed(2))
  return { dkTotals, tenGameAvg }
}

export const dkGoalieCompiler = (arr) => {
  const svArr = []
  const gaArr = []

  // wins
  const wins = arr.filter((game) => {
    return game.isWin
  })
  const otl = arr.filter((game) => {
    return game.isWin && game.isOT
  })
  // saves
  const svBonus = arr.filter((game) => {
    return game.stat.saves >= 35
  })
  arr.forEach((game) => {
    svArr.push(game.stat.saves)
  })
  const svTotal = svArr.reduce((a, b) => a + b, 0)
  // goals against
  const goalsAgainst = arr.filter((game) => {
    return game.stat.goalsAgainst > 0
  })
  goalsAgainst.forEach((game) => {
    gaArr.push(game.stat.goalsAgainst)
  })
  const gaTotal = gaArr.reduce((a, b) => a + b, 0)

  // totals
  const dkTotals = {
    w: wins.length,
    sv: svTotal,
    ga: gaTotal,
    sho: 5 - goalsAgainst.length,
    otl: otl.length,
    svb: svBonus.length,
  }
  const dkTotalsArr = [
    (dkTotals.w * 6) / 5,
    (dkTotals.sv * 0.7) / 5,
    (dkTotals.ga * -3.5) / 5,
    (dkTotals.sho * 4) / 5,
    (dkTotals.otl * 2) / 5,
    (dkTotals.svb * 3) / 5,
  ]
  const tga = dkTotalsArr.reduce((a, b) => a + b, 0)
  const tenGameAvg = Number(tga.toFixed(2))
  return { dkTotals, tenGameAvg }
}
