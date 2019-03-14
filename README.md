# HOC withLoadData
Send Redux action to load data, and return null instead wrapped Component until check function returns true

Usage:
```
    withLoadData({
        actionLoadData,
        checkIsDataLoaded,
    })(Component)
```

- HOC connect component to Redux `store`
- `actionLoadData` will bind to redux dispatch, so it can be regular Redux action
- `checkIsDataLoaded` receive `state` as a param, so we have access to redux state


