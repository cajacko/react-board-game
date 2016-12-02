export default function(url, init, success, failure, postData) {
  return dispatch => {
    dispatch(init())

    var config = {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    if (postData) {
      config.body = JSON.stringify(postData)
    }

    var requestUrl = 'http://10.10.50.55:3000/'

    if (url) {
      requestUrl = requestUrl.concat(url)
    }

    return fetch(requestUrl, config)
      .then(response => {
        if (response.status >= 400) {
          dispatch(failure(response))
        }

        return response.json().then(data => {
          dispatch(success(data, postData))
          return data
        }).catch(function(e) {
          dispatch(failure(e))
        })
      }).catch(function(e) {
        dispatch(failure(e))
      })
  }
}