

const getURL = () => {
  return process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEVELOOP_URL : process.env.REACT_APP_PRODUCTION_URL

}

export default getURL