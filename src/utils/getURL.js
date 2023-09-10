

const getURL = () => {
  return process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVELOP_URL : process.env.REACT_APP_PRODUCTION_URL

}

export default getURL