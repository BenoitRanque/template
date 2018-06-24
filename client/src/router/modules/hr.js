export default {
  hash: 'hr',
  layout: 'index',
  meta: {
    label: 'hr',
    requireAuthentication: true
  },
  tabs: [
    {
      hash: 'employees',
      layout: 'workspace',
      meta: {
        label: 'employees',
        requireAuthentication: true,
        requireAuthorization: {
          resource: 'HREmployee',
          posession: 'any'
        }
      }
    },
    {
      hash: 'break',
      layout: 'workspace',
      meta: {
        label: 'attbreak',
        requireAuthentication: true,
        requireAuthorization: {
          resource: 'HRAttBreak',
          posession: 'any'
        }
      }
    },
    {
      hash: 'exception',
      layout: 'workspace',
      meta: {
        label: 'attexception',
        requireAuthentication: true,
        requireAuthorization: {
          resource: 'HRAttException',
          posession: 'any'
        }
      }
    },
    {
      hash: 'shift',
      layout: 'workspace',
      meta: {
        label: 'attshift',
        requireAuthentication: true,
        requireAuthorization: {
          resource: 'HRAttShift',
          posession: 'any'
        }
      }
    },
    {
      hash: 'shiftassign',
      layout: 'workspace',
      meta: {
        label: 'attshiftassign',
        requireAuthentication: true,
        requireAuthorization: {
          resource: 'HRAttShiftAssign',
          posession: 'any'
        }
      }
    },
    {
      hash: 'timetable',
      layout: 'workspace',
      meta: {
        label: 'atttimetable',
        requireAuthentication: true,
        requireAuthorization: {
          resource: 'HRAttTimetable',
          posession: 'any'
        }
      }
    }
  ]
}
