const router = require('express').Router()
const Resolver = require('@tools/resolver')
const {
  AttSchedule, AttException, AttExceptionRequest, AttExceptionAuthorization, AttExceptionCancelation, AttShift, AttShiftAssign, AttType, Employee } = require('@models/hr')

router.route('/attexception')
  .get(new Resolver(require('@resources/hr/attexception/read'), AttException))
  .post(new Resolver(require('@resources/hr/attexception/create'), AttException))
  .put(new Resolver(require('@resources/hr/attexception/update'), AttException))
  .delete(new Resolver(require('@resources/hr/attexception/delete'), AttException))

router.route('/attshift')
  .get(new Resolver(require('@resources/hr/attshift/read'), AttShift))
  .post(new Resolver(require('@resources/hr/attshift/create'), AttShift))
  .put(new Resolver(require('@resources/hr/attshift/update'), AttShift))
  .delete(new Resolver(require('@resources/hr/attshift/delete'), AttShift))

router.route('/attschedule')
  .get(new Resolver(require('@resources/hr/attschedule/read'), AttSchedule))
  .post(new Resolver(require('@resources/hr/attschedule/create'), AttSchedule))
  .put(new Resolver(require('@resources/hr/attschedule/update'), AttSchedule))
  .delete(new Resolver(require('@resources/hr/attschedule/delete'), AttSchedule))

router.route('/atttype')
  .get(new Resolver(require('@resources/hr/atttype/read'), AttType))
  .post(new Resolver(require('@resources/hr/atttype/create'), AttType))
  .put(new Resolver(require('@resources/hr/atttype/update'), AttType))
  .delete(new Resolver(require('@resources/hr/atttype/delete'), AttType))

router.route('/employee')
  .get(new Resolver(require('@resources/hr/employee/read'), Employee))
  .post(new Resolver(require('@resources/hr/employee/create'), Employee))
  .put(new Resolver(require('@resources/hr/employee/update'), Employee))
  .delete(new Resolver(require('@resources/hr/employee/delete'), Employee))

router.route('/attreport')
  .get(new Resolver(require('@resources/hr/attreport/read')))

module.exports = router
