module.exports = async (input, { eager }, { authorize, model }) => {
  let permission = authorize(model.resourceName, 'read', 'any')

  let data = await model.query().allowEager('').eager(eager || '')

  return permission.filter(data)
}