exports.middlewareGlobal = (req, res, next) => {
  res.local.umaVariavelLocal = 'Este é o valor da variavel local'
  next()
}

exports.outroMiddleware = (req, res, next) => {
  next()
}
