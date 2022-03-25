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
  const b = (blockTotal * 1.3) / 10
  // obj
  const dkTotals = {
    g: (goalTotal * 8.5) / 10,
    a: (assistTotal * 5) / 10,
    sht: (shotTotal * 1.5) / 10,
    shtb: (shtBonus.length * 3) / 10,
    blk: Number(b.toFixed(1)),
    blkb: (blkBonus.length * 3) / 10,
    pointB: (points.length * 3) / 10,
    shp: (shpTotal * 2) / 10,
  }
  const dkTotalsArr = [
    dkTotals.a,
    dkTotals.blk,
    dkTotals.blkb,
    dkTotals.g,
    dkTotals.pointB,
    dkTotals.shp,
    dkTotals.sht,
    dkTotals.shtb,
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
  const gaTotal = (gaArr.reduce((a, b) => a + b, 0) / 10) * -3.5
  console.log(goalsAgainst)
  // totals
  const dkTotals = {
    w: (wins.length * 6) / 10,
    sv: ((svTotal * 0.7) / 10) * 0.7,
    ga: Number(gaTotal.toFixed(1)),
    sho: (10 - goalsAgainst.length) / 10,
    otl: (otl.length * 2) / 10,
    svb: (svBonus.length * 3) / 10,
  }
  const dkTotalsArr = [
    dkTotals.w,
    dkTotals.sv,
    dkTotals.ga,
    dkTotals.sho,
    dkTotals.otl,
    dkTotals.svb,
  ]
  const tga = dkTotalsArr.reduce((a, b) => a + b, 0)
  const tenGameAvg = Number(tga.toFixed(2))
  return { dkTotals, tenGameAvg }
}
